import { Navbar, Hero, Highlights, Model, Features } from "./components";
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
		</main>
	);
}

export default Sentry.withProfiler(App);
