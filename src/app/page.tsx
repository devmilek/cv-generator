import CVPreview from "@/components/cv-preview";
import CVForms from "@/components/forms";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <div className="w-full flex">
        <Navigation />
        <CVForms />
      </div>
      <section className="bg-muted h-full w-full">
        <CVPreview />
      </section>
    </div>
  );
}
