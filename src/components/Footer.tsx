import logo from "/logo.svg";

function Footer() {
	return (
		<footer className="p-4 bg-p1 shadow md:px-6 md:py-8 dark:bg-gray-900">
			<a href="#" className="flex items-center mb-4 sm:justify-center">
				<img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
			</a>
			<div className="sm:flex sm:items-center sm:justify-between">
				<ul className="flex flex-wrap items-center mb-6 text-sm text-p3 sm:mb-0">
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							Licensing
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-p3 sm:mx-auto" />
			<span className="block text-sm text-p3 sm:text-center">
				© 2022{" "}
				<a href="#" className="hover:underline">
					u-know
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
}

export default Footer;
