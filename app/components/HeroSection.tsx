'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
							Gokul Gandhikumar
						</h1>
						{/* <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Full Stack Developer</h2> */}
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							I am a graduate student at UC San Diego studying Machine Learning and Data Science. I have a passion for building scalable and
							high-performance ML systems. I am currently looking for full-time opportunities in the field of Machine Learning and Data Science. Feel free to reach out!
						</p>
						{/* <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Previously Senior Full Stack Developer at <span className="text-blue-600">Stripe</span> and Tech Lead at{' '}
							<span className="text-purple-600">Vercel</span>
						</p> */}
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">Computer Vision</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 text-xs md:text-sm">Reinforcement Learning</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-100 rounded-full text-teal-600 text-xs md:text-sm">Cloud Technologies</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">LLMs</span>
						{/* <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 text-xs md:text-sm"></span> */}
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600">Programming Languages</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Python
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										SQL
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										C/C++
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Matlab
									</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-600">ML Libraries</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										PyTorch
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										TensorFlow
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										NumPy
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Pandas
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Scikit-learn
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										OpenAI APIs
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										LangChain
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										OpenAI Gym
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										StableBaselines
									</li>
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops' ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-600">Tools</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Azure Cloud Infrastructure
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										chromaDB
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Docker
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Flask	
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Streamlit
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										CI/CD Pipelines
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Git Version Control
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
