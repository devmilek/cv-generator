import CVPreview from "@/components/cv-preview";
import BasicsForm from "@/components/forms/basics-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <ScrollArea className="h-screen w-full">
        <section className="p-10 space-y-8">
          {/* <h2 className="text-center text-2xl font-semibold">Portfolio name</h2> */}
          <BasicsForm />
          {/* <ExperienceForm /> */}
          {/* <EducationForm /> */}
        </section>
      </ScrollArea>
      <section className="bg-muted h-full w-full">
        <CVPreview />
      </section>
    </div>
  );
}
