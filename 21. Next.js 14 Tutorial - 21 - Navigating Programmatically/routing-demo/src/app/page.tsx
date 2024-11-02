import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World!!! This is the HOME page</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/products">Products</Link>
    </>
  );
}
