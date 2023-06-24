// Experience component
import React from "react";
import {ExperienceProps} from "@/components/profile";

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
    <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        {experiences.map((experience, index) => (
            <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <h4 className="text-lg text-gray-600">{experience.company}</h4>
                <p className="text-gray-700">{experience.description}</p>
            </div>
        ))}
    </section>
);

export default Experience