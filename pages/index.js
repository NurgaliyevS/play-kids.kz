import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/components/products";
import { customConfig } from "@/project.custom.config";
import Head from "next/head";
import { Inter, Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-noto-sans',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={customConfig.seo.description} />
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <div className={`min-h-screen bg-white ${notoSans.variable} ${inter.variable} font-sans`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ProductGrid products={products} />
        </main>
        <Footer />
      </div>
    </>
  );
}
