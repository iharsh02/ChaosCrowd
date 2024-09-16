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

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    icon: new URL("/image.jpg", new URL(req.url).origin).toString(),
    label: "Send 1 Sol",
    description: "One of the best movie of all time",
    title: "Your Name",
    links: {
      actions: [
        {
          href: "/api/actions/donate?amoount=0.1",
          label: "0.1 SOl",
        },
        {
          href: "/api/actions/donate?amoount=0.5",
          label: "0.5 SOl",
        },
        {
          href: "/api/actions/donate?amoount={amount}",
          label: "Send SOL",
          parameters: [
            {
              name: "amount",
              label: "Enter ammount",
            },
          ],
        },
      ],
    },
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
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

    let amount: number = 0.1;
    if (url.searchParams.has("ammount")) {
      try {
        amount = parseFloat(url.searchParams.get("amount") || "0.1") || amount;
      } catch (error) {
        throw "Invalid Amount Input";
      }
    }
    const connection = new Connection(clusterApiUrl("devnet"));

    const TO_PUBKEY = new PublicKey(
      "8aHKN9oXox9n99w1btNJyevRmkMbvGNerPYLhqBN71ya"
    );

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
        message: "Thanks",
      },
    });

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (error) {
    let message = "An unkonwn Error occured";
    if (typeof error == "string") message = error;

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
