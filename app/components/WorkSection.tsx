'use client';

import { motion } from 'framer-motion';

export default function WorkSection() {
	return (
		<section className="min-h-[60vh] relative overflow-hidden py-20 md:py-28 bg-gray-50">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
						Work Experience
					</h2>
					<div className="space-y-10">
						{/* UCSD */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
							<h3 className="text-xl md:text-2xl font-semibold text-blue-700">Machine Learning Engineering Intern, Aquamesh.ai</h3>
							<p className="text-sm md:text-base text-gray-600 mb-2">San Diego, CA, USA</p>
							<p className="text-sm md:text-base text-gray-500 mb-2">Aug 2025 - Present</p>
							<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack: </span> AWS SageMaker, AWS Bedrock, AWS Lambda, AWS Amplify, React, openCV, JavaScript, Python
							</p>
							<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">
								<li>
									Conducted 10+ interviews with potential customers to understand user requirements of AI component of product.
								</li>
								<li>
									Built and trained models for time-series forecasting of water quality metrics with 22% MAPE score using AWS SageMaker.
								</li>
								<li>
									Deployed forecasting models as API endpoints and integrated predictions into a React dashboard on AWS Amplify.
								</li>
								<li>
									Designed an agentic AI system leveraging LLMs via AWS Bedrock to analyze water quality trends and deliver insights.
								</li>
								<li>
									Developing computer vision algorithms to automatically detect obstructions on remote IoT spectroscopy sensor lenses.
								</li>
								<li>
									Implementing an end-to-end cloud native pipeline on AWS that integrates data collection from edge device cameras with image processing APIs to proactively monitor sensor lens cleanliness and send alerts to users.
								</li>
							</ul>
						</div>

						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
							<h3 className="text-xl md:text-2xl font-semibold text-blue-700">Graduate Student Researcher, University of California San Diego</h3>
							<p className="text-sm md:text-base text-gray-600 mb-2">San Diego, CA, USA</p>
							<p className="text-sm md:text-base text-gray-500 mb-2">Feb 2025 - Present</p>
							<p className="text-sm md:text-base text-gray-600 mb-3">
							<span className="font-medium">Tech Stack: </span> OpenAI Gym, StableBaselines3,  PyTorch, Python
							</p>
							<ul className="list-disc list-outside pl-6 text-justify text-sm md:text-base text-gray-700 space-y-1 mb-4">


								<li>
									Designed Reinforcement Learning (RL) controllers to reduce freeway congestion by optimizing traffic flow modeled by PDEs and demonstrated improved performance over traditional PDE backstepping controllers.
								</li>
								<li>
									Built a simulation environment in PDEContRoL gym library for building and validating the RL algorithms.
								</li>
							</ul>
                            <div className="flex justify-center mt-4 gap-4">
							<a
								href="https://github.com/lukebhan/PDEControlGym"
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
								href="https://pdecontrolgym.readthedocs.io/en/latest/tutorials/Trafficarz1d_tutorial.html"
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								{/* <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> */}
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
