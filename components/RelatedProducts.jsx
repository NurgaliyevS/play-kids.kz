import ProductCard from './ProductCard';
import { products } from './products';

function RelatedProducts({ currentProductId }) {
  const relatedProducts = products
    .filter(product => product.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Еще</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;