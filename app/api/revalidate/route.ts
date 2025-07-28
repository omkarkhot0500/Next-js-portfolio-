import { hookSecret } from "@/lib/env.api";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, hookSecret);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);

    return NextResponse.json(
      {
        status: 200,
        revalidated: true,
        now: Date.now(),
        body,
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Revalidation error:", error);
    return new Response(error.message || "Internal Server Error", { status: 500 });
  }
}
