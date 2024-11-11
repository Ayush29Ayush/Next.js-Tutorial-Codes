import { NextRequest } from "next/server";
import { comments } from "./data";

// export async function GET() {
//   // return new Response("Comments Data", { status: 200 });
//   // return Response.json(comments);
//   return new Response(JSON.stringify(comments), { status: 200 });
// }

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;

  return new Response(JSON.stringify(filteredComments), { status: 200 });
}

export async function POST(request: Request) {
  const comment = await request.json();
  // const newcomment = { ...comment, id: comments.length + 1 };
  const newcomment = {
    id: comments.length + 1,
    name: comment.name,
    text: comment.text,
  };
  comments.push(newcomment);
  // const body = { message: "Comment added successfully" };
  return new Response(JSON.stringify(newcomment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
