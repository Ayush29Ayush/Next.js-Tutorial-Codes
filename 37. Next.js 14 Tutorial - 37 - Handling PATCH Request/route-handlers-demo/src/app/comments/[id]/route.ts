import { comments } from "../data";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return new Response(JSON.stringify(comment), { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index].text = text;

    return new Response(JSON.stringify(comments[index]), { status: 200 });
}