import Aside from "./Aside";
import Main from "./Main";

function MainGrid() {
	return (
		<section className="grid gap-10 grid-cols-[minmax(0,_8fr)_minmax(300px,_372px)]  md:grid-cols-[minmax(0,1fr)] md:gap-5 mb-20 md:mx-3">
			<Main />
			<Aside />
		</section>
	);
}

export default MainGrid;
