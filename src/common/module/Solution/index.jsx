import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { FaUmbrella } from "react-icons/fa";
import CardSolution from "./component/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Link from "next/link";
import Buttons from "@/common/component/element/Buttons";
import Button from "@/common/component/element/Button";

const Solution = () => {
	return (
		<div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
			<ComponentTransition className="flex justify-center py-5">
				<SectionHeading title="Nos solutions" icon={<FaUmbrella size={30} />} />
			</ComponentTransition>
			<ComponentTransition
				delay={0.1}
				className="flex justify-center items-center flex-col"
			>
				<h2 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
					Solutions Innovantes pour une Transformation Digitale Fluide
				</h2>
				<p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
					Nos solutions créatives garantissent une transformation numérique
					fluide et optimisent votre visibilité.
				</p>
			</ComponentTransition>
			<CardSolution />
			<ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
				{/* <Link href="/solution" className="w-full rounded-full">
					<Button
						title="View All Solution"
						className="hover:!bg-neutral-950 hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full py-5"
					/>
				</Link> */}
				<Link href="/contact">
					<Buttons
						title="Je veux créer ma présence en ligne"
						className=""
						textColor="!text-white "
					/>
				</Link>
			</ComponentTransition>
		</div>
	);
};

export default Solution;
