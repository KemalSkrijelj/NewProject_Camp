import Link from "next/link";

export default async function Home() {
  await new Promise((reslove) => setTimeout(reslove, 1000));
  return (
    <div className="h-screen ">
      <Link href="/blog" className="hover:underline">
        Go to blog
      </Link>
    </div>
  );
}
