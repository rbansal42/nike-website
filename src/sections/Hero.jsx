import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../assets/constants";
import { bigShoe1, bigShoe2, thumbnailShoe1 } from "../assets/images";
import { ShoeCard } from "../components";
import { useState } from "react";
import React from "react";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe2);
	return (
		<section
			id="home"
			className="max-container flex min-h-screen w-full flex-col gap-10 p-2 xl:flex-row"
		>
			<div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
				<p className="font-montserrat text-xl text-coral-red">
					Our Summer Collection
				</p>
				<h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82]">
					<span>The New Arrival</span>
					<br />
					<span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
				</h1>
				<p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and innovation for
					your active life.
				</p>
				<Button label="Shop Now" iconURL={arrowRight} />
				<div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
					{statistics.map((stat, index) => (
						<div key={index}>
							<p className="font-palanquin text-4xl font-bold">{stat.value}</p>
							<p className="font-montserrat leading-7 text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover py-24 max-xl:py-40 xl:min-h-screen">
				<img
					src={bigShoeImg}
					alt="shoe collection"
					width={610}
					height={500}
					className="relative z-10 object-contain"
				/>
				<div className="absolute -bottom-[0%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
					{shoes.map((shoe) => {
						return (
							<div key={shoe}>
								<ShoeCard
									imgURL={shoe}
									changeBigShoeImage={(shoe) => {
										setBigShoeImg(shoe);
									}}
									bigShoeImg={bigShoeImg}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Hero;
