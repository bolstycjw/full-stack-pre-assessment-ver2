import { Star } from 'lucide-react';
import { useProduct } from './product';
import { useShoppingCart } from './shopping-cart';

interface ProductDetailProps {
	productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
	const { addToCart } = useShoppingCart();
	const { isPending, data: product, error } = useProduct(productId);

	if (isPending) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<div className="bg-white">
			<div className="pt-6">
				{/* Image gallery */}
				<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
					<div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
						<img
							src={product.image}
							alt={product.description}
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>

				{/* Product info */}
				<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							{product.title}
						</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:row-span-3 lg:mt-0">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{Array.from({ length: product.rating.rate }, (_, i) => (
										<Star key={i} fill="#111" strokeWidth={0} />
									))}
								</div>
								<p className="sr-only">{product.rating.rate} out of 5 stars</p>
								<span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
									{product.rating.count} reviews
								</span>
							</div>
						</div>

						<div className="mt-10">
							<button
								onClick={() => addToCart(product.id.toString())}
								className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Add to bag
							</button>
						</div>
					</div>

					<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
						{/* Description and details */}
						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
