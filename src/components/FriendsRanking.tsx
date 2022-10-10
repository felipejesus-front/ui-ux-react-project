import * as ScrollArea from "@radix-ui/react-scroll-area";
import ScrollListItem from "./ScrollListItem";
import { Objects } from "../Utils/Objects";

function FriendsRanking() {
	return (
		<div className="flex flex-col bg-white w-[100%] rounded-t-lg border shadow-lg">
			<div className="flex justify-between items-center pt-5 pb-2 border-b border-p1 px-4 ">
				<h2 className="font-medium text-2xl text-p1 ">Friends</h2>
				<span className="font-medium text-sm text-p1-b">Ranking</span>
			</div>
			<ScrollArea.Root>
				<ScrollArea.Viewport className="max-h-[500px]">
					{Objects.people.map((person) => (
						<ScrollListItem
							key={person.ranking}
							ranking={person.ranking}
							name={person.name}
							avatar={person.avatar}
							atualUser={person.atualUser}
						/>
					))}
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar orientation="horizontal">
					<ScrollArea.Thumb />
				</ScrollArea.Scrollbar>
				<ScrollArea.Scrollbar
					className="flex select-none touch-none p-1 ease-out duration-150 radix-orientation-vertical:w-[10]"
					orientation="vertical"
				>
					<ScrollArea.Thumb className="flex-1 bg-p1 relative before:content-[''] before:absolute before:top-[50%] before:left-[50%] translate-x-[50%] translate-y-[50%] w-[100%] h-[100%] min-w-[4px] min-h[44px]" />
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner />
			</ScrollArea.Root>
			<div className="flex justify-center items-center pt-5 pb-2 border-t px-4 ">
				<a
					href="#"
					className="font-medium text-p1 px-20 py-3 border-p1 rounded border"
				>
					Ver todos
				</a>
			</div>
		</div>
	);
}

export default FriendsRanking;
