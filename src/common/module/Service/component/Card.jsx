import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
	return (
		<div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
			<div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
			<ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
				<WiDayCloudy size={50} />
				<h2 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Un site web optimisé
				</h2>
				<h3 className="text-sm text-neutral-800 dark:text-neutral-300">
					Obtenez une réelle présence en ligne.
				</h3>
				<p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
					Valorisez votre activité avec une site vitrine qui valorise votre
					activité.
				</p>
			</ComponentTransition>
			<ComponentTransition
				delay={0.2}
				className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<Image
					src="/img1.png"
					alt="Header Image"
					width={400}
					height={400}
					loading="lazy"
					className="w-full object-cover scale-110"
				/>
			</ComponentTransition>
			<ComponentTransition
				delay={0.1}
				className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<Image
					src="/img.png"
					alt="Header Image"
					width={400}
					height={400}
					loading="lazy"
					className="w-auto h-auto object-cover scale-110"
				/>
			</ComponentTransition>
			<ComponentTransition
				delay={0.1}
				className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<FaCode size={40} />
				<h2 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Optimisation SEO
				</h2>
				<h3 className="text-sm text-neutral-700 dark:text-neutral-300">
					Un site web prêt à e3tre indexé
				</h3>
				<p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
					Nous construisons votre site en respectant les exigences SEO des
					moteurs de recherche.
				</p>
			</ComponentTransition>

			<ComponentTransition
				delay={0.1}
				className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<div className="absolute  glowbg inset-0  left-0 "></div>
				<FaCode size={40} />
				<h2 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Une livraison rapide
				</h2>
				<h3 className="text-sm text-neutral-700 dark:text-neutral-300">
					Un livrable de qualité en un minimum de temps
				</h3>
				<p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
					Notre expertise ainsi que notre spécialisation nous permettent de vous
					fournir des livrables en un temps record.
				</p>
			</ComponentTransition>

			{/* <ComponentTransition
				delay={0.1}
				className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<FaCode size={40} />
				<h2 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Simplify, Optimize, Succeed
				</h2>
				<h3 className="text-sm text-neutral-700 dark:text-neutral-300">
					Your Gateway to Streamlined Excellence
				</h3>
				<p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
					Simplify your SaaS experience with Teaser, where optimization meets
					success
				</p>
			</ComponentTransition> */}
		</div>
	);
};

export default Card;
