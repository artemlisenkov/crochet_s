import { auth } from "@/src/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const authHandler = toNextJsHandler(auth);

function asPlainRequest(req: NextRequest): Request {
    const hasBody = req.method !== "GET" && req.method !== "HEAD";

    return new Request(req.url, {
        method: req.method,
        headers: new Headers(req.headers),
        ...(hasBody
            ? {
                body: req.body,
                duplex: "half" as const,
            }
            : {}),
    });
}

export function GET(req: NextRequest) {
    return authHandler.GET(asPlainRequest(req));
}

export function POST(req: NextRequest) {
    return authHandler.POST(asPlainRequest(req));
}