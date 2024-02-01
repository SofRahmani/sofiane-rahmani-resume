import Languages from "./Languages";

export default function LanguageSection() {
  return (
    <section className=" relative mx-auto flex w-full flex-col items-start justify-center gap-4 p-6 md:-left-5 md:flex-row ">
      <h3 className=" select-none text-2xl font-medium tracking-tight text-[#6c7781] md:ml-14 lg:text-3xl ">
        Langues
      </h3>
      <article className=" relative  -top-2 flex w-full flex-row flex-wrap gap-2 md:w-3/5 ">
        <Languages language="Français" level="Langue maternelle" />
        <Languages language="Anglais" level="Intermédiaire" />
        <Languages language="Japonais" level="Débutant" />
      </article>
    </section>
  );
}
