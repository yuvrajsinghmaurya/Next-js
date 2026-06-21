import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-800 px-8 py-4">
      <h2 className="text-2xl font-bold text-white">My Website</h2>

      <nav className="flex gap-6">
        <Link href="/" className="text-white hover:text-blue-400">
          Home
        </Link>
        <Link href="/services" className="text-white hover:text-blue-400">
          Services
        </Link>
        <Link href="/about" className="text-white hover:text-blue-400">
          About
        </Link>
      </nav>
    </header>
  );
}