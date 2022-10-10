import React from "react";
import avatarIcon from "/icon-list/avatar1.png";

function ScrollListItem() {
	return (
		<a
			href="#"
			className="flex justify-between items-center text-p1-b py-3 pr-5 border-b border-p1 last:border-none"
		>
			<div className="flex items-center gap-3">
				<img src={avatarIcon} alt="" className="h-8 w-8" />
				<span className="font-medium text-xs text-p1-b">
					Thomas Magnum
				</span>
			</div>
			<span className="font-medium text-xs text-p1-b">#1</span>
		</a>
	);
}

export default ScrollListItem;
