import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../assets/constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
	return (
		<footer className="max-container">
			<div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} alt="Nike logo" width={150} height={46} />
					</a>
					<p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nieke store. Find
						your perfectsize in store.{" "}
						<span className="text-coral-red">Get rewards.</span>
					</p>
					<div className="mt-8 flex items-center gap-5">
						{socialMedia.map((icon) => (
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
								<img src={icon.src} alt={icon.alt} width={24} height={24} />
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
					{footerLinks.map((section) => (
						<div key={section}>
							<h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										className="mt-3 cursor-pointer to-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
										key={link.name}
									>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="mt-24 flex justify-between pb-6 text-white-400 max-sm:flex-col max-sm:items-center">
				<div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
					<img
						src={copyrightSign}
						alt="copyright"
						width={20}
						height={20}
						className="rounded-full"
					/>
					<p>Copyright. All Rights reserved</p>
				</div>
				<p className="cursor-pointer font-montserrat">Terms & Conditions</p>
			</div>
		</footer>
	);
};

export default Footer;
