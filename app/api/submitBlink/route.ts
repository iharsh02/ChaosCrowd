import prisma from "@/lib/prismaDb";
export async function POST(request: Request) {
  // Parse the request body as JSON
  const data = await request.json(); // Convert the array

  const payload = {
    icon: data.imageUrl, // Local icon path
    title: data.title,
    description: data.description,
    label: data.label,
    links: {
      actions: data.actions,
    },
  };

  try {
    await prisma.blink.create({
      data: {
        key: data.wallet, // Replace with a unique key
        data: payload, // Storing the payload object
      },
    });
  } catch (error) {
    console.log(error);
  }

  return new Response(JSON.stringify({ message: "Test" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
