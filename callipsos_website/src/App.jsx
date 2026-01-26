import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSolution from "./components/ProblemSolution.jsx";
import Features from "./components/Features.jsx";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProblemSolution />
            <Features />
        </main>
    )
}
export default App
