// Recommendations component
import React from "react";
import {Props} from "@/components/profile";

const Recommendations: React.FC<Props> = ({ recommendations }) => (
    <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">Recommendations</h2>
        {recommendations.map((recommendation, index) => (
            <div key={index} className="mb-4">
                <p>{recommendation}</p>
            </div>
        ))}
    </section>
);

export default Recommendations