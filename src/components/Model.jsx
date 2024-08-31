import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { ModelView } from "./index";
import { yellowImg } from "../utils";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";

function Model() {
	//As we have two 3d model iphones so
	const [size, setSize] = useState("small");
	//To chose from which model we want to see\
	const [model, setModel] = useState({
		title: "IPhone 15 pro in Natural Titanium",
		color: ["#8F8A81", "#FFE789", "#6F6C64"],
		img: yellowImg,
	});

	//Camera control for the model view
	const cameraControlSmall = useRef();
	const cameraControlLarge = useRef();

	//model
	const small = useRef(new THREE.Group());
	const large = useRef(new THREE.Group());

	//rotation
	const [smallRotation, setSmallRotation] = useState(0);
	const [largeRotation, setLargeRotation] = useState(0);

	useGSAP(() => {
		gsap.to("#heading", { y: 0, opacity: 1 });
	}, []);

	return (
		<section className="common-padding">
			<div className="screen-max-width">
				<h1 id="heading" className="section-heading ">
					Take a closer look.
				</h1>

				<div className="flex flex-col items-center mt-5 ">
					<div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
						<ModelView
							index={1}
							groupRef={small}
							gsapType="view1"
							controlRef={cameraControlSmall}
							setRotationState={setSmallRotation}
							item={model}
							size={size}
						/>

						<ModelView
							index={2}
							gqq
							roupRef={large}
							gsapType="view2"
							controlRef={cameraControlLarge}
							setRotationState={setLargeRotation}
							item={model}
							size={size}
						/>

						<Canvas
							className="w-full h-full"
							style={{
								position: "fixed",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								overflow: "hidden",
							}}
							//In the context of React Three Fiber (R3F), which is a React renderer for Three.js, the event.source typically refers to the source of an event that has been triggered within the 3D scene.
							// This is part of the event handling system that R3F provides to manage user interactions like clicks, drags, hovers, etc., on 3D objects.

							//Events in R3F: When an event occurs (like a mouse click or hover) on a 3D object, R3F provides an event object to the event handler function. This event object contains various properties, such as:

							//object: The 3D object that received the event.
							//point: The point in 3D space where the event occurred.
							//event: The original DOM event.

							eventSource={document.getElementById("root")} //Useful when we want to intrect with model
						>
							//View port is used to render multiple views of the
							model in the same Canvas which will allow us to
							animate the model
							<View.Port />
						</Canvas>
					</div>

					<div className="mx-auto w-full">
						<p className="text-sm font-light text-center mb-5">
							{model.title}
						</p>

						<div className="flex-center">
							<ul className="color-container ">
								{models.map((item, i) => (
									<li
										key={i}
										className="w-6 h-6 rounded-full mx-2 cursor-pointer"
										style={{
											backgroundColor: item.color[0],
										}}
										onClick={() => setModel(item)}
									></li>
								))}
							</ul>

							<button className="size-btn-container">
								{sizes.map(({ label, value }) => (
									<span
										key={label}
										className="size-btn"
										style={{
											backgroundColor:
												size === value
													? "white"
													: "transparent",
											color:
												size === value
													? "black"
													: "white",
										}}
										onClick={() => setSize(value)}
									>
										{label}
									</span>
								))}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Model;
