import { Search, SlidersHorizontal, X } from "@/components/icons";
import { ProductCard } from "@/components/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { categories, products } from "@/lib/data";
import { cn } from "@/lib/utils";

const Products = () => {
	const searchTerm = "";
	const selectedCategory = "all";
	const priceRange = [0, 5000];
	const filteredProducts = products;
	const isLoading = false;

	return (
		<>
			<div className="bg-secondary">
				<div className="container mx-auto px-4 md:px-6 py-12 text-center">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">
						Our Collection
					</h1>
					<p className="mt-3 text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
						Explore our curated selection of minimalist designs for modern
						living
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 md:px-6 py-8">
				<div className="flex md:hidden justify-between items-center mb-4">
					<Button variant="outline" size="sm" className="flex items-center">
						<SlidersHorizontal size={16} className="mr-2" />
						Filters
					</Button>

					<span className="text-sm text-muted-foreground">
						{products.length} products
					</span>
				</div>

				<div className="flex flex-col md:flex-row gap-6">
					<aside className="md:w-64 flex-shrink-0">
						<div className="sticky top-24 space-y-6">
							<div className="space-y-2">
								<h3 className="font-medium">Search</h3>
								<div className="relative">
									<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
									<Input
										type="search"
										placeholder="Search products..."
										className="pl-8"
									/>
									{searchTerm && (
										<button className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground">
											<X className="h-4 w-4" />
											<span className="sr-only">Clear search</span>
										</button>
									)}
								</div>
							</div>

							<div className="space-y-2">
								<h3 className="font-medium">Categories</h3>
								<div className="space-y-1">
									{categories.map((category) => (
										<button
											key={category.id}
											className={cn(
												"w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
												selectedCategory === category.id
													? "bg-primary text-primary-foreground"
													: "text-muted-foreground hover:bg-secondary",
											)}
										>
											{category.name}
										</button>
									))}
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="font-medium">Price Range</h3>
								<Slider
									defaultValue={[0, 5000]}
									max={5000}
									step={100}
									className="py-4"
								/>
								<div className="flex items-center justify-between">
									<span className="text-sm">
										${priceRange[0].toLocaleString("en-IN")}
									</span>
									<span className="text-sm">
										₹{priceRange[1].toLocaleString("en-IN")}
									</span>
								</div>
							</div>

							<div className="md:hidden">
								<Button className="w-full">Apply Filters</Button>
							</div>
						</div>
					</aside>

					<div className="flex-1">
						<div className="hidden md:flex justify-between items-center mb-6">
							<h2 className="text-xl font-semibold tracking-tight">
								All Products
							</h2>
							<span className="text-sm text-muted-foreground">
								{filteredProducts.length} products
							</span>
						</div>

						{isLoading ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{[...Array(6)].map((_, i) => (
									<div key={i} className="animate-pulse">
										<div className="bg-muted rounded-lg aspect-square mb-3"></div>
										<div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
										<div className="h-4 bg-muted rounded w-1/2"></div>
									</div>
								))}
							</div>
						) : filteredProducts.length > 0 ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{filteredProducts.map((product) => (
									<div key={product.id} className="">
										<ProductCard product={product} />
									</div>
								))}
							</div>
						) : (
							<div className="text-center py-12">
								<h3 className="text-lg font-medium mb-2">No products found</h3>
								<p className="text-muted-foreground mb-6">
									Try adjusting your search or filter criteria
								</p>
								<Button variant="outline">Reset Filters</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
