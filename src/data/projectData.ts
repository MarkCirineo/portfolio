import { Project } from "@typings/projects";

export const projects: Project[] = [
    {
        slug: "terravia",
        title: "TerraVia",
        tagline: "Trip logging, travel map, and analytics",
        description:
            "A full-featured travel companion for logging trips, visualizing your journey history on an interactive world map, and exploring detailed analytics about where you've been. Features include trip management, flight tracking, country and city stats, and a beautiful dashboard with real-time data visualizations.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
            "TailwindCSS",
            "Docker",
        ],
        thumbnailImage: "/assets/projects/terravia/thumb.webp",
        screenshots: [
            "/assets/projects/terravia/screenshot-1.webp",
            "/assets/projects/terravia/screenshot-2.webp",
            "/assets/projects/terravia/screenshot-3.webp",
        ],
        liveUrl: "https://terravia.app",
        featured: true,
    },
    {
        slug: "guess-who",
        title: "Guess Who Online",
        tagline: "Real-time multiplayer board game",
        description:
            "A real-time multiplayer adaptation of the classic Guess Who board game. Create or join rooms with friends, ask yes-or-no questions, and strategically eliminate characters to deduce your opponent's pick.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Socket.io",
            "Node.js",
        ],
        thumbnailImage: "/assets/projects/guess-who/thumb.webp",
        screenshots: [
            "/assets/projects/guess-who/screenshot-1.webp",
            "/assets/projects/guess-who/screenshot-2.webp",
        ],
        githubUrl: "https://github.com/MarkCirineo/guess-who",
        liveUrl: "https://playguesswho.net",
    },
    {
        slug: "track-course",
        title: "Track Course",
        tagline: "TrackMan® course viewer & score tracker",
        description:
            "Browse and search TrackMan® golf simulator courses with detailed slope and course ratings. Save your favorite courses to a personal list and track your scores.",
        technologies: ["TypeScript", "Vue.js", "Node.js", "CSS"],
        thumbnailImage: "/assets/projects/track-course/thumb.webp",
        screenshots: [
            "/assets/projects/track-course/screenshot-1.webp",
            "/assets/projects/track-course/screenshot-2.webp",
        ],
        githubUrl: "https://github.com/MarkCirineo/track-course",
        liveUrl: "https://trackcourse.app",
    },
    {
        slug: "nfl-countdown",
        title: "NFL Countdown",
        tagline: "Countdowns for important NFL dates",
        description:
            "Live countdown timers for key NFL dates — from the draft to the regular season kickoff. Stay locked in on exactly how long until the next big moment in football with a clean, glanceable interface.",
        technologies: ["Svelte", "TypeScript", "CSS"],
        thumbnailImage: "/assets/projects/nfl-countdown/thumb.webp",
        screenshots: [
            "/assets/projects/nfl-countdown/screenshot-1.webp",
            "/assets/projects/nfl-countdown/screenshot-2.webp",
        ],
        githubUrl: "https://github.com/MarkCirineo/nfl-countdown",
        liveUrl: "https://ctdn.xyz",
    },
    {
        slug: "putt-calc",
        title: "Putt Calc",
        tagline: "Golf simulator putting calculator",
        description:
            "A putting calculator built for golf simulators. Enter your distance and handicap to generate a realistic putt count to plug into the sim.",
        technologies: ["TypeScript", "Vue.js", "CSS"],
        thumbnailImage: "/assets/projects/putt-calc/thumb.webp",
        screenshots: [
            "/assets/projects/putt-calc/screenshot-1.webp",
            "/assets/projects/putt-calc/screenshot-2.webp",
        ],
        githubUrl: "https://github.com/MarkCirineo/putt-calc",
        liveUrl: "https://putt.markcirineo.com",
    },
    {
        slug: "portfolio",
        title: "Portfolio",
        tagline: "This portfolio website",
        description:
            "The site you're looking at right now. A single-page portfolio built with Vue 3 and TypeScript, featuring a glassmorphic dark theme, scroll-triggered animations, and a project showcase with modal detail views.",
        technologies: ["Vue.js", "TypeScript", "Vite", "CSS"],
        thumbnailImage: "/assets/projects/portfolio/thumb.webp",
        screenshots: ["/assets/projects/portfolio/screenshot-1.webp"],
        githubUrl: "https://github.com/MarkCirineo/portfolio",
        liveUrl: "https://markcirineo.com",
    },
];
