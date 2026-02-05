import TechStack from "@/app/client/TechStack";
import Terminal from "@/app/client/Terminal";
import Contact from "@/app/client/Contact";
import Hero from "@/app/components/sections/client/Hero";

export default function ClientPage() {
  return (
    <main className="client-layout min-h-screen px-6 py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-light tracking-tight text-center">
        Frontend Developer
      </h1>
      
      <p className="mt-4 text-white/60 text-center max-w-xl">
        Clean interfaces. Thoughtful UX. Modern frontend architecture.
      </p>
      <Hero />
      <TechStack />
      <Terminal />
      <Contact />
    </main>
  );
}
