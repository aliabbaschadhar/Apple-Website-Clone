import { Html } from "@react-three/drei";
import React from "react";

function Loader() {
	// return <div>Loader</div>; //Our screen has broken we have used this component in our 3D scene/Model/Iphone Model but this is HTMl.
	//To use Html in a 3D model we have to tell that it's an HTml so for that..
	return (
		<Html>
			<div className="absolute top-0 left-0 w-full h-full flex justify-center item-center">
				<div className="w-[10vw] h-[10vw] rounded-full">
					<span className="loader relative inline-block w-12 h-12 border-4 border-white rounded-full box-border animate-spin">
						<span className="absolute w-4 h-4 bg-[#4e4c4b] rounded-full top-0 left-0 transform -translate-x-1/2 translate-y-1/2"></span>
					</span>
				</div>
			</div>
		</Html>
	);
}

export default Loader;
