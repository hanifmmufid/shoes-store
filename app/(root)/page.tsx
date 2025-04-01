import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
// import sampleData from "@/db/sample-data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Halaman utama aplikasi.
 * Menampilkan daftar produk terbaru.
 * Menggunakan hook `getLatestProducts` untuk mendapatkan daftar produk terbaru.
 * Menggunakan komponen `ProductList` untuk menampilkan daftar produk.
 */
const HomePage = async () => {
  await delay(1000); // Tunggu 5 detik sebelum menampilkan halaman
  // console.log(sampleData);
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Featured Products"/>
    </>
  );
};

export default HomePage;
