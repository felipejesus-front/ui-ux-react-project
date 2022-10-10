interface scrollItemProps {
	name: string;
	avatar: string;
	ranking: number;
	atualUser: boolean;
}

function ScrollListItem({ name, avatar, ranking, atualUser }: scrollItemProps) {
	return (
		<a
			href="#"
			className={`flex justify-between items-center text-p1-b py-3 pr-5 border-b border-p1 last:border-none px-4 ${
				atualUser == true ? "bg-p3" : "bg-white"
			}`}
		>
			<div className="flex items-center gap-3">
				<img
					src={avatar}
					alt=""
					className={`h-8 w-8 rounded-full ${
						atualUser == true
							? "border border-err-cor bg-err-cor"
							: ""
					}`}
				/>
				<span className="font-medium text-xs text-p1-b">{name}</span>
			</div>
			<span className="font-medium text-xs text-p1-b">#{ranking}</span>
		</a>
	);
}

export default ScrollListItem;
