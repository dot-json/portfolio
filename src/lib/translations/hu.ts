import type { TranslationStructure } from './en.js';

export const hu: TranslationStructure = {
	header: {
		title: 'Portfólió'
	},
	intro: {
		title: 'Szia! 👋',
		description: `Zsombor vagyok, egy 23 éves szoftverfejlesztő Magyarországról. 7 éve programozom, és szenvedélyem, hogy érdekes és szép szoftvereket készítsek a fejlesztői élménytől a felhasználói élményig.`,
		resume: 'Önéletrajz',
		resumeAria: 'Önéletrajz',
		githubAria: 'GitHub',
		linkedinAria: 'LinkedIn'
	},
	work: {
		title: 'Munkatapasztalat',
		jobs: {
			oracle: {
				company: 'Oracle',
				position: 'Application Developer',
				location: 'Budapest, Magyarország',
				dates: '2024 Máj. - Jelenleg',
				desc: 'Az Oracle-nál töltött időm alatt a Payroll and Benefits terméken dolgoztam, amely egy olyan megoldást kínál a bérszámfejtés és juttatások kezelésére nagyvállalatok számára. Feladatom az alkalmazás fejlesztése és karbantartása, teljesítményének és megbízhatóságának biztosítása, valamint a keresztfunkcionális csapatokkal való együttműködés a magas színvonalú szoftvermegoldások szállítása érdekében.',
				skills: ['Oracle Fusion', 'Fast Formulas', 'SQL', 'Docker', 'Python', 'Rust']
			},
			moonlabs: {
				company: 'Moonlabs',
				position: 'Frontend Fejlesztő',
				location: 'Budapest, Magyarország',
				dates: '2023 Júl. - 2024 Szept.',
				desc: 'A Moonlabs-nál teljes stack webalkalmazásokat fejlesztettem különböző cégek számára, beleértve a Telekomot, Virtamedet, MagnetBankot és másokat. Modern webtechnológiákat használtam a skálázható és karbantartható szoftvermegoldások létrehozásához.',
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
		title: 'Tanulmányok',
		degree: 'Programtervező Informatikus BSc.',
		institution: 'Eötvös Loránd Tudományegyetem',
		location: 'Budapest, Magyarország',
		dates: '2021 - 2025'
	}
};
