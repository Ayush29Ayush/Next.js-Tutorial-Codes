export default async function ProductDetails({params}: {params: {productId: string}}) {
    const {productId} = await params
    return <h1>Details about the product {productId}</h1>;
}