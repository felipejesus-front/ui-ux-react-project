import ButtonCart from "./ButtonCart";
import playIconP1 from "/play-icon-p1.svg";
import * as Progress from "@radix-ui/react-progress";

interface CartProps {
	percent: number;
	title: string;
}

function CategoryCart(props: CartProps) {
	return (
		<div className="flex flex-col mb-5 margin-p1 border bg-white border-p1 text-p1 rounded-md p-3 hover:scale-105 duration-300 drop-shadow-md ">
			<span className="font-normal text-p1-b text-xs mb-1">Category</span>
			<h3 className="font-medium text-p1-b mb-2">{props.title}</h3>
			<div className="flex justify-between items-center mb-2">
				<Progress.Root
					value={props.percent}
					className="w-[280px] h-3 rounded-full bg-[#EDEDED] relative overflow-hidden"
				>
					<Progress.Indicator
						className="bg-p1 w-[100%] h-[100%]"
						style={{
							transform: `translateX(-${100 - props.percent}%)`,
						}}
					/>
				</Progress.Root>
				<span className="font-normal">{props.percent + "%"}</span>
			</div>
			<div className="flex justify-between mx-3">
				<ButtonCart>
					<img src={playIconP1} alt="" className="h-4 w-4" />
					{props.percent === 100 ? "Rewatch" : "Continue"}
				</ButtonCart>

				{props.percent === 100 ? (
					<ButtonCart>Challenges</ButtonCart>
				) : null}
			</div>
		</div>
	);
}

export default CategoryCart;
