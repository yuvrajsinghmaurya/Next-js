import Link from "next/link";
import React from "react";

export default function Page() {
    console.log("Blogs Page")
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Blog Page
      </h1>

      <div className="flex flex-col gap-4">
        <Link
          href="/blogs/1"
          className="p-4 border rounded-lg shadow hover:shadow-lg transition"
        >
          Blog 1
        </Link>

        <Link
          href="/blogs/2"
          className="p-4 border rounded-lg shadow hover:shadow-lg transition"
        >
          Blog 2
        </Link>

        <Link
          href="/blogs/3"
          className="p-4 border rounded-lg shadow hover:shadow-lg transition"
        >
          Blog 3
        </Link>
      </div>
    </div>
  );
}