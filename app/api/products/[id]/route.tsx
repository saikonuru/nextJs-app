import { NextResponse, type NextRequest } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) return NextResponse.json({ error: "Product not found" });

  return NextResponse.json({ id: 1, name: "Milk", price: 5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
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

  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(
    { id: 1, name: body.name.toUpperCase(), price: body.price * 2 },
    { status: 201 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
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

  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ message: "Product deleted" }, { status: 201 });
}
