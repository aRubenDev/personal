import HeroPortfolio from "../components/portfolio/HeroPortfolio"
import Skills from "../components/portfolio/Skills"
import Contact from "../components/portfolio/Contact"
import SeparatorSections from "../components/widgets/SeparatorSections"

export default function Portfolio() {
    return (
        <section className="flex flex-col items-center min-h-screen p-1 cursor-default bg-[#F5F5F5]">
            <HeroPortfolio />
            <SeparatorSections />
            <Skills />
            <SeparatorSections />
            <Contact />
        </section>
    )
}