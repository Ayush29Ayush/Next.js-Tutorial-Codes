import { comments } from "./data";

export async function GET() {
    // return new Response("Comments Data", { status: 200 });
    // return Response.json(comments);
    return new Response(JSON.stringify(comments), { status: 200 });
}