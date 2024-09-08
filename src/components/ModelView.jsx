import {
	Html,
	OrbitControls,
	PerspectiveCamera,
	View,
} from "@react-three/drei";
import React, { Suspense } from "react";
import { IPhone, Lights } from "./index";
import { Loader } from "./index";

import * as THREE from "three";

function ModelView({
	index,
	groupRef,
	gsapType,
	controlRef,
	setRotationSize,
	size,
	item,
}) {
	return (
		<View
			index={index}
			id={gsapType}
			className={` w-full h-full ${index === 2} ? 'right-[-100%]' : '' `}
		>
			{/* Ambient Light --> It will light up the all the objects in the Canvas with same light */}
			<ambientLight intensity={0.3} />
			//Now we will use the camera that will simulate the perspective of
			viwer which PerspectiveCamera
			<PerspectiveCamera makeDefault position={[0, 0, 4]} />
			<Lights />
			//Suspense is used to provide some kind of loader until the model
			loads //Orbit control allow us to use the camera according to our
			mouse
			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.4}
				target={new THREE.Vector3(0, 0, 0)}
				onEnd={() =>
					setRotationState(controlRef.current.getAzimuthalAngle())
				}
			/>
			<group
				ref={groupRef}
				name={`${index === 1} ? 'small' : 'large' `}
				position={[0, 0, 0]}
			>
				//position={[0, 0, 0]} bcz we want model to remain in the center
				of screen.
				<Suspense fallback={<Loader />}>
					<IPhone
						scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
						item={item}
						size={size}
					/>
				</Suspense>
			</group>
		</View>
	);
}

export default ModelView;
