import CVPreview from "@/components/cv-preview";
import BasicsForm from "@/components/forms/basics-form";
import ExperienceForm from "@/components/forms/experience-form";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <section className="p-6 w-2xl space-y-8">
        <h2 className="text-center text-2xl font-semibold">Portfolio name</h2>
        <BasicsForm />
        <ExperienceForm />
      </section>
      <section className="bg-muted h-full w-full">
        <CVPreview />
      </section>
    </div>
  );
}
