import CartItems from "../CartItems";
import OrderSummary from "../OrderSummary";

export const component = () => {
	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<div className="grid xl:grid-cols-2 gap-16">
				<CartItems />
				<OrderSummary />
			</div>
		</div>
	);
};
