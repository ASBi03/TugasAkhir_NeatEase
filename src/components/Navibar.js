import React from "react";
import { Link } from "react-router-dom";

const Navibar = () => {
    return (
        <nav className="container mx-auto w-screen h-10 flex justify-between items-center bg-yellow-400">
            <div className="ml-5">
                <Link to="/"><img src="NeatEase.png" alt="NeatEase" w-4 /></Link>
            </div>
        </nav>
    );
};

export default Navibar;