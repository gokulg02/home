'use client';
import Carousel from "./Carousel";
import { motion } from "framer-motion";

export default function ProjectsSection() {
	const DataEnggImages = ["/SOBER.png", "/sober_demo.gif"];
	// const RecipeImages = ["/SnapChefArch.png", "/SnapChefDemo.gif"];

	return (
		<section className="min-h-[60vh] relative overflow-hidden py-20 md:py-28 bg-gray-50">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
						Projects
					</h2>
					<div className="space-y-10">
						{/* Data engineering */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
						<h3 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-3">
							Azure Cloud-Native Platform for ML based Intoxication Detection and Monitoring 
						</h3>
						<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack: </span> Azure ML Studio, Azure Data Factory, Azure Functions, SQL, React, Flask, Docker
						</p>
						<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">
							<li>
							Architected a scalable solution on Azure cloud for real-time intoxication detection and monitoring by processing live accelerometer data from multiple IoT devices
							</li>
							<li>
							Designed a ETL pipeline on Azure Data Factory to extract time-series lag features from dataset and trained a random forest classifier that predicts user intoxication with 83% accuracy using Azure ML studio.
							</li>
							<li>
							Engineered a workflow that uses Azure IoT Hub to ingest data from IoT devices, Azure Functions to run the trained ML model for inference, and Azure SQL Database to store the results for further analysis.
							</li>
							<li>
							Built and deployed a web monitoring dashboard with React and Flask on an Azure VM to track user intoxication levels.
							</li>

						</ul>

						<Carousel images={DataEnggImages} interval={8000}/>

						<div className="flex justify-center mt-4">
							<a
							href="https://github.com/gokulg02/Azure-Cloud-Based-Intoxication-Monitoring-with-IoT-and-ML/tree/main" 
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub Repo
							</a>
						</div>
						</div>

						{/* SnapChef */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
							<h3 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-3">
								SnapChef: Recipe Suggestion RAG Bot 
							</h3>
							<p className="text-sm md:text-base text-gray-600 mb-3">
								<span className="font-medium">Tech Stack:</span> LangChain, OpenAI API, ChromaDB, Flask, Azure, Docker, Streamlit
							</p>
							<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">


								<li>
									Designed a RAG system to suggest recipes tailored to user preferences and available ingredients.
								</li>
								<li>
									Built a vector database with ChromaDB for efficient recipe retrieval from an existing recipe dataset and deployed the service using Flask on Azure cloud.
								</li>
								<li>
									Leveraged LangChain and OpenAI APIs to implement chain-of-thought prompting for generating personalized recipes based on users’ preferences, dietary restrictions, available ingredients, and desired serving size.
								</li>
							</ul>

							<div className="flex justify-center mb-6">
								<img
									src="/SnapChefArch.png"
									alt="SnapChef Project"
									className="rounded-xl shadow-md max-h-[4500px] w-auto object-contain"
								/>
							</div>

							<div className="flex justify-center mt-4 gap-4">
							<a
								href="https://github.com/gokulg02/SnapChef"
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />	
								</svg>
								GitHub Repo
							</a>

							<a
								href="https://github.com/gokulg02/SnapChef/blob/main/Assets/Demo2x.gif"
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								{/* <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> */}
								<path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
								</svg>
								Demo
							</a>
							</div>

						</div>

						{/* GuidedFace */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
						<h3 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-3">
							GuidedFace: Face Image Generation based on Prompt and Facial Landmarks Image
						</h3>
						<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack:</span> PyTorch, ControlNet, StableDiffusion
						</p>
						<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">
							<li>
							Retrained a text-to-image StableDiffusion model based on ControlNet architecture to generate realistic face images conditioned on both text prompts and facial landmark images.
							</li>
							<li>
							Achieved 99% structural similarity with the conditioning input image and evaluation using FID and Inception Score demonstrated generation quality on par with baseline StableDiffusion.
							</li>
						</ul>

						<div className="flex justify-center mb-6">
							<img
								src="/GuidedFace.jpg"
								alt="GuidedFace Project"
								className="rounded-xl shadow-md max-h-[4500px] w-auto object-contain"
							/>
						</div>


						<div className="flex justify-center mt-4">
							<a
							href="https://github.com/gokulg02/GuidedFace" 
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub Repo
							</a>
						</div>
						</div>

						{/* Motion Prediction */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
						<h3 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-3">
							Interaction-Aware Motion Prediction for Self-Driving 
						</h3>
						<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack:</span> PyTorch, Transformers, Autonomous Driving Simulation
						</p>
						<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">
							<li>
							Developed an interaction-aware motion prediction model using transformers to predict other vehicles’ reactions to the autonomous vehicle’s planned actions and used this feedback to further refine the autonomous vehicle’s planned trajectory.
							</li>
							<li>
							Proposed algorithm performed maneuvers like left turn, merging, and overtaking safely in 97% of the testing simulations.
							</li>
						</ul>

						<div className="flex justify-center mb-6">
							<img
								src="/OvertakingDemo.gif"
								alt="GuidedFace Project"
								className="rounded-xl shadow-md max-h-[4500px] w-auto object-contain"
							/>
						</div>


						<div className="flex justify-center mt-4">
							<a
							href="https://github.com/gokulg02/Interaction-Aware-Motion-Prediction-for-Self-Driving" 
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub Repo
							</a>
						</div>
						</div>

						{/* Load balancing */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
						<h3 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-3">
							Load Balancing in 5G networks using Reinforcement Learning 
						</h3>
						<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack:</span> PyTorch
						</p>
						<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">
							<li>
							Designed Q-learning & Deep Q-learning reinforcement learning algorithms for optimal user association of mobile devices with base stations in 5G mobile networks.
							</li>
							<li>
							Developed a real-time mobile network simulator using Python from scratch, trained RL models and tested their performance.
							</li>
							<li>
							Trained RL models increased network data rates by 175% while demonstrating robustness to network environment fluctuations and user mobility.
							</li>
							<li>
							Work published in the Journal of Supercomputing.
							</li>
						</ul>

							<div className="flex justify-center mt-4 gap-4">
							<a
								href="https://github.com/gokulg02/QL-and-DQL-based-load-balancing-in-5G-cellular-networks"
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />	
								</svg>
								GitHub Repo
							</a>

							<a
								href="https://github.com/gokulg02/QL-and-DQL-based-load-balancing-in-5G-cellular-networks/blob/main/Paper.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								</svg>
								Publication
							</a>
							</div>
						</div>

						{/* Driver fatigue */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
						<h3 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-3">
							Driver Fatigue Detection using Computer Vision  
						</h3>
						<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack:</span> OpenCV, DLib, Flask, CSS, ThingSpeak Cloud
						</p>
						{/* <p className="text-sm md:text-base text-gray-500 mb-2 text-center">Apr 2025 – June 2025</p> */}
						<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">
							<li>
							Developed a real-time driver fatigue detection system using facial feature tracking and computer vision.
							</li>
							<li>
							Built an interactive web dashboard to monitor and log fatigue instances on ThingSpeak cloud.
							</li>
							<li>	
							Secured 2nd place (top 5%) in Caterpillar’s CODE-A-THON 2024 among 45+ teams.
							</li>
						</ul>

						<div className="flex justify-center mt-4">
							<a
							href="https://github.com/gokulg02/Driver_fatigue_detection" 
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub Repo
							</a>
						</div>
						</div>

						
						{/* Watermarking */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
						<h3 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-3">
							Watermarking of Quantized Diffusion Models
						</h3>
						<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack:</span> PyTorch, HuggingFace, Diffusers, Flux Diffusion Model
						</p>
						{/* <p className="text-sm md:text-base text-gray-500 mb-2 text-center">Apr 2025 – June 2025</p> */}
						<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">
							<li>
							Developed a robust watermarking framework for quantized diffusion models to protect intellectual property and support secure deployment of image generation models on edge devices.
							</li>
							<li>
							Implemented a workflow that embeds tamper-resistant ownership signatures in quantized Flux.1 text-to-image models, achieving strong resilience to adversarial attacks with minimal impact on model fidelity (≤2 FID increase).
							</li>
							<li>
							Demonstrated through comprehensive testing that watermark removal attempts significantly degrade model quality, ensuring reliable ownership verification while maintaining high image generation quality.
							</li>
						</ul>

						<div className="flex justify-center mt-4">
							<a
							href="https://drive.google.com/file/d/1r36YjGmTwmppqDP92Eb50hb4q1RXPLfo/view?usp=sharing" 
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
							</svg>
							Documentation
							</a>
						</div>
						</div>


					</div>
				</motion.div>
			</div>
		</section>
	);
}
