import { NextResponse, type NextRequest } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 5 },
    { id: 2, name: "Bread", price: 10 },
    { id: 3, name: "Chocolate", price: 15 },
  ]);
}

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.message, { status: 400 });
  }

  return NextResponse.json(
    { id: 4, name: body.name.toUpperCase(), price: body.price },
    { status: 201 }
  );
}
