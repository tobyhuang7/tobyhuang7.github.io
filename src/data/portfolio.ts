export interface ProjectItem {
	id: string;
	title: string;
	image: string;
	caption: string;
	href?: string;
	fit?: 'contain';
	/** Concert start, America/New_York, as an ISO 8601 timestamp with a numeric offset. */
	startsAt?: string;
	/** Separate instant for a ticket countdown, America/New_York, with a numeric offset. */
	ticketsAt?: string;
	ticketsHref?: string;
}

export interface PortfolioSection {
	slug: string;
	label: string;
	title: string;
	lede: string;
	paragraphs: string[];
	prompt: string;
	projects: ProjectItem[];
	projectsTitle?: string;
	inNav: boolean;
	mention?: { before: string; href: string; label: string };
	extras?: { id: string; title: string; projects: ProjectItem[] }[];
}

export const sections: PortfolioSection[] = [
	{
		slug: 'music-and-film',
		label: 'Music & Film',
		title: 'Music & Film',
		lede: 'Violin, theater, and choir, with the Symphony and its Halloween film.',
		paragraphs: [
			'Violin, theater, and choir sit in one place. I play in the Yale Symphony Orchestra, sing with the Yale Glee Club, and direct the Symphony’s Halloween film.',
			'The playing also leaves campus: benefit concerts with student musicians in New York, Los Angeles, Hong Kong, and Beijing.',
		],
		prompt: 'Click on a piece below to see more.',
		projectsTitle: 'Future and Past Shows',
		inNav: true,
		projects: [
			{
				id: 'yso-opening-2025',
				title: 'YSO Opening Concert',
				image: '/images/yso-2025-opening.jpg',
				caption:
					'Yale Symphony Orchestra, September 27, 2025, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/yso-opening-concert-tickets-1488791047099',
				fit: 'contain',
				startsAt: '2025-09-27T19:30:00-04:00',
			},
			{
				id: 'halloween-2025',
				title: '2025 YSO Halloween Show',
				image: '/images/yso-2025-halloween.jpg',
				caption:
					'Yale Symphony Orchestra, October 31, 2025, at 11:59pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/2025-yso-halloween-show-tickets-1500234996259',
				fit: 'contain',
				startsAt: '2025-10-31T23:59:00-04:00',
			},
			{
				id: 'nature-1904',
				title: 'Nature and Humanity in 1904',
				image: '/images/yso-nature-1904.jpg',
				caption:
					'Yale Symphony Orchestra, November 20, 2025, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/nature-and-humanity-in-1904-tickets-1488892620909',
				fit: 'contain',
				startsAt: '2025-11-20T19:30:00-05:00',
			},
			{
				id: 'love-death-1830',
				title: 'Love and Death in 1830',
				image: '/images/yso-love-death-1830.jpg',
				caption:
					'Yale Symphony Orchestra, February 14, 2026, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/love-and-death-in-1830-tickets-1500061788189',
				fit: 'contain',
				startsAt: '2026-02-14T19:30:00-05:00',
			},
			{
				id: 'mahler-resurrection',
				title: 'Mahler Symphony No. 2 “Resurrection”',
				image: '/images/yso-mahler-resurrection.jpg',
				caption:
					'Yale Symphony Orchestra, March 28, 2026, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/mahler-symphony-no-2-resurrection-celebrating-60-years-tickets-1500070203359',
				fit: 'contain',
				startsAt: '2026-03-28T19:30:00-04:00',
			},
			{
				id: 'masses-rites',
				title: 'Masses, Rites, and Folklore',
				image: '/images/yso-masses-rites.jpg',
				caption:
					'Yale Symphony Orchestra with the Yale Glee Club, April 18, 2026, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/masses-rites-and-folklore-tickets-1500226430639',
				fit: 'contain',
				startsAt: '2026-04-18T19:30:00-04:00',
			},
			{
				id: 'opening-concert',
				title: 'Opening Concert',
				image: '/images/yso-opening-concert.png',
				caption:
					'Yale Symphony Orchestra, October 3, 2026, at 7:30pm in Woolsey Hall. Details of this concert and all future concerts can be found here.',
				href: 'https://www.eventbrite.com/cc/the-yso-2026-27-season-death-and-transfiguration-4853548/',
				fit: 'contain',
				startsAt: '2026-10-03T19:30:00-04:00',
			},
			{
				id: 'family-weekend',
				title: 'Family Weekend Concert',
				image: '/images/glee-club.jpg',
				caption:
					'Yale Glee Club, October 10, 2026, at 7:30pm in Woolsey Hall, with the Yale Wind Ensemble and the Yale Symphony Orchestra. Details can be found here.',
				href: 'https://gleeclub.yale.edu/events/2026-10-10-yale-college-ensembles-family-weekend-concert',
				startsAt: '2026-10-10T19:30:00-04:00',
			},
			{
				id: 'glee-reunion',
				title: '165th Anniversary Reunion Concert',
				image: '/images/glee-165th-reunion.jpg',
				caption:
					'Yale Glee Club, October 17, 2026, at 4:00pm in Woolsey Hall. Details can be found here.',
				href: 'https://gleeclub.yale.edu/events/2026-10-17-yale-glee-club-165th-anniversary-reunion-concert',
				fit: 'contain',
				startsAt: '2026-10-17T16:00:00-04:00',
			},
			{
				id: 'halloween',
				title: 'YSO Halloween Show Movie',
				image: '/images/halloween-show-poster.webp',
				caption:
					'October 31, 2026, at 11:59pm in Woolsey Hall. Directed the Symphony’s feature-length Halloween film for an audience of 2,600+.',
				startsAt: '2026-10-31T23:59:00-04:00',
				ticketsAt: '2026-10-16T22:59:00-04:00',
				ticketsHref: 'https://www.eventbrite.com/e/2026-yso-halloween-show-tickets-1990503326031',
			},
			{
				id: 'choral-fest',
				title: 'Choral Fest: Canons and Rounds',
				image: '/images/glee-choral-fest.jpg',
				caption:
					'Chamber Singers of the Yale Glee Club, November 5, 2026, at 5:15pm at the Beinecke Rare Book and Manuscript Library. Details can be found here.',
				href: 'https://gleeclub.yale.edu/events/2026-11-05-choral-fest-canons-and-rounds',
				fit: 'contain',
				startsAt: '2026-11-05T17:15:00-05:00',
			},
			{
				id: 'yale-princeton',
				title: 'Yale Princeton Joint Glee Club Concert',
				image: '/images/glee-club.jpg',
				caption:
					'Yale Glee Club with the Princeton University Glee Club, November 13, 2026, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://gleeclub.yale.edu/events/2026-11-13-yale-princeton-joint-glee-club-concert',
				startsAt: '2026-11-13T19:30:00-05:00',
			},
			{
				id: 'spirits-america',
				title: 'Spirits of America at 250',
				image: '/images/yso-spirits-america.jpg',
				caption:
					'Yale Symphony Orchestra, November 14, 2026, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/spirits-of-america-at-250-tickets-1990504037158',
				startsAt: '2026-11-14T19:30:00-05:00',
			},
			{
				id: 'messiah',
				title: 'Messiah Audience Singalong',
				image: '/images/glee-club.jpg',
				caption:
					'Yale Glee Club with the Yale Symphony Orchestra, December 13, 2026, at 1:30pm in Battell Chapel. Details can be found here.',
				href: 'https://gleeclub.yale.edu/events/2026-12-13-messiah-audience-singalong',
				startsAt: '2026-12-13T13:30:00-05:00',
			},
			{
				id: 'heroes-dreams',
				title: 'Heroes and Dreams: Around the World in 1894-5',
				image: '/images/yso-heroes-dreams.jpg',
				caption:
					'Yale Symphony Orchestra, February 13, 2027, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/heroes-and-dreams-around-the-world-in-1894-5-tickets-1990504762327',
				startsAt: '2027-02-13T19:30:00-05:00',
			},
			{
				id: 'rome-leningrad',
				title: 'Rome and Leningrad: Destruction and Transcendence',
				image: '/images/yso-rome-leningrad.jpg',
				caption:
					'Yale Symphony Orchestra, April 3, 2027, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/rome-and-leningrad-destruction-and-transcendence-tickets-1990523611706',
				startsAt: '2027-04-03T19:30:00-04:00',
			},
			{
				id: 'death-transfiguration',
				title: 'Death and Transfiguration',
				image: '/images/yso-death-transfiguration.jpg',
				caption:
					'Yale Symphony Orchestra with the Yale Glee Club, April 24, 2027, at 7:30pm in Woolsey Hall. Details can be found here.',
				href: 'https://www.eventbrite.com/e/death-and-transfiguration-tickets-1990524154329',
				startsAt: '2027-04-24T19:30:00-04:00',
			},
			{
				id: 'benefit-concerts',
				title: 'Benefit concerts',
				image: '/images/good-ensemble.svg',
				caption:
					'A concert series I organize, with student musicians in New York, Los Angeles, Hong Kong, and Beijing.',
			},
		],
	},
	{
		slug: 'science-and-observatory',
		label: 'Science & Observatory',
		title: 'Science & Observatory',
		lede: 'Dixon Observatory at Berkshire, and pictures of the night sky.',
		paragraphs: [
			'The physics is the sky.',
			'I was fortunate enough to go to a school with an observatory.',
			'After restoring Dixon Observatory at Berkshire from three years unused, I went there to take pictures, host stargazing, and chase events like the solar eclipse.',
			'Whenever there is an astronomic event, I rush out of my room with my phone/camera and a tripod, eager to capture the spectacular show the cosmos is about to put on.',
		],
		prompt: 'Click on a project below to see pictures!',
		inNav: true,
		projects: [],
		extras: [
			{
				id: 'astrophotography',
				title: 'Astrophotography',
				projects: [
					{
						id: 'snow-field',
						title: 'Snow field',
						image: '/images/PXL_20220109_001026498.NIGHT%20(5).jpg',
						caption: 'Stars over a snowy field at Berkshire School.',
					},
					{
						id: 'milky-way',
						title: 'Milky Way',
						image: '/images/PXL_20220925_003008202.NIGHT%20(3).jpg',
						caption: 'The Milky Way over a field.',
					},
					{
						id: 'scoreboard',
						title: 'Scoreboard',
						image: '/images/PXL_20220925_004801871.NIGHT%20(3).jpg',
						caption: 'The Milky Way behind a scoreboard at Berkshire School.',
					},
					{
						id: 'eclipse',
						title: 'Eclipse',
						image: '/images/ECLIPSE%20COMPOSITE%20FINAL.jpg',
						caption: 'The Great American Solar Eclipse of 2024, captured in Lyndonville, VT.',
					},
					{
						id: 'night-color',
						title: 'Auroras',
						image: '/images/PXL_20241010_234229636.jpg',
						caption: 'Auroras in Massachusetts due to high solar activity.',
					},
					{
						id: 'comet',
						title: 'Comet',
						image: '/images/20241018-DSC07088-3.jpg',
						caption: 'Comet C/2023 A3 (Tsuchinshan-ATLAS).',
					},
					{
						id: 'arise',
						title: 'A.R.I.S.E.',
						image: '/images/ARISE_poster.png',
						caption: 'Eclipse photos on the A.R.I.S.E. exhibition poster.',
					},
				],
			},
		],
	},
	{
		slug: 'writing',
		label: 'Writing',
		title: 'Writing',
		lede: 'Directed Studies, and essays on what we can know and how to live together.',
		paragraphs: [
			'I study Physics and Philosophy at Yale, in Directed Studies. The questions are about what we can know, and about how people should live together.',
		],
		prompt: 'Click on a project below to see more.',
		inNav: true,
		projects: [
			{
				// TODO: this card was using the Photography "Street" image. It needs its own picture.
				id: 'directed-studies',
				title: 'Directed Studies',
				image: '/images/placeholder.svg',
				caption:
					'Yale’s Directed Studies program: philosophy, literature, and historical-political thought.',
			},
		],
		extras: [
			{
				id: 'research',
				title: 'Research',
				projects: [
					{
						// TODO: the site has no formal title or link for this paper, only "whether elections represent the will of the people".
						id: 'elections',
						title: 'Whether elections represent the will of the people',
						image: '/images/placeholder.svg',
						caption: 'A paper on whether elections represent the will of the people.',
					},
					{
						// TODO: the site has no formal title, description, or link for the sortition paper.
						id: 'sortition',
						title: 'Sortition',
						image: '/images/placeholder.svg',
						caption: 'A paper on sortition.',
					},
					{
						// TODO: no link or thumbnail for this essay yet.
						id: 'locke',
						title: 'John Locke essay on music and history',
						image: '/images/placeholder.svg',
						caption:
							'A John Locke essay on whether music has changed the course of history, commended and shortlisted.',
					},
				],
			},
		],
	},
	// Hidden until there are projects to post.
	// To bring this tab back, set `inNav` to true. The page stays at /technical.
	{
		slug: 'technical',
		label: 'Technical',
		title: 'Personal Projects',
		lede: 'Builds of my own, separate from coursework and research.',
		paragraphs: [
			'This tab is for personal technical projects: tools and builds that are not a class and not a paper.',
			'Nothing is posted here yet. I will add projects as they are ready.',
		],
		prompt: '',
		inNav: false,
		projects: [],
	},
	{
		slug: 'photography',
		label: 'Photography',
		title: 'Photography',
		lede: 'Still pictures of places, people, and days away from the observatory.',
		paragraphs: [
			'The camera comes out for more than the observatory. These are pictures of places, people, and days that are not a research night.',
		],
		prompt: 'Click on a project below to see pictures!',
		inNav: true,
		projects: [
			{
				id: 'victoria-harbour',
				title: 'Victoria Harbour',
				image: '/images/photography/dji_fly_20250423_185958_0147_1745406415932_photo%20(1).jpg',
				caption: 'Hong Kong’s Victoria Harbour at dusk.',
			},
			{
				id: 'skyline',
				title: 'Skyline',
				image: '/images/photography/dji_fly_20250727_194448_0280_1753616147633_photo%20(1).jpg',
				caption: 'Hong Kong at sunset.',
			},
			{
				id: 'my-umbrella',
				title: 'My Umbrella',
				image: '/images/photography/DSC02092.JPG',
				caption: 'A gull very protective of their land.',
			},
			{
				id: 'takeoff',
				title: 'Takeoff',
				image: '/images/photography/DSC02277.JPG',
				caption: 'A gull spring into flight on the sand.',
			},
			{
				id: 'goose',
				title: 'Goose',
				image: '/images/photography/DSC04450.JPG',
				caption: 'A goose on a golf field.',
			},
			{
				id: 'sunrise',
				title: 'Sunrise',
				image: '/images/photography/IMG_0935.JPG',
				caption: 'A bird resting on a pole viewed from half under the water.',
			},
			{
				id: 'lotus',
				title: 'Lotus',
				image: '/images/photography/PXL_20230723_044020485%202.JPG',
				caption: 'Pristine lotus right after a rainstorm.',
			},
			{
				id: 'rain',
				title: 'Rain',
				image: '/images/photography/PXL_20230723_043442792.MP%202.JPG',
				caption: 'Rain, an umbrella, and a tower at the historic Xihu.',
			},
			{
				id: 'boat',
				title: 'Boat',
				image: '/images/photography/PXL_20230723_040816344%202.JPG',
				caption: 'A boat on the water, with Hangzhou behind it.',
			},
			{
				id: 'stickers',
				title: 'Stickers',
				image: '/images/photography/DSC05090.JPG',
				caption: 'Hong Kong’s fun and odd corners.',
			},
		],
	},
];

export const nav = sections.filter((section) => section.inNav);
