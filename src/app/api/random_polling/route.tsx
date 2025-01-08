import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  const random_number = Math.floor(Math.random() * 10);
  const htmlContent = `<p style='color:#ff0000; font-weight: bold;' hx-get='/random_polling'
                            hx-trigger='load delay:1s'>${random_number}</p>`;
  return new NextResponse(htmlContent, { status: 200 });
}
