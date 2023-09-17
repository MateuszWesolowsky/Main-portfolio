import mainOne from "./assets/main-project-1.jpg";
import mainTwo from "./assets/main-project-2.jpg";
import secondaryOne from "./assets/secondary-project-1.jpg";
import secondaryTwo from "./assets/secondary-project-2.jpg";

interface Project {
	id: number;
	category: string;
	img: string;
	title: string;
	code: string;
	demo: string;
}

export const projects: Project[] = [
	{
		id: 0,
		category: "main",
		img: mainOne,
		title: "League champions app",
		code: "https://github.com/MateuszWesolowsky/LeagueOfLegendsCards-App",
		demo: "https://league-champions-app.netlify.app/",
	},
	{
		id: 1,
		category: "main",
		img: mainTwo,
		title: "Movie App",
		code: "https://github.com/MateuszWesolowsky/Movie-App",
		demo: "https://movie-popcorn-app.netlify.app/",
	},
	{
		id: 2,
		category: "secondary",
		img: secondaryOne,
		title: "Online store simulation",
		code: "https://github.com/MateuszWesolowsky/Media-SHop",
		demo: "https://media-junior.netlify.app/",
	},
	{
		id: 3,
		category: "secondary",
		img: secondaryTwo,
		title: "Travel List App",
		code: "https://github.com/MateuszWesolowsky/travel-list",
		demo: "https://travellist-app.netlify.app/",
	},
];
