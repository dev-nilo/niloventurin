import { NeoCard } from "../ui/NeoCard";

export const About = () => (
    <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
                    Behind the <span className="text-cyan-500">Code</span>
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    I am a passionate web developer with a love for creating beautiful and functional websites.
                    My journey started with a curiosity about how things work on the internet, which quickly
                    turned into a professional career.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Currently, I focus on the JavaScript ecosystem, specializing in the React stack.
                    I value clean code, accessibility, and smooth user interactions.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                        <h3 className="text-3xl font-bold text-cyan-500">3+</h3>
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Years Experience</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                        <h3 className="text-3xl font-bold text-cyan-500">20+</h3>
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Projects Completed</p>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center">
                <NeoCard className="rotate-3 max-w-sm w-full">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                        alt="Workspace"
                        className="w-full h-auto rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </NeoCard>
            </div>
        </div>
    </div>
);
