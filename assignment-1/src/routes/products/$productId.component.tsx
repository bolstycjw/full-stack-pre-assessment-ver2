import { useParams } from '@tanstack/react-router';
import ProductDetail from '../../ProductDetail';

export const component = function ProductDetailPage() {
	const { productId } = useParams({ strict: false, experimental_returnIntersection: true });

	return <ProductDetail productId={productId!} />;
};
