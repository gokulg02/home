'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
	return (
		<section className="min-h-[60vh] relative overflow-hidden py-20 md:py-28 bg-gray-50">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
					<h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
						Education
					</h2>
					<div className="space-y-10">
						{/* UCSD */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
							<h3 className="text-xl md:text-2xl font-semibold text-blue-700">University of California San Diego, CA, USA</h3>
							<p className="text-sm md:text-base text-gray-600 mb-2">Master of Science, Machine Learning and Data Science</p>
							<p className="text-sm md:text-base text-gray-500 mb-2">Sept 2024 - Dec 2025</p>
							<p className="text-sm md:text-base text-gray-700">
								<strong>Coursework:</strong> Probability & Statistics, Software Engineering Principles, Statistical Learning, Optimization of Deep Learning Algorithms, Machine Learning for Physical Applications, Data Management for Analytics, Generative AI
							</p>
						</div>

						{/* Anna University */}
						<div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
							<h3 className="text-xl md:text-2xl font-semibold text-blue-700">Anna University, Madras Institute of Technology Campus, Chennai, India</h3>
							<p className="text-sm md:text-base text-gray-600 mb-2">Bachelor of Engineering, Electronics and Communication Engineering</p>
							<p className="text-sm md:text-base text-gray-500 mb-2">Oct 2020 - May 2024</p>
							<p className="text-sm md:text-base text-gray-700">
								<strong>Honors:</strong> P. M. S. Iyer Memorial Prize for scoring highest grades in freshman year and sophomore year
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
