export type Project = {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    technologies: string[];
    thumbnailImage: string;
    screenshots: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
};
