import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() ?? "";
  const title = formData.get("title")?.toString() ?? "";
  const htmlContent = `<span style='color:#ff0000; font-weight: bold;'>${title} ${name}</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}
