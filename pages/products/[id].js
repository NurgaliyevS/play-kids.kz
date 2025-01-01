import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import { Inter, Noto_Sans } from "next/font/google";
import { products } from "@/components/products";
import { customConfig } from "@/project.custom.config";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function ProductPage() {
  const router = useRouter();

  const { id } = router.query;

  if (!id) {
    return null;
  }

  const product = products.find((p) => p.id == id);

  return (
    <>
      <Head>
        <meta name="description" content={customConfig.seo.description} />
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <div
        className={`min-h-screen bg-white ${notoSans.variable} ${inter.variable} font-sans`}
      >
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ProductDetails product={product} />
          <RelatedProducts currentProductId={product.id} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
