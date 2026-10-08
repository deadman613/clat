import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const mode = searchParams.get("mode");

  try {
    const courses = await prisma.course.findMany({
      where: {
        isActive: true,
        ...(category && { category: category as any }),
        ...(type && { type: type as any }),
        ...(mode && { mode: mode as any }),
      },
      include: {
        faculty: {
          include: { faculty: true },
        },
        batches: {
          where: { isActive: true },
          orderBy: { startDate: "asc" },
          take: 1,
        },
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    });

    return NextResponse.json({ courses });
  } catch (error) {
    console.error("Courses fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}
