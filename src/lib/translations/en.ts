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
	},
	skills: [
		{
			name: 'C++',
			desc: 'This was the first programming language I learned, my passion for programming started with reverse engineering and game hacking. Throughout my first years, I learned the fundamentals of C and C++, writing DLLs, hooking functions, and creating cheats for games (for educational purposes). I also learned about memory management, pointers, and low-level programming concepts.',
			icon: '/icons/skills/cpp.svg'
		},
		{
			name: 'HTML',
			name2: 'CSS',
			desc: 'Throughout my career, I have gained a solid understanding of HTML and CSS, including responsive design principles and modern layout techniques. Built several static websites and web applications, focusing on user experience and accessibility. I have also mastered Tailwind CSS, a utility-first CSS framework that allows for rapid development and consistent styling across projects.',
			icon: '/icons/skills/html.svg',
			icon2: '/icons/skills/css.svg'
		},
		{
			name: 'JavaScript',
			name2: 'TypeScript',
			desc: 'I have extensive experience with JavaScript and TypeScript, having used them in most of my projects. I have also worked with TypeScript to enhance code quality and maintainability, leveraging its static typing and advanced features. In my recent projects I mainly use TypeScript, as it provides better type safety and developer experience.',
			icon: '/icons/skills/js.svg',
			icon2: '/icons/skills/ts.svg'
		},
		{
			name: 'ReactJS',
			desc: 'React was the first web framework that got me deeper into web development. Most of my web projects are built with it, and I have a confident grasp of its core principles and best practices. I have experience with hooks, context API, and Redux.',
			icon: '/icons/skills/react.svg'
		},
		{
			name: 'NextJS',
			desc: 'After learning React, I started using NextJS for its server-side rendering capabilities and static site generation features. I have built several projects with NextJS for big companies while working at Moonlabs, leveraging its routing system and API routes to create dynamic web applications. To bring up my skills to modern industry standards, I have also learned about TRPC, ORMs, and other modern web technologies that integrate well with NextJS.',
			icon: '/icons/skills/next.svg'
		},
		{
			name: 'Python',
			desc: 'I have been using Python since high school. I have used it for various projects, including web scraping and automation using Selenium, and data analysis. I have also worked with popular Python libraries such as Flask and Django. My experience with Python has given me a strong foundation in programming concepts and problem-solving skills.',
			icon: '/icons/skills/python.svg'
		},
		{
			name: 'Rust',
			desc: 'I am still learning Rust, but I am interested in its potential for building safe and efficient systems. For my first project I have built a backend for Oracle to handle remote Selenium script execution. In this project, I have learned how to dockerize Rust effectively, how to handle all kinds of web requests, how to handle file management, and how to use its asynchronous features to build a performant backend. I am looking forward to using Rust in more projects in the future.',
			icon: '/icons/skills/rust.svg'
		},
		{
			name: 'Go',
			desc: 'I have been learning Go for a few months now. I created a backend for my diploma project with it, in combination with Docker and PostgreSQL.',
			icon: '/icons/skills/go.svg'
		},
		{
			name: 'SQL',
			desc: 'I have a solid understanding of SQL and relational databases, having used them in various projects. I have experience with PostgreSQL, MySQL, and SQLite, and I am comfortable writing complex queries and optimizing database performance. I have also worked with ORMs such as Prisma. I also have experience with PL/SQL.',
			icon: '/icons/skills/sql.svg'
		},
		{
			name: 'Docker',
			desc: 'I have been using Docker for containerization and deployment of applications. I have experience with creating Docker images, managing containers, and orchestrating multi-container applications using Docker Compose. I have also used Docker in production environments, ensuring that applications run consistently across different environments.',
			icon: '/icons/skills/docker.svg'
		}
	]
};

export type TranslationStructure = typeof en;
