import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  await sleep(5000);
  const htmlContent = `<span style='color:#ff0000; font-weight: bold;'>"ロード完了！"</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
