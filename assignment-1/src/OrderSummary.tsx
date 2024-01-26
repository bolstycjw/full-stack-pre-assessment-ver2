import { useProducts } from "./product";
import { useShoppingCart } from "./shopping-cart";

export default function OrderSummary() {
	const { cartItems } = useShoppingCart();
	const { isPending, isError, data: products } = useProducts();
	if (isPending) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error loading products</div>;
	}
	const subtotal = Object.keys(cartItems).reduce((subtotal, productId) => {
		const quantity = cartItems[productId];
		const product = products.find((product) => product.id.toString() === productId);
		return subtotal + quantity * (product?.price ?? 0);
	}, 0);

	return (
		<div className="bg-gray-50 rounded-lg p-8">
			<h2 className="text-lg font-medium text-gray-900">Order summary</h2>
			<dl className="mt-6">
				<div className="flex justify-between items-center">
					<dt>Subtotal</dt>
					<dd>
						{subtotal.toLocaleString("default", {
							style: "currency",
							currency: "SGD",
							currencyDisplay: "narrowSymbol"
						})}
					</dd>
				</div>
			</dl>
		</div>
	);
}
