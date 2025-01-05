import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "./icons";

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
              play-kids.kz
            </Link>
            <span className="text-sm text-muted-foreground mt-2">
              Детский магазин игрушек в Казахстане
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://instagram.com/playkids.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://wa.me/+77715800069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} play-kids.kz. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
