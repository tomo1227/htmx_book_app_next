import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const formData = await request.formData();
  const lastkey = formData.get("lastkey")?.toString() ?? "";
  const htmlContent = `<span style='color:#ff0000; font-weight: bold;'>最後に押したキーは「${lastkey}」です。</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}
