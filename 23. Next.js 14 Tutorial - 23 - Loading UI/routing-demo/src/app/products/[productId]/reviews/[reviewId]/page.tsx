import {notFound} from 'next/navigation'

export default async function ReviewDetails({params}: {params: {productId: string; reviewId: string}}) {
    const {productId, reviewId} = await params

    if (parseInt(reviewId) > 10) {
        notFound()
    }

    return <h1>Details about the review {reviewId} from product {productId}</h1>;
}