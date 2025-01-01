import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-row md:h-16 items-center justify-between py-4 md:py-0">
          <div className="flex items-center justify-between w-auto">
            <Link href="/" className="text-xl font-bold">
              ACME
            </Link>
          </div>
          <nav className="flex items-center gap-6 mt-0 justify-center">
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
      </div>
    </header>
  );
};

export default Header;
