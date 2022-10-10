import CertificationCart from "./CertificationCart";
import * as Tabs from "@radix-ui/react-tabs";
import imagemteste from "/cert1.jpg";
import { Objects } from "../Utils/Objects";

function MainTabSwitch() {
	return (
		<Tabs.Root defaultValue="own" className="flex flex-col w-[100%]">
			<Tabs.List
				aria-label="Choose Certificarion"
				className="flex flex-shrink-0 mb-5"
			>
				<Tabs.Trigger
					value="own"
					className=" bg-white py-4 px-2 flex justify-center items-center text-p1-b text-sm font-medium first:rounded-tl last:rounded-tr hover:bg-bg1 data-state-active:bg-p3 focus:"
				>
					My Certifications
				</Tabs.Trigger>
				<Tabs.Trigger
					value="avaible"
					className=" bg-white py-4 px-2 flex justify-center items-center text-p1-b text-sm font-medium first:rounded-tl last:rounded-tr hover:bg-bg1 data-state-active:bg-p3"
				>
					Avaible Certificarions
				</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content
				value="own"
				className="grid grid-cols-cart-4 gap-5 lg:grid-cols-cart-2 lg:gap-10 md:grid-cols-cart-4 sm:grid-cols-cart-2"
			>
				{Objects.certificarionsOwned.map((certificarion) => (
					<CertificationCart
						title={certificarion.title}
						img={certificarion.img}
					/>
				))}
			</Tabs.Content>
			<Tabs.Content
				value="avaible"
				className="grid grid-cols-cart-4 gap-5 lg:grid-cols-cart-2 lg:gap-10 md:grid-cols-cart-4 sm:grid-cols-cart-2"
			>
				{Objects.avaibleCertifications.map((certificarion) => (
					<CertificationCart
						title={certificarion.title}
						img={certificarion.img}
					/>
				))}
			</Tabs.Content>
		</Tabs.Root>
	);
}

export default MainTabSwitch;
