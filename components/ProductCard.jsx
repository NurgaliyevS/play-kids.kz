import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU') + ' ₸';
  };

  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <div className="flex items-baseline mb-1 gap-2">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {product.name}
            </h3>
            <p className="text-sm font-semibold text-gray-900 flex-shrink-0">
              {formatPrice(product.price)}
            </p>
          </div>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;