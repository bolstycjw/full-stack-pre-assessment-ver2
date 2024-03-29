import { Dialog, Transition } from '@headlessui/react';
import { Link } from '@tanstack/react-router';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Fragment, useState } from 'react';
import { useShoppingCart } from './shopping-cart';

export default function Header() {
	const [open, setOpen] = useState(false);
	const { totalCount } = useShoppingCart();
	return (
		<>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
								<div className="flex px-4 pb-2 pt-5">
									<button
										type="button"
										className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
										onClick={() => setOpen(false)}
									>
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Close menu</span>
										<X className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								{/* Links */}
								<div className="space-y-6 border-t border-gray-200 px-4 py-6">
									<div key="home" className="flow-root">
										<Link to="/" className="-m-2 block p-2 font-medium text-gray-900">
											Home
										</Link>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header className="relative bg-white">
				<nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center">
							<button
								type="button"
								className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
								onClick={() => setOpen(true)}
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open menu</span>
								<Menu className="h-6 w-6" aria-hidden="true" />
							</button>

							{/* Logo */}
							<div className="ml-4 flex lg:ml-0">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</div>

							<div className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="flex h-full space-x-8">
									<Link
										to="/"
										className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
									>
										Home
									</Link>
								</div>
							</div>

							<div className="ml-auto flex items-center">
								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6">
									<Link to="/cart" className="group -m-2 flex items-center p-2">
										<ShoppingCart
											className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
										<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
											{totalCount}
										</span>
										<span className="sr-only">items in cart, view bag</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
