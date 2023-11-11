import { NextResponse } from "next/server";
import { mockBooksWithAbstract } from "./mock";

export async function GET() {
  return NextResponse.json(mockBooksWithAbstract());
}