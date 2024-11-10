import { comments } from "./data";

export async function GET() {
  // return new Response("Comments Data", { status: 200 });
  // return Response.json(comments);
  return new Response(JSON.stringify(comments), { status: 200 });
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
