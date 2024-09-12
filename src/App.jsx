import {
	Navbar,
	Hero,
	Highlights,
	Model,
	Features,
	HowItWorks,
	Footer,
} from "./components";
//Using sentry
import * as Sentry from "@sentry/react";

function App() {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
			<Features />
			<HowItWorks />
			<Footer />
		</main>
	);
}

export default Sentry.withProfiler(App);
