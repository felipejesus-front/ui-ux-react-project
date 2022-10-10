import CertificationCart from "./CertificationCart";
import * as Tabs from "@radix-ui/react-tabs";
import imagemteste from "/cert1.jpg";

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
					MEUS CERTIFICADOS
				</Tabs.Trigger>
				<Tabs.Trigger
					value="avaible"
					className=" bg-white py-4 px-2 flex justify-center items-center text-p1-b text-sm font-medium first:rounded-tl last:rounded-tr hover:bg-bg1 data-state-active:bg-p3"
				>
					CERTIFICADOS A FAZER
				</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content
				value="own"
				className="grid grid-cols-cart-4 gap-5 lg:grid-cols-cart-2 lg:gap-10 md:grid-cols-cart-4 sm:grid-cols-cart-2"
			>
				<CertificationCart title="Intro to I.O.T" img={imagemteste} />
			</Tabs.Content>
			<Tabs.Content
				value="avaible"
				className="grid grid-cols-cart-4 gap-5 lg:grid-cols-cart-2 lg:gap-10 md:grid-cols-cart-4 sm:grid-cols-cart-2"
			></Tabs.Content>
		</Tabs.Root>
	);
}

export default MainTabSwitch;
