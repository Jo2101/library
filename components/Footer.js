//imports and styles
import Link from "next/link";
import Head from "next/head"; //add meta and seo data when needed

export default function Footer({ links }) {
  return (
    <footer className="bg-gray-800 text-white p-10 flex justify-between items-center">
      <div className="w-1/6">
        <Link href="/">
          <p className="cursor-pointer inline-block m-0">Logo</p>
        </Link>
      </div>
      <div className="w-4/6 text-center">
        <nav>
          <ul className="flex justify-center space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-1/6 text-right">
        <p>Contact info</p>
      </div>
    </footer>
  );
}
