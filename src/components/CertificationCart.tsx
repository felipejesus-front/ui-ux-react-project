interface certificationProps {
	title: string;
	img: string;
}
function CertificationCart(props: certificationProps) {
	return (
		<div className=" bg-white rounded border border-p1 p-3 shadow-md hover:scale-105 duration-300">
			<img src={props.img} alt="" />
			<span className="font-normal text-p1-b text-xs">Certification</span>
			<h3 className="font-medium text-lg text-p1 sm:text-base">
				{props.title}
			</h3>
		</div>
	);
}

export default CertificationCart;
