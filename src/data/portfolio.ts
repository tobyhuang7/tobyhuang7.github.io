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
}

export const sections: PortfolioSection[] = [
	{
		slug: 'violin-in-concert',
		label: 'Violin In Concert',
		title: 'In Concert',
		lede: 'Recitals, ensemble playing, and solos from the hall.',
		paragraphs: [
			'These are the performances with a program and a quiet room: recitals, ensemble concerts, and featured solos.',
		],
		prompt: 'Click on a performance below to watch.',
		inNav: true,
		projects: [
			{
				id: 'recital',
				title: 'Recital',
				image: '/images/concert-recital.svg',
				caption: 'A solo recital set.',
			},
			{
				id: 'ensemble',
				title: 'Ensemble',
				image: '/images/concert-ensemble.svg',
				caption: 'Playing with a group.',
			},
			{
				id: 'solo',
				title: 'Solo',
				image: '/images/concert-solo.svg',
				caption: 'A featured solo or concerto movement.',
			},
		],
	},
	{
		slug: 'violin-for-good',
		label: 'Violin For Good',
		title: 'Violin For Good',
		lede: 'Playing outside the concert hall, for people and for causes.',
		paragraphs: [
			'Some of the playing is not a ticketed concert. It is for a room, a cause, or someone who needs the music more than a program note.',
		],
		prompt: 'Click on a visit below to watch.',
		inNav: true,
		projects: [
			{
				id: 'room',
				title: 'A room',
				image: '/images/good-room.svg',
				caption: 'Playing for a smaller room than a hall.',
			},
			{
				id: 'visit',
				title: 'A visit',
				image: '/images/good-visit.svg',
				caption: 'Taking the violin to people who asked for it.',
			},
			{
				id: 'together',
				title: 'Together',
				image: '/images/good-ensemble.svg',
				caption: 'Playing with others for a cause.',
			},
		],
	},
	{
		slug: 'theater',
		label: 'Theater',
		title: 'On Stage and On Screen',
		lede: 'Stage roles, and movies I direct.',
		paragraphs: [
			'Theater is both sides of the work: roles I play, and films I direct. A scene, a cue, and an audience.',
		],
		prompt: 'Click on a piece below to see more.',
		inNav: true,
		projects: [
			{
				id: 'stage',
				title: 'Stage',
				image: '/images/theater-stage.svg',
				caption: 'A role in a play.',
			},
			{
				id: 'film',
				title: 'A film I directed',
				image: '/images/theater-film.svg',
				caption: 'A movie I directed.',
			},
			{
				id: 'rehearsal',
				title: 'Rehearsal',
				image: '/images/theater-rehearsal.svg',
				caption: 'The room before the show.',
			},
		],
	},
	{
		slug: 'astrophotography',
		label: 'Astrophotography',
		title: 'Capturing the Cosmos',
		lede: 'Night-sky pictures and near-Earth object research from a restored observatory.',
		paragraphs: [
			'I am fortunate enough to live at a school with an observatory.',
			'After spending a year restoring it from its abandoned state, I now regularly go there to take pictures and conduct research on Near Earth Objects like asteroids and comets.',
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
	{
		slug: 'technical',
		label: 'Technical',
		title: 'Things I Build',
		lede: 'Code, research tools, and projects that start as a problem.',
		paragraphs: [
			'Technical work sits next to the playing and the pictures. Some of it supports the observatory research. Some of it is a build of its own.',
		],
		prompt: 'Click on a project below to see more.',
		inNav: true,
		projects: [
			{
				id: 'orbits',
				title: 'Orbits',
				image: '/images/tech-orbits.svg',
				caption: 'Notes and tools for near-Earth objects: asteroids and comets.',
			},
			{
				id: 'build',
				title: 'A build',
				image: '/images/tech-build.svg',
				caption: 'A project built to solve a specific problem.',
			},
			{
				id: 'log',
				title: 'Field log',
				image: '/images/tech-log.svg',
				caption: 'A log of nights at the observatory.',
			},
		],
	},
];

export const nav = sections.filter((section) => section.inNav);
