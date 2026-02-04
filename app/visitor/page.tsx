import BioHero from "@/app/components/bio/BioHero";
import GamesText from "@/app/components/bio/GamesText";
import LoadingIntro from "@/app/components/ui/LoadingIntro";
import Glass from "@/app/components/ui/Glass";

export default function VisitorPage() {
  return (
    <>
      <LoadingIntro />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <Glass>
        <div className="w-full max-w-3xl space-y-24">
          <BioHero />
          <GamesText />
        </div>
        </Glass>
      </main>
    </>
  );
}
