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

export interface HeaderProps extends Omit<Props, 'summary' | 'education' | 'projects' | 'achievements' | 'experiences' | 'recommendations' | 'skills' | 'phone' | 'socialMediaLinks' | 'email'| 'tagline'> {}

export interface AboutProps extends Omit<Props, 'education' | 'projects' | 'achievements' | 'experiences' | 'recommendations' | 'skills' | 'phone' | 'socialMediaLinks' | 'email' | 'altProfilePicture' | 'tagline'> {}

export interface ExperienceProps extends Omit<Props, 'summary' |'education' | 'projects' | 'achievements' | 'recommendations' | 'skills' | 'phone' | 'socialMediaLinks' | 'email' | 'altProfilePicture'| 'tagline'> {}

export interface EducationProps extends Omit<Props, 'summary' | 'projects' | 'achievements' | 'experiences' | 'recommendations' | 'skills' | 'phone' | 'socialMediaLinks' | 'email' | 'altProfilePicture' | 'tagline'> {}

export interface SkillsProps extends Omit<Props, 'summary' |'education' | 'projects' | 'achievements' | 'experiences' | 'recommendations' | 'phone' | 'socialMediaLinks' | 'email' | 'altProfilePicture'| 'tagline'> {}

export interface ProjectsProps extends Omit<Props, 'summary' |'education' | 'achievements' | 'experiences' | 'recommendations' | 'skills' | 'phone' | 'socialMediaLinks' | 'email' | 'altProfilePicture'| 'tagline'> {}

export interface AchievementsProps extends Omit<Props, 'summary' |'education' | 'experiences' | 'recommendations' | 'skills' | 'phone' | 'socialMediaLinks' | 'email' | 'altProfilePicture'| 'projects'| 'tagline'> {}

export interface RecommendationsProps extends Omit<Props, 'summary' |'education' | 'experiences' | 'skills' | 'phone' | 'socialMediaLinks' | 'email' | 'altProfilePicture'| 'projects' | 'achievements'| 'tagline' > {}

export interface ContactProps extends Omit<Props, 'summary' |'education' | 'experiences' | 'skills' | 'altProfilePicture'| 'projects' | 'achievements'| 'recommendations' | 'tagline'> {}