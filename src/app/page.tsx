import Education from "@/components/Education/Education";
import HobbiesSection from "@/components/Hobbies/HobbiesSection";
import LanguageSection from "@/components/Languages/LanguageSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import Works from "@/components/Works/Works";

export default function Resume() {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 pb-4">
      <SkillsSection />
      <Works />
      <Education />
      <LanguageSection />
      <HobbiesSection />
    </div>
  );
}
