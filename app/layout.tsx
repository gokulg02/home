import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Gokul Gandhikumar - Portfolio',
	description:
		'Welcome to my portfolio! I am passionate about building machine learning and data science applications. Explore my projects and expertise in creating innovative solutions.',
	applicationName: 'Gokul Gandhikumar - Portfolio',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Web Development',
		'Gokul Gandhikumar',
	],
	authors: [{ name: 'Gokul Gandhikumar' }],
	creator: 'Gokul Gandhikumar',
	openGraph: {
		title: 'Gokul Gandhikumar - ML Engineer Portfolio',
		description:
			'I am a graduate student at UC San Diego studying Machine Learning and Data Science. I have a passion for building scalable and high-performance ML systems. I am currently looking for full-time opportunities in the field of Machine Learning and Data Science. Feel free to reach out!',
		url: 'https://gokulg.vercel.app',
		siteName: 'Gokul Gandhikumar - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Gokul Gandhikumar - ML Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children} <Analytics /> <SpeedInsights /></body>
		</html>
	);
}
