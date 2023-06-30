import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <h1>404 - Page does not exist...</h1>
      <Link href="/">
        <button className="btn-blue">Go Home</button>
      </Link>
    </main>
  );
}
