import Container from "./Container";
import bannerImage from "/banner.png";
import avatarMain from "/avatarMain.png";
import playIcon from "/play-icon.svg";
import * as Avatar from "@radix-ui/react-avatar";

function Intro() {
	return (
		<section className="mb-16">
			<Container>
				<img className="rounded-b-lg" src={bannerImage} alt="" />
				<div className="flex justify-between items-center px-10 md:flex-col md:gap-5">
					<div className="flex gap-4 items-center sm:flex-col ">
						<Avatar.Root>
							<Avatar.Image
								src={avatarMain}
								className="w-[150px] h-[150px] border-2 border-p1 box-content rounded-full bg-p1 mt[-30px] -mt-8 hover:scale-105 duration-300 drop-shadow-md "
							/>
							<Avatar.Fallback className="w-[150px] h-[150px] border-2 border-p1 box-content rounded-full flex justify-center items-center  bg-bg1 text-5xl text-p1 -mt-8">
								MD
							</Avatar.Fallback>
						</Avatar.Root>
						<div className="mt-4 sm:mt-0 sm:flex sm:flex-col sm:items-center">
							<span className="text-p1-b text-2xl font-medium">
								Welcome
							</span>
							<a href="#">
								<h1 className="text-p1 text-3xl font-semibold hover:underline hover:underline-offset-2">
									Thomas Magnum
								</h1>
							</a>
							<a href="#">
								<span className="text-p1-b text-xl font-normal hover:underline hover:underline-offset-2">
									Ranking: #5
								</span>
							</a>
						</div>
					</div>

					<a
						href="#"
						className="flex gap-2 items-center py-3 px-6 bg-gradient-to-t from-p1 to-linear-c1 rounded text-p3 hover:scale-105 duration-300 "
					>
						<img src={playIcon} alt="" />
						Continue Learning
					</a>
				</div>
			</Container>
		</section>
	);
}

export default Intro;
