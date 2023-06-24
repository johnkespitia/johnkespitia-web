export interface Experience {
    title: string;
    company: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    date: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string;
}

export interface SocialMediaLink {
    name: string;
    url: string;
}

export interface Props {
    name: string;
    tagline: string;
    profilePicture: string;
    altProfilePicture: string;
    summary: string;
    experiences: Experience[];
    education: Education[];
    skills: string[];
    projects: Project[];
    achievements: string[];
    recommendations: string[];
    email: string;
    phone: string;
    socialMediaLinks: SocialMediaLink[];
}