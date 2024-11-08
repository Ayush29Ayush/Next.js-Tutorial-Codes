"use client"

import {notFound} from 'next/navigation'

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)    
}

export default async function ReviewDetails({params}: {params: {productId: string; reviewId: string}}) {
    const {productId, reviewId} = await params

    const random = getRandomInt(5);
    console.log(random);

    if (random > 3) {
        throw new Error('Something went wrong. Error loading review. Error code: 500')
    }

    if (parseInt(reviewId) > 10) {
        notFound()
    }

    return <h1>Details about the review {reviewId} from product {productId}</h1>;
}