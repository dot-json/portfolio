export const en = {
	header: {
		title: 'Portfolio'
	},
	intro: {
		title: 'Hello there 👋',
		description: `My name is Zsombor, and I'm a 23 year old software developer based in Hungary. I have been programming for 7 years, and I have a passion for creating intriguing and beautiful software from DX to UX.`,
		resume: 'Resume',
		resumeAria: 'Resume',
		githubAria: 'GitHub',
		linkedinAria: 'LinkedIn'
	},
	work: {
		title: 'Work Experience',
		jobs: {
			oracle: {
				company: 'Oracle',
				position: 'Application Developer',
				location: 'Budapest, Hungary',
				dates: '2024 May - Present',
				desc: 'During my time at Oracle, I have been working on Payroll and Benefits, a product that provides payroll and benefits management solutions for large enterprises. My role involves developing and maintaining the application, ensuring its performance and reliability, and collaborating with cross-functional teams to deliver high-quality software solutions.',
				skills: ['Oracle Fusion', 'Fast Formulas', 'SQL', 'Docker', 'Python', 'Rust']
			},
			moonlabs: {
				company: 'Moonlabs',
				position: 'Frontend Developer',
				location: 'Budapest, Hungary',
				dates: '2023 Jul - 2024 Sep',
				desc: 'At Moonlabs, I developed full stack web applications for various companies, including Telekom, Virtamed, MagnetBank, and more. I worked with modern web technologies to create scalable and maintainable software solutions.',
				skills: [
					'ReactJS',
					'NextJS',
					'TypeScript',
					'Node.js',
					'PostgreSQL',
					'Tailwind CSS',
					'Docker',
					'Laravel',
					'PHP',
					'VueJS'
				]
			}
		}
	},
	education: {
		title: 'Education',
		degree: 'Bachelor of Science in Computer Science',
		institution: 'Eötvös Loránd University',
		location: 'Budapest, Hungary',
		dates: '2021 - 2025'
	}
};

export type TranslationStructure = typeof en;
