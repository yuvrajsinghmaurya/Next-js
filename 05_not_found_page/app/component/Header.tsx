import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          Yuvraj Kumar
        </h1>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact
          </Link>

          <Link 
          href="/sells"
           className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >sells
          </Link>
          <Link 
          href="/ads"
           className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Ads
          </Link>
        </nav>
      </div>
    </header>
  );
}