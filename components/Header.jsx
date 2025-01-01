import Link from 'next/link'
import { SearchIcon, UserIcon, CartIcon } from './icons'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:h-16 items-center justify-between py-4 md:py-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="text-xl font-bold">
              ACME
            </Link>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
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
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative w-full md:w-auto">
              <input
                type="search"
                placeholder="Search for products..."
                className="h-9 w-full md:w-[300px] rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:border-gray-300"
              />
              <SearchIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

