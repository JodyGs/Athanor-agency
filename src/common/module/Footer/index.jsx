import React from "react";

import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="flex justify-center py-20 items-center flex-col ">
				<div className="gap-5 flex py-5 justify-center items-center w-full">
					<a href="https://x.com/AthanorAgency">
						<FaTwitter size={30} />
					</a>
					<a href="https://www.linkedin.com/company/athanor-agency/">
						<FaLinkedin size={30} />
					</a>
				</div>
				<div className="flex flex-col">
					<h3 className="text-sm">© 2024 Athanor. Tous droits réservés.</h3>
				</div>
			</div>
		</div>
	);
};

export default Footer;
