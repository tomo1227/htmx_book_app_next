import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  await sleep(1000);
  const htmlContent =
    "<span style='color:#ff0000; font-weight: bold;'>正しい値を入力してください</span>";
  return new NextResponse(htmlContent, { status: 200 });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
