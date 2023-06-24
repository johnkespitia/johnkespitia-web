import React from "react";
import {Props} from "@/components/profile";

const Projects: React.FC<Props> =  ({ projects }) => (
    <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {projects.map((project, index) => (
            <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-gray-700">Technologies used: {project.technologies}</p>
            </div>
        ))}
    </section>
);

export default Projects