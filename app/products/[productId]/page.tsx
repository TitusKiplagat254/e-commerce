import { getProductById } from "@/lib/data";
import Breadcrumb from "./breadcrumb";
import ProductDetails from "./product-details";
import RelatedProducts from "./related-products";

interface ProductDetailProps {
	params: Promise<{ productId: string }>;
}

async function ProductDetail(props: ProductDetailProps) {
	const params = await props.params;
	const { productId } = params;
	const product = getProductById(productId);

	if (!product)
		<p>
			{"The product you're looking for doesn't exist or has been removed."}
		</p>;

	// TODO: Add not found page when product is not found

	return (
		<div className="container mx-auto px-4 md:px-6 py-8">
			{/* Breadcrumb */}
			<Breadcrumb name={product!.name} />
			{/* ProductDetails */}
			<ProductDetails product={product!} />
			{/* RelatedProducts */}
			<RelatedProducts />
		</div>
	);
}

export default ProductDetail;
