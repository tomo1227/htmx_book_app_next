import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  const random_number = Math.floor(Math.random() * 10);
  const htmlContent = `<span style='color:#ff0000; font-weight: bold;'>${random_number}</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}
