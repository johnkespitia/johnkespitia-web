// Header component
import {Props} from "@/components/profile";
import React from "react";

const Header: React.FC<Props> = ({ name, tagline, profilePicture, altProfilePicture }) => (
    <header className="bg-gray-200 py-8 text-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-xl text-gray-600">{tagline}</h2>
        <img className="rounded-full w-32 h-32 mx-auto mt-4" src={profilePicture} alt={altProfilePicture} />
    </header>
);

export default Header