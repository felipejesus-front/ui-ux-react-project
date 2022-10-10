interface certificationProps {
	title: string;
	img: string;
}
function CertificationCart(props: certificationProps) {
	return (
		<div className=" bg-white rounded border p-3">
			<img src={props.img} alt="" />
			<span className="font-normal text-p1-b text-xs">Certification</span>
			<h3 className="font-medium text-lg text-p1">{props.title}</h3>
		</div>
	);
}

export default CertificationCart;
