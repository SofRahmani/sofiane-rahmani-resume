import Tags from "@/components/Skills/Tags";

export const skillsList = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Tailwind CSS",
  "SASS"
];

export default function SkillsSection() {
  return (
    <section className=" relative mx-auto flex w-full flex-col items-start justify-center gap-4 p-6 md:-left-8 md:flex-row ">
      <h3 className=" select-none text-2xl font-medium tracking-tight text-[#6c7781] md:ml-4 lg:text-3xl ">
        Compétences
      </h3>
      <article className=" relative -right-4 flex w-full flex-wrap gap-3 pt-3 md:w-3/5 ">
        {skillsList.map((skill, index) => (
          <Tags key={index} color="primary" radius="sm" size="md" variant="flat">
            {skill}
          </Tags>
        ))}
      </article>
    </section>
  );
}
