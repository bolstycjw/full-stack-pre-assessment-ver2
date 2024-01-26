import { useQuery } from "@tanstack/react-query";

export function useProducts() {
	return useQuery<Product[]>({
		queryKey: ["productList"],
		queryFn: () => fetch("https://fakestoreapi.com/products").then((res) => res.json())
	});
}

export function useProduct(productId: string) {
	return useQuery<Product>({
		queryKey: ["product", productId],
		queryFn: () => fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json())
	});
}
