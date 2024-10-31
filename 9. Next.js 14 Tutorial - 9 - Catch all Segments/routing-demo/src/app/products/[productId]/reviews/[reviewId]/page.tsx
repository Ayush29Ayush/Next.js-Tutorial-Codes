export default async function ReviewDetails({params}: {params: {productId: string;reviewId: string}}) {
    const {productId, reviewId} = await params
    return <h1>Details about the review {reviewId} from product {productId}</h1>;
}