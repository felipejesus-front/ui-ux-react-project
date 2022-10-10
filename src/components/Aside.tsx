import * as ScrollArea from "@radix-ui/react-scroll-area";
import ScrollListItem from "./ScrollListItem";
function Aside() {
	return (
		<aside className="">
			<div className="flex flex-col bg-white w-[100%] rounded-t-lg px-4 border">
				<div className="flex justify-between items-center pt-5 pb-2 border-b border-p1 ">
					<h2 className="font-medium text-2xl text-p1 ">Friends</h2>
					<span className="font-medium text-sm text-p1-b">
						Ranking
					</span>
				</div>
				<ScrollArea.Root>
					<ScrollArea.Viewport className="max-h-[500px]">
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
						<ScrollListItem />
					</ScrollArea.Viewport>
					<ScrollArea.Scrollbar orientation="horizontal">
						<ScrollArea.Thumb />
					</ScrollArea.Scrollbar>
					<ScrollArea.Scrollbar orientation="vertical">
						<ScrollArea.Thumb />
					</ScrollArea.Scrollbar>
					<ScrollArea.Corner />
				</ScrollArea.Root>
				<div className="flex justify-center items-center pt-5 pb-2 border-t ">
					<a
						href="#"
						className="font-medium text-p1 px-20 py-3 border-p1 rounded border"
					>
						Ver todos
					</a>
				</div>
			</div>
		</aside>
	);
}

export default Aside;
