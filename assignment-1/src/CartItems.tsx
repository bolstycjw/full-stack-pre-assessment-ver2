import CartItem from "./CartItem";
import { useShoppingCart } from "./shopping-cart";

export default function CartItems() {
	const { cartItems } = useShoppingCart();
	return (
		<ul className="divide-y divide-gray-200">
			{Object.keys(cartItems).map((productId) => {
				const quantity = cartItems[productId];
				return (
					<li key={productId} className="py-6">
						<CartItem productId={productId} quantity={quantity} />
					</li>
				);
			})}
		</ul>
	);
}
