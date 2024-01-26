import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactNode } from "react";
import CartItem from "../CartItem";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const removeFromCart = vi.fn();
const setQuantity = vi.fn();

vi.mock("../shopping-cart.ts", () => ({
	useShoppingCart: () => ({
		removeFromCart,
		setQuantity
	})
}));

vi.mock("../product.ts", () => ({
	useProduct: () => ({
		isPending: false,
		isError: false,
		data: {
			image: "https://example.com/image.png",
			description: "A product",
			title: "Product",
			price: 100
		}
	})
}));

describe("CartItem", () => {
	it("renders the product title and price", () => {
		render(<CartItem productId="1" quantity={1} />, { wrapper });
		expect(screen.getByText("Product")).toBeTruthy();
		expect(screen.getByText("$100")).toBeTruthy();
	});

	it("renders a select with the quantity", () => {
		render(<CartItem productId="1" quantity={2} />, { wrapper });
		expect((screen.getByTestId("change-quantity") as HTMLSelectElement).value).toBe("2");
	});

	it("calls setQuantity when the quantity is changed", async () => {
		render(<CartItem productId="1" quantity={1} />, { wrapper });
		await userEvent.selectOptions(screen.getByTestId("change-quantity"), "3");
		expect(setQuantity).toHaveBeenCalledWith("1", 3);
	});

	it("calls removeFromCart when the remove button is clicked", async () => {
		render(<CartItem productId="1" quantity={1} />, { wrapper });
		await userEvent.click(screen.getByTestId("remove-cart-item"));
		expect(removeFromCart).toHaveBeenCalledWith("1");
	});
});
