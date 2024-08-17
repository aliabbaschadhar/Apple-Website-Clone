import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { playImg } from "../utils";
import * as THREE from "three";

function VideoCarousel() {
	const videoRef = useRef([]);
	const videoSpanRef = useRef([]);
	const videoDivRef = useRef([]);

	const [video, setVideo] = useState({
		isEnd: false,
		startPlay: false,
		videoId: 0,
		isLastVideo: false,
		isPlaying: false,
	});

	const [loadedData, setLoadedData] = useState([]);

	//Destructuring the object properties
	const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

	//For the playing of video
	useEffect(() => {
		if (loadedData.length > 3) {
			if (!isPlaying) {
				videoRef.current[videoId].pause();
			} else {
				startPlay && videoRef.current[videoId].play();
			}
		}
	}, [startPlay, videoId, isPlaying, loadedData]);

	//To track the progress of video
	useEffect(() => {
		const currentProgress = 0;
		let span = videoSpanRef.current;

		if (span[videoId]) {
			//animate the progress of the video
			let anim = gsap.to(span[videoId], {
				/* What will happen when the video updates */ onUpdate:
					() => {},
				/** What will happen when the video completes */ onComplete:
					() => {},
			});
		}
	}, [videoId, startPlay]);

	return (
		<>
			<div className="flex items-center">
				{hightlightsSlides.map((list, i) => (
					<div key={list.id} id="slider" className="sm:pr-20 pr-10">
						<div className="video-carousel_container">
							<div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
								<video
									id="video"
									playsInline={true}
									preload="auto"
									muted
									ref={(el) => (videoRef.current[i] = el)}
									onPlay={() => {
										setVideo((prevVideo) => ({
											...prevVideo,
											isPlaying: true,
										}));
									}}
								>
									<source src={list.video} type="video/mp4" />
								</video>
							</div>

							<div className="absolute top-12 left-[5%[ z-10">
								{list.textLists.map((text) => (
									<p
										key={text}
										className="md:text-2xl text-xl font-medium"
									>
										{text}
									</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="relative fl ex-center mt-10">
				<div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
					{videoRef.current.map((_, i) => (
						<span></span>
					))}
				</div>
			</div>
		</>
	);
}

export default VideoCarousel;
