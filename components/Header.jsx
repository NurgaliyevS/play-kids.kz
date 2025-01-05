import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-row md:h-16 items-center justify-between py-4 md:py-0">
          <div className="flex items-center justify-between w-auto">
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
            >
              play-kids.kz
            </Link>
          </div>
          <nav className="flex items-center gap-6 mt-0 justify-center">
            <Link href="/" className="text-base hover:text-gray-600">
              Главная
            </Link>
            <Link
              href="https://instagram.com/playkids.kz"
              className="text-base hover:text-gray-600"
            >
              Instagram
            </Link>
            <Link
              href="https://wa.me/+77715800069"
              className="text-base hover:text-gray-600"
            >
              Купить
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
