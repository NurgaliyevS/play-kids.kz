import Link from 'next/link'

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">Saleor</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-sm text-gray-600 hover:text-gray-800">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Collections</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/featured" className="text-sm text-gray-600 hover:text-gray-800">
                  Featured Products
                </Link>
              </li>
              <li>
                <Link href="/summer" className="text-sm text-gray-600 hover:text-gray-800">
                  Summer Picks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;