import { comments } from "../data";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return new Response(JSON.stringify(comment), { status: 200 });
}
