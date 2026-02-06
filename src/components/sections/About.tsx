import { NeoCard } from "../ui/NeoCard";

export const About = () => (
    <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
                    Behind the <span className="text-cyan-500">Code</span>
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Over 3 years of experience in the JavaScript/TypeScript ecosystem, I specialize in developing end-to-end web applications, focusing on performance, clean architecture, and responsive interfaces. I also bring a solid 5-year background in the TOTVS ecosystem (RM and Protheus), managing ERP implementation, system maintenance, access control, and internal processes.
                </p>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">Frontend</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Interface development with React and Next.js, utilizing TailwindCSS and Figma. Focus on UI/UX, accessibility, and performance optimization (Lighthouse/SEO).
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">Backend</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Building scalable REST APIs with Node.js. Implementation of secure authentication, MVC architecture and PostgreSQL database management (SQL, Migrations).
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">Quality & DevOps</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            TDD practices with Jest and CI/CD pipeline configuration (GitHub Actions). Experience with Docker for containerization and serverless deployment (Vercel).
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                        <h3 className="text-3xl font-bold text-cyan-500">3+</h3>
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Years Experience</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                        <h3 className="text-3xl font-bold text-cyan-500">10+</h3>
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
