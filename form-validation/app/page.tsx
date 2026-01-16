import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Hello, NexT JS</h1>
      <p className="text-2xl underline text-blue-950">
        <Link href="/form">Form</Link>
      </p>
    </>
  );
}
