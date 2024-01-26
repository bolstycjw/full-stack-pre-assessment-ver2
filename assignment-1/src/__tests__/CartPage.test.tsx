import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { component as CartPage } from "../routes/cart.component";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

vi.mock("../shopping-cart.ts", () => ({
	useShoppingCart: () => ({
		cartItems: {
			"1": 2,
			"2": 1
		}
	})
}));

const products: Product[] = [
	{
		id: 1,
		image: "https://example.com/image.png",
		description: "A product",
		title: "Product",
		price: 100,
		category: "test",
		rating: {
			count: 100,
			rate: 3.5
		}
	},
	{
		id: 2,
		image: "https://example.com/image.png",
		description: "Another product",
		title: "Another product",
		price: 50,
		category: "test",
		rating: {
			count: 50,
			rate: 4.5
		}
	}
];

vi.mock("../product.ts", () => ({
	useProduct: (productId: string) => ({
		isPending: false,
		isError: false,
		data: products.find((product) => product.id === parseInt(productId))
	}),
	useProducts: () => ({
		isPending: false,
		isError: false,
		data: [...products]
	})
}));

describe("CartPage", () => {
	it("renders the cart items", () => {
		render(<CartPage />, { wrapper });
		expect(screen.getByText("Product")).toBeTruthy();
		expect(screen.getByText("$100")).toBeTruthy();
	});

	it("renders the order summary", () => {
		render(<CartPage />, { wrapper });
		expect(screen.getByText("Order summary")).toBeTruthy();
		expect(screen.getByText("$250.00")).toBeTruthy();
	});
});
