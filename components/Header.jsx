import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
          >
            play-kids.kz
          </Link>
          <nav className="flex items-center">
            <Link 
              href="/" 
              className="text-sm sm:text-base hover:text-gray-600 px-2 sm:px-3 py-2"
            >
              Главная
            </Link>
            <Link
              href="https://instagram.com/playkids.kz"
              className="text-sm sm:text-base hover:text-gray-600 px-2 sm:px-3 py-2"
            >
              Instagram
            </Link>
            <Link
              href="https://wa.me/+77715800069"
              className="text-sm sm:text-base hover:text-gray-600 px-2 sm:px-3 py-2"
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

