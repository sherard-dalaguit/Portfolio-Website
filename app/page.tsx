import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={[
                    {name: "About", link: "/#about"},
                    {name: "Projects", link: "/#projects"},
                    {name: "Contact", link: "/#contact"},
                ]} />
                <Hero />
                <Grid />
                <Projects />
            </div>
        </main>
    );
}
