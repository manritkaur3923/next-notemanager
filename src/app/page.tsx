import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      Home page
      <div className="">
        <div>
          <Link href="/blog/react/useState">React - useState</Link>
        </div>
        <div>
          <Link href="/blog/react/useEffect">React - useEffect</Link>
        </div>
        <div>
          <Link href="/blog/nextjs/dynamic-routing">
            Next.js - Dynamic Routing
          </Link>
        </div>
      </div>
    </div>
  );
}
