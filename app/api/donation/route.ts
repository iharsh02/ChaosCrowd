import {
  ACTIONS_CORS_HEADERS,
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  createPostResponse,
} from "@solana/actions";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from "@solana/web3.js";

import prisma from "@/lib/prismaDb";

// GET request handler
export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id"); // '2'

  try {
    let result = await prisma.blink.findUnique({
      // @ts-ignore
      where: { key: id },
    });

    // @ts-ignore
    const Updatedactions = result.data.links.actions.map((e) => {
      return {
        label: `Donate ${parseFloat(e.value)} SOL`,
        href: `${url.href}?amount=${parseFloat(e.value)}`,
      };
    });
    // @ts-ignore
    result.data.links.actions = Updatedactions;
    // @ts-ignore
    const payload: ActionGetResponse = result?.data;
    console.log(payload);
    return new Response(JSON.stringify(payload), {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: {
          message: "Invalid account",
        },
      }),
      {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      },
    );
  }
}

export const OPTIONS = GET; // OPTIONS request handler

// POST request handler
export async function POST(request: Request) {
  const body: ActionPostRequest = await request.json();
  const url = new URL(request.url);
  const amount = Number(url.searchParams.get("amount")) || 0.1;
  let sender;

  try {
    sender = new PublicKey(body.account);
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: {
          message: "Invalid account",
        },
      }),
      {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      },
    );
  }

  const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: sender, // Sender public key
      toPubkey: new PublicKey("5mi8PQAoUBH4BWvdyxLiorDBccf8CbgxFQD5byiraXcp"), // Replace with your recipient public key
      lamports: amount * LAMPORTS_PER_SOL,
    }),
  );
  transaction.feePayer = sender;
  transaction.recentBlockhash = (
    await connection.getLatestBlockhash()
  ).blockhash;
  transaction.lastValidBlockHeight = (
    await connection.getLatestBlockhash()
  ).lastValidBlockHeight;

  const payload: ActionPostResponse = await createPostResponse({
    fields: {
      transaction,
      message: "Transaction created",
    },
  });
  return new Response(JSON.stringify(payload), {
    headers: ACTIONS_CORS_HEADERS,
  });
}
