import prisma from "@/libs/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.user.findMany();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {}
