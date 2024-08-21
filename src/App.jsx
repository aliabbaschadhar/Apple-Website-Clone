import { Navbar, Hero, Highlights, Model } from "./components";

export default function App() {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
		</main>
	);
}
