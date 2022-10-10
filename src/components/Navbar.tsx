import Container from "./Container";
import searchIcon from "/search-icon.svg";
import alertIcon from "/alert-icon.svg";
import avatarIcon from "/avatar-icon.png";
import logo from "/logo.svg";
import * as Avatar from "@radix-ui/react-avatar";

function Navbar() {
	return (
		<header className="bg-p1 text-p3 font-semibold text-lg drop-shadow-md">
			<Container>
				<div className="flex justify-between items-center gap-5 lg:flex-col lg:gap-2 lg:py-2 px-2">
					<a href="#" className="">
						<img src={logo} alt="" />
					</a>

					<form
						action="#"
						className="flex justify-center items-center my-3 relative"
					>
						<input
							className="h-8 w-[400px] sm:w-60 border focus:border-2 border-p2 pl-2 pr-8 rounded text-sm text-black font-thin focus:outline-none "
							type="search"
							name="search"
							placeholder="Search for a Certification"
						/>
						<button
							type="submit"
							className="absolute right-2 top-[6px]"
						>
							<img src={searchIcon} alt="Search Icon" />
						</button>
					</form>

					<nav className="flex gap-10">
						<ul className="flex gap-10">
							<li>
								<a
									href="#"
									className="hover:text-p2 duration-300"
								>
									Library
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-p2 duration-300"
								>
									Experts
								</a>
							</li>
						</ul>
						<div className="flex gap-2">
							<a href="#">
								<img src={alertIcon} alt="" />
							</a>
							<a href="#">
								<Avatar.Root className=" borderborder-p2">
									<Avatar.Image
										src={avatarIcon}
										alt="MD"
										className="w-8 h-8 border border-p3 rounded-full"
									/>
									<Avatar.Fallback className="w-8 h-8 border border-p rounded-full flex justify-center items-center  bg-bg1 text-sm text-p1 ">
										TM
									</Avatar.Fallback>
								</Avatar.Root>
								<img />
							</a>
						</div>
					</nav>
				</div>
			</Container>
		</header>
	);
}

export default Navbar;
