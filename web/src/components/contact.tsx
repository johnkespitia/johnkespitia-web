// Contact component
import React from "react";
import {Props} from "@/components/profile";

const Contact: React.FC<Props> = ({ email, phone, socialMediaLinks }) => (
    <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Social Media Links:</p>
        <ul className="list-disc ml-4">
            {socialMediaLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.url}>{link.name}</a>
                </li>
            ))}
        </ul>
    </section>
);

export default Contact