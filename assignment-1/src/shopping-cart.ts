import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface CartItems {
	[productId: string]: number;
}

export const cartItemsAtom = atomWithStorage<CartItems>("cartItems", {});

export function useShoppingCart() {
	const [cartItems, setCartItems] = useAtom(cartItemsAtom);
	return {
		cartItems,
		addToCart(productId: string) {
			setCartItems((prevCartItems) => {
				const quantity = prevCartItems[productId] ?? 0;
				return { ...prevCartItems, [productId]: quantity + 1 };
			});
		},
		removeFromCart(productId: string) {
			setCartItems((prevCartItems) => {
				const newCartItems = { ...prevCartItems };
				delete newCartItems[productId];
				return newCartItems;
			});
		},
		setQuantity(productId: string, quantity: number) {
			setCartItems((prevCartItems) => {
				return { ...prevCartItems, [productId]: quantity };
			});
		},
		totalCount: Object.values(cartItems).reduce((a, b) => a + b, 0)
	};
}
