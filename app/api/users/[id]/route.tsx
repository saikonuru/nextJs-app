import { NextResponse, type NextRequest } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) return NextResponse.json({ error: "User not found" });

  return NextResponse.json({ id: 1, name: "Sai" });
}
