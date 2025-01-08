import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  const htmlContent = `<span className="text-red-500 font-bold">GETリクエスト!</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}

export function POST(request: NextRequest): NextResponse {
  const htmlContent = `<span className="text-lime-500 font-bold">POSTリクエスト!</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}

export function PUT(request: NextRequest): NextResponse {
  const htmlContent = `<span className='text-blue-500 font-bold'>PUTリクエスト!</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}

export function PATCH(request: NextRequest): NextResponse {
  const htmlContent = `<span className='text-pink-500 font-bold'>PATCHリクエスト!</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}

export function DELETE(request: NextRequest): NextResponse {
  const htmlContent = `<span className='text-orange-500 font-bold'>DELETEリクエスト!</span>`;
  return new NextResponse(htmlContent, { status: 200 });
}
