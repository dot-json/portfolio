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
	},
	skills: [
		{
			name: 'C++',
			desc: 'Ez volt az első programozási nyelv, amit megtanultam, a programozás iránti szenvedélyem a reverse engineering-gel és a játékok működésének feltérképezésével kezdődött. Az első éveim során megtanultam a C és C++ alapjait, DLL-ek írását, a függvény hooking-ot és modok készítését játékokhoz (oktatási célokra). Megtanultam a memória kezelését, mutatókat és alacsony szintű programozási fogalmakat is.',
			icon: '/icons/skills/cpp.svg'
		},
		{
			name: 'HTML',
			name2: 'CSS',
			desc: 'A webfejlesztés alapjait már profi szinten elsajátítottam, beleértve a reszponzív dizájnt, az akadálymentességet és a modern CSS keretrendszereket, mint például a Tailwind CSS.',
			icon: '/icons/skills/html.svg',
			icon2: '/icons/skills/css.svg'
		},
		{
			name: 'JavaScript',
			name2: 'TypeScript',
			desc: 'Átfogó tapasztalatom van a JavaScript-ben és TypeScript-ben, amelyeket a webes projektjeim többségében használtam. A TypeScript-et is rengeteget használtam a kódminőség és karbantarthatóság javítása érdekében, kihasználva statikus típusellenőrzését és fejlett funkcióit. Legutóbbi projektjeimben főként TypeScript-et használom, mivel jobb típusbiztonságot és fejlesztői élményt nyújt.',
			icon: '/icons/skills/js.svg',
			icon2: '/icons/skills/ts.svg'
		},
		{
			name: 'ReactJS',
			desc: 'A React volt az első webes keretrendszer, amely mélyebbre vitt a webfejlesztésben. A webes projektjeim többségét vele építettem, és magabiztosan értem az alapelveit és legjobb gyakorlatait. Tapasztalatom van a hooks-okkal, context API-val és Redux-szal.',
			icon: '/icons/skills/react.svg'
		},
		{
			name: 'NextJS',
			desc: 'A React megtanulása után elkezdtem használni a NextJS-t a szerveroldali renderelési képességei és statikus oldal generálási funkciói miatt. Számos projektet építettem NextJS-sel nagy cégeknek a Moonlabs-nál dolgozva, kihasználva az útválasztó rendszerét és API útvonalait dinamikus webalkalmazások létrehozásához. A készségeim modern ipari szintre emelése érdekében megtanultam a TRPC-t, ORM-eket és más modern webtechnológiákat is, amelyek jól integrálódnak a NextJS-sel.',
			icon: '/icons/skills/next.svg'
		},
		{
			name: 'Python',
			desc: 'A Python-t széleskörűen használtam különböző projektekben, beleértve az automatizálást, adatfeldolgozást és webfejlesztést. A Django és Flask keretrendszerekkel is dolgoztam, amelyek lehetővé tették számomra, hogy gyorsan és hatékonyan építsek webalkalmazásokat.',
			icon: '/icons/skills/python.svg'
		},
		{
			name: 'Rust',
			desc: 'Még mindig tanulom a Rust-ot, de érdekel a biztonságos és hatékony rendszerek építésében rejlő lehetőségei miatt. Az első projektemhez egy backend-et építettem az Oracle-nek remote Selenium script végrehajtás kezelésére. Ebben a projektben megtanultam, hogyan dockerizáljam hatékonyan a Rust-ot, hogyan kezeljek mindenféle webes kérést, hogyan kezeljek fájlkezelést, és hogyan használjam az aszinkron funkcióit egy teljesítményképes backend építéséhez. Várom, hogy a jövőben több projektben is használhassam a Rust-ot.',
			icon: '/icons/skills/rust.svg'
		},
		{
			name: 'Go',
			desc: 'Pár hónapja tanulom a Go-t. A diplomamunkámhoz készítettem vele egy backend-et, Docker és PostgreSQL kombinációjával.',
			icon: '/icons/skills/go.svg'
		},
		{
			name: 'SQL',
			desc: 'Magabiztos ismereteim vannak az SQL-ben és a relációs adatbázisokban, számos projektben használtam már őket. Ezen felül otthon vagyok PostgreSQL-ben, MySQL-ben és SQLite-ban, összetett lekérdezések írásában és adatbázis optimalizálásában is. Dolgoztam ORM-ekkel is, mint például a Prisma. Van tapasztalatom PL/SQL-lel is.',
			icon: '/icons/skills/sql.svg'
		},
		{
			name: 'Docker',
			desc: 'Dockert szinte minden mostani projektemnél használtam. Tapasztalatom van Docker image-ek készítésében, konténerek kezelésében és többkonténeres alkalmazások vezénylésében Docker Compose segítségével. Többször használtam már Dockert éles környezetekben is.',
			icon: '/icons/skills/docker.svg'
		}
	]
};
