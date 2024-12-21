import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container flex min-h-screen items-center justify-center mx-auto p4 bg-yellow-200">
            <div className="box flex flex-col items-center justify-center w-96 h-96 bg-yellow-400 rounded-3xl">
                <h1 className="text-2xl font-mono text-secondary text-center">Atur Tugasmu lebih Mudah dan Rapi dengan</h1>
                <img src="NeatEase.png" alt="NeatEase" className="flex items-center justify-center mr-7 mt-5" />
                <Link to="/List">
                    <button className="bg-yellow-800 text-white p-2 rounded-2xl mt-10">Go to Task List</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;