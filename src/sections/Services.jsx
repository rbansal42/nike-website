import React from "react";
import { services } from "../assets/constants";
import { ServiceCard } from "../components";

const Services = () => {
	return (
		<section className="max-container flex flex-wrap justify-center gap-9">
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	);
};

export default Services;
