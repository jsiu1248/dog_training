import Link from 'next/link'
import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white hover:text-gray-200">Homes</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white hover:text-gray-200">About</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a className="text-white hover:text-gray-200">Products</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-gray-200">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
