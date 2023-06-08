import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="border-blue-600 border-solid border-[5px] bg-teal-300">
        <ul className="flex flex-row justify-around">
          <li className="justify-self-center">
            <Link href="/">
              <p>Logo</p>
            </Link>
          </li>
          <div className="flex flex-row justify-evenly gap-[50px] text-2xl underline">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </div>
        </ul>
      </nav>
      {children}
    </section>
  );
}
