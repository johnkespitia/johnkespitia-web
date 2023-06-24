import Image from 'next/image'
import {Props} from "@/components/profile";
import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Achievements from "@/components/achievements";
import Recommendations from "@/components/recomendation";
import Contact from "@/components/contact";

export default function Home() {
    const profileData: Props = {
        altProfilePicture: "",
        name: "John Kespitia",
        tagline: "Software Developer",
        profilePicture: "https://example.com/profile-picture.jpg",
        summary: "Experienced software developer specializing in React and Next.js.",
        experiences: [
            {
                title: "Software Engineer",
                company: "ABC Company",
                description: "Developed web applications using React.js and Next.js.",
            },
            // Add more experiences here
        ],
        education: [
            {
                degree: "Bachelor of Science in Computer Science",
                institution: "XYZ University",
                date: "2015-2019",
            },
            // Add more education details here
        ],
        skills: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
        projects: [
            {
                title: "Project 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                technologies: "React.js, Node.js, MongoDB",
            },
            // Add more projects here
        ],
        achievements: ["Outstanding Performance Award 2020", "Certification in XYZ"],
        recommendations: ["John is a highly skilled developer with great attention to detail."],
        email: "john@example.com",
        phone: "123-456-7890",
        socialMediaLinks: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/johnkespitia/" },
            // Add more social media links here
        ]

    };
  return (
      <div  className="container mx-auto p-4">
          <Header name={profileData.name} tagline={profileData.tagline} profilePicture={profileData.profilePicture} />
          <About summary={profileData.summary} />
          <Experience experiences={profileData.experiences}/>
          <Education education={profileData.education} />
          <Skills skills={profileData.skills}/>
          <Projects projects={profileData.projects}/>
          <Achievements achievements={profileData.achievements}/>
          <Recommendations recommendations={profileData.recommendations}/>
          <Contact
              email={profileData.email}
              phone={profileData.phone}
              socialMediaLinks={profileData.socialMediaLinks}
          />
      </div>
  )
}
