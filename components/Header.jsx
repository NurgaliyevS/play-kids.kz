import Link from 'next/link'
import { SearchIcon, UserIcon, CartIcon } from './icons'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            ACME
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-gray-600">
              All
            </Link>
            <Link href="/apparel" className="text-sm hover:text-gray-600">
              Apparel
            </Link>
            <Link href="/accessories" className="text-sm hover:text-gray-600">
              Accessories
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for products..."
              className="h-9 w-[300px] rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:border-gray-300"
            />
            <SearchIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">
            <UserIcon className="h-5 w-5" />
          </button>
          <button className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">
            <CartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;