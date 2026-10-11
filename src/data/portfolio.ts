export interface ProjectItem {
	id: string;
	title: string;
	image: string;
	caption: string;
}

export interface PortfolioSection {
	slug: string;
	label: string;
	title: string;
	lede: string;
	paragraphs: string[];
	prompt: string;
	projects: ProjectItem[];
	inNav: boolean;
	mention?: { before: string; href: string; label: string };
	extras?: { id: string; title: string; projects: ProjectItem[] }[];
}

export const sections: PortfolioSection[] = [
	{
		slug: 'performance',
		label: 'Performance',
		title: 'Performance',
		lede: 'Violin, theater, and choir.',
		paragraphs: [
			'Violin, theater, and choir sit in one place. I play in the Yale Symphony Orchestra, sing with the Yale Glee Club, and direct the Symphony’s Halloween film.',
			'The playing also leaves campus: benefit concerts with student musicians in New York, Los Angeles, Hong Kong, and Beijing.',
		],
		prompt: 'Click on a piece below to see more.',
		inNav: true,
		projects: [
			{
				id: 'symphony',
				title: 'Yale Symphony Orchestra',
				image: '/images/concert-ensemble.svg',
				caption:
					'Violin in the Yale Symphony Orchestra, as a rotating section leader, and director of the 2026 Halloween Show.',
			},
			{
				id: 'halloween',
				title: 'Halloween film',
				image: '/images/theater-film.svg',
				caption:
					'Directed the Symphony’s feature-length Halloween film for an audience of 2,500 in Woolsey Hall.',
			},
			{
				id: 'choir',
				title: 'Yale Glee Club',
				image: '/images/theater-stage.svg',
				caption: 'Choir with the Yale Glee Club.',
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
		slug: 'academic',
		label: 'Academic',
		title: 'Academic',
		lede: 'Philosophy, and physics through the observatory.',
		paragraphs: [
			'I study Physics and Philosophy at Yale, in Directed Studies. The questions are about what we can know, and about how people should live together.',
		],
		mention: {
			before: 'The physics is the sky, at',
			href: '/astrophotography',
			label: 'Dixon Observatory',
		},
		prompt: 'Click on a project below to see more.',
		inNav: true,
		projects: [
			{
				id: 'directed-studies',
				title: 'Directed Studies',
				image: '/images/photo-street.svg',
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
		slug: 'astrophotography',
		label: 'Astrophotography',
		title: 'Capturing the Cosmos',
		lede: 'Night-sky pictures from Dixon Observatory.',
		paragraphs: [
			'I was fortunate enough to go to a school with an observatory.',
			'After restoring Dixon Observatory at Berkshire from three years unused, I went there to take pictures, host stargazing, and chase events like the solar eclipse.',
			'Whenever there is an astronomic event, I rush out of my room with my phone/camera and a tripod, eager to capture the spectacular show the cosmos is about to put on.',
		],
		prompt: 'Click on a project below to see pictures!',
		inNav: true,
		projects: [
			{
				id: 'star-field',
				title: 'Star field',
				image: '/images/sky-stars.svg',
				caption: 'A field of stars from a dark night.',
			},
			{
				id: 'night-glow',
				title: 'Night glow',
				image: '/images/sky-glow.svg',
				caption: 'Color in the night sky.',
			},
			{
				id: 'eclipse',
				title: 'Eclipse',
				image: '/images/sky-eclipse.svg',
				caption: 'The moon crossing the sun.',
			},
		],
	},
	{
		slug: 'photography',
		label: 'Photography',
		title: 'Photography',
		lede: 'Still pictures from the ground, from people, and from the same trips as the sky.',
		paragraphs: [
			'The camera comes out for more than the observatory. These are pictures of places, people, and days that are not a research night.',
		],
		prompt: 'Click on a project below to see pictures!',
		inNav: true,
		projects: [
			{
				id: 'street',
				title: 'Street',
				image: '/images/photo-street.svg',
				caption: 'Buildings and the walk between them.',
			},
			{
				id: 'field',
				title: 'Field',
				image: '/images/photo-field.svg',
				caption: 'Daylight, outside.',
			},
			{
				id: 'camera',
				title: 'With a camera',
				image: '/images/photo-portrait.svg',
				caption: 'A portrait sitting, camera in hand.',
			},
		],
	},
];

export const nav = sections.filter((section) => section.inNav);
