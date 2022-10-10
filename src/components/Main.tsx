import CategoryCart from "./CategoryCart";
import MainTabSwitch from "./MainTabSwitch";
import MainTitle from "./MainTitle";

function Main() {
	return (
		<main>
			<MainTitle title="Categories" />
			<div className="grid grid-cols-2 gap-5 lg:grid-cols-1 mb-20">
				<CategoryCart percent={100} title={"Continuous Improvement"} />
				<CategoryCart percent={31} title={"Sales Training "} />
				<CategoryCart percent={19} title={"Production Management "} />
				<CategoryCart
					percent={60}
					title={"Continuous Improvement pt2 "}
				/>
			</div>

			<MainTitle title="Certifications" />
			<MainTabSwitch />
		</main>
	);
}

export default Main;
