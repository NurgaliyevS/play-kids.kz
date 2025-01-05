import Image from "next/image";
import { CartIcon } from "./icons";
import Link from "next/link";

function ProductDetails({ product }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-4 gap-4"></div>
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold">{product.price}</p>
        <div className="prose max-w-none">
          <p>{product.description}</p>
        </div>
        <Link
          className="w-full bg-black text-white py-3 px-6 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors btn"
          href="https://wa.me/+77715800069"
        >
          <CartIcon className="w-5 h-5" />
          <span>Заказать</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
