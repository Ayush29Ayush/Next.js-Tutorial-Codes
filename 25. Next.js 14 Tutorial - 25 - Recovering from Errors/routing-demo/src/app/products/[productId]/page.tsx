import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => resolve(
        setTimeout(() => {
            resolve(`Product Details - ${params.productId}`)
        }, 100)
    ))
    return {
        title: `Product ${title}`
    }
}

export default async function ProductDetails({params}: Props) {
    const {productId} = await params
    return <h1>Details about the product {productId}</h1>;
}