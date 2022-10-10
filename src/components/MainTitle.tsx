import React, { Children } from "react";

interface MainTitleProps {
	title: string;
}

function MainTitle({ title }: MainTitleProps) {
	return <h2 className="text-3xl text-p1 font-semibold mb-8">{title}</h2>;
}

export default MainTitle;
