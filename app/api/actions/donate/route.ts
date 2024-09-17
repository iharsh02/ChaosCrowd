import prisma from "@/lib/prismaDb";
import {
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  ACTIONS_CORS_HEADERS,
  createPostResponse,
} from "@solana/actions";

import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

interface ActionLink {
  href: string;
  label: string;
  parameters?: Array<{ name: string; label: string }>;
}

interface BlinkData {
  label: string;
  title: string;
  wallet: string;
  actions: Array<{ value: number }>;
  imageUrl: string;
  customInput: boolean;
  description: string;
}

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const blinkId = url.searchParams.get("id");

  if (!blinkId) {
    return Response.json(
      { error: "Blink ID is required" },
      {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      }
    );
  }

  try {
    const blink = await prisma.blink.findUnique({
      where: { id: blinkId },
      include: { user: true },
    });

    if (!blink) {
      return Response.json(
        { error: "Blink not found" },
        {
          status: 404,
          headers: ACTIONS_CORS_HEADERS,
        }
      );
    }

    const data = blink.data as BlinkData | null;

    if (!data) {
      return Response.json(
        { error: "Blink data is invalid or null" },
        {
          status: 400,
          headers: ACTIONS_CORS_HEADERS,
        }
      );
    }

    // Map actions from the DB to links (based on the amount)
    const donationActions: ActionLink[] = data.actions.map(
      (action: { value: number }) => ({
        href: `/api/actions/donate?id=${blinkId}&amount=${action.value}`,
        label: `${action.value} SOL`,
      })
    );

    if ((data.customInput)) {
      donationActions.push({
        href: `/api/actions/donate?id=${blinkId}&amount={amount}`,
        label: "Send SOL",
        parameters: [
          {
            name: "amount",
            label: "Enter amount",
          },
        ],
      });
    }

   
    const payload: ActionGetResponse = {
      icon: data.imageUrl,
      label: data.label || "Default Label",
      title: data.title || "Default Title",
      description: data.description || "Default Description",
      links: {
        actions: donationActions,
      },
    };

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (error) {
    console.error("Error fetching blink:", error);
    return Response.json(
      { error: "Internal server error" },
      {
        status: 500,
        headers: ACTIONS_CORS_HEADERS,
      }
    );
  }
};
export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);

    const body: ActionPostRequest = await req.json();
    let account: PublicKey;

    try {
      account = new PublicKey(body.account);
    } catch (error) {
      throw "Invalid Account provided";
    }

    const blinkId = url.searchParams.get("id");
    if (!blinkId) {
      throw "Blink ID is required";
    }

    const blink = await prisma.blink.findUnique({
      where: { id: blinkId },
    });

    if (!blink || !blink.data) {
      throw "Blink not found or invalid";
    }

    //might need to corrrect the type ig
    const data = blink.data as unknown as BlinkData;

    const walletAddress = data.wallet;

    if (!walletAddress) {
      throw "No wallet address found for this blink";
    }

    const TO_PUBKEY = new PublicKey(walletAddress);

    let amount: number = 0.1;
    if (url.searchParams.has("amount")) {
      try {
        amount = parseFloat(url.searchParams.get("amount") || "0.1") || amount;
      } catch (error) {
        throw "Invalid Amount Input";
      }
    }

    const connection = new Connection(clusterApiUrl("devnet"));

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        lamports: amount * LAMPORTS_PER_SOL,
        toPubkey: TO_PUBKEY,
      })
    );

    transaction.feePayer = account;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Thanks for your donation!",
      },
    });

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (error) {
    let message = "An unknown error occurred";
    if (typeof error === "string") message = error;

    return Response.json(
      {
        message,
      },
      {
        headers: ACTIONS_CORS_HEADERS,
      }
    );
  }
};
