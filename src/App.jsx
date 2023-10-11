import React from "react";
import {
	Hero,
	PopularProducts,
	SuperQuality,
	Services,
	SpecialOffer,
	CustomerReviews,
	Subscribe,
	Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
	return (
		<main className="relative">
			<Nav />
			<section className="xl:padding-l wide:padding-r padding-b">
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding-x py-10">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffer />
			</section>
			<section className="padding bg-pale-blue">
				<CustomerReviews />
			</section>
			<section className="padding-x w-full py-16 sm:py-32">
				<Subscribe />
			</section>
			<section className="padding-x padding-t bg-black text-slate-200">
				<Footer />
			</section>
		</main>
	);
};

export default App;
