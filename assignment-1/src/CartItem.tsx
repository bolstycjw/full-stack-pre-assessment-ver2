import { useProduct } from "./product";
import { X } from "lucide-react";
import { useShoppingCart } from "./shopping-cart";

interface CartItemProps {
	productId: string;
	quantity: number;
}

export default function CartItem({ productId, quantity }: CartItemProps) {
	const { removeFromCart, setQuantity } = useShoppingCart();
	const { isPending, isError, data: product } = useProduct(productId);
	if (isPending) {
		return <li>Loading...</li>;
	}
	if (isError) {
		return <li>Error loading product</li>;
	}
	return (
		<div className="flex">
			<div className="flex-shrink-0">
				<img
					src={product.image}
					alt={product.description}
					className="object-cover object-center w-24 h-24"
				/>
			</div>
			<div className="ml-6 relative flex-grow pr-9">
				<h3 className="font-medium text-gray-700">{product.title}</h3>
				<p className="font-medium text-sm text-gray-900 mt-1">${product.price}</p>
				<div className="mt-1">
					<select
						data-testid="change-quantity"
						className="border-2 rounded-md"
						onChange={(event) => setQuantity(productId, parseInt(event.target.value))}
						value={quantity}
					>
						{[...Array(10).keys()].map((i) => (
							<option key={i}>{i + 1}</option>
						))}
					</select>
				</div>

				<button
					data-testid="remove-cart-item"
					onClick={() => removeFromCart(productId)}
					className="absolute top-0 right-0"
				>
					<X />
				</button>
			</div>
		</div>
	);
}
