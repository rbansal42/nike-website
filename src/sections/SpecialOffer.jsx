import React from "react";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
	return (
		<section className="justify-wrap max-container flex flex-row-reverse items-center gap-10 max-xl:flex-row">
			<div className="flex flex-1 flex-col">
				<h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
					<span className="text-coral-red"> Special </span>
					Offer
				</h2>
				<p className="info-text mt-4 lg:max-w-lg">
					Emabrk on a shpping journey that redefines your experience with
					unbeatable deals. From premier selections to incredible savings, we
					offer unparalleled value that sets us apart.
				</p>
				<p className="info-text max-w mt-6">
					Navigate a realm of possibilities designed to fulfill your unique
					desires, surpassing the loftiest expectations. Your journey with us is
					nothing short of exceptional.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Shop Now" iconURL={arrowRight} />
					<Button
						label="Learn More"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
			<div className="flex flex-1 flex-col">
				<img
					src={offer}
					alt="offer"
					width={773}
					height={687}
					className="w-full object-contain"
				/>
			</div>
		</section>
	);
};

export default SpecialOffer;
