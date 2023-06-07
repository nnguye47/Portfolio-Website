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
            <a href="/">
              <img src="" alt="logo" />
            </a>
          </li>
          <div className="flex flex-row justify-evenly gap-[50px]">
            <li>
              <a href="#" className="text-2xl underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-2xl underline">
                About
              </a>
            </li>
          </div>
        </ul>
      </nav>
      {children}
    </section>
  );
}
