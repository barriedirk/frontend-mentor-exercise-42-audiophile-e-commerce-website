import ProductDetail from "@/features/product-detail/ProductDetail";
import { getProductBySlug } from "@/core/services/product-service";
import products from "@/core/data/data.json";
import { notFound } from "next/navigation";

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const productData = getProductBySlug(slug);

  if (!productData) {
    notFound();
  }

  return <ProductDetail product={productData} />;
}
