function ButtonCart({ children }: any) {
	return (
		<a
			href="#"
			className="flex gap-1 items-center font-medium text-p1-b px-4 py-2 rounded border border-p1  "
		>
			{children}
		</a>
	);
}

export default ButtonCart;
