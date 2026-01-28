import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSolution from "./components/ProblemSolution.jsx";
import Features from "./components/Features.jsx";
import Chains from "./components/Chains.jsx";
import Team from "./components/Team.jsx";
import FinalCTA from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProblemSolution />
            <Features />
            <Chains />
            <Team />
            <FinalCTA />
            <Footer />
        </main>
    )
}
export default App
