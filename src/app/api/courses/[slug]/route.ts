import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const course = await prisma.course.findUnique({
      where: { slug, isActive: true },
      include: {
        faculty: {
          include: { faculty: true },
        },
        batches: {
          where: { isActive: true },
          orderBy: { startDate: "asc" },
        },
        testimonials: {
          where: { isActive: true },
          orderBy: { sortOrder: "asc" },
          take: 6,
        },
        studyMaterials: {
          where: { isActive: true },
          take: 5,
        },
      },
    });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course });
  } catch (error) {
    console.error("Course fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch course" }, { status: 500 });
  }
}
