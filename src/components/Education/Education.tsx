import School from "./School";

export default function Education() {
  return (
    <section className=" relative mx-auto flex w-full flex-col items-start justify-center gap-4 p-6 md:-left-8 md:flex-row ">
      <h3 className=" select-none text-2xl font-medium tracking-tight text-[#6c7781] md:ml-14 lg:text-3xl ">
        Education
      </h3>
      <article className=" relative  -top-2 flex w-full flex-wrap gap-2 md:w-3/5 ">
        <School
          schoolName="CNED"
          location="Distancielle, FR"
          description="Mise à Niveau en Arts Appliqués, étude de histoire de l'art"
          duration="1 an"
          degree="Prépa"
        />
        <School
          schoolName="Lycée Saint Joseph"
          location="Rodez, FR"
          description="Baccalauréat professionnel Systèmes Electroniques Numériques option Télécommunications et Réseaux"
          duration="3 ans"
          degree="BAC"
        />
      </article>
    </section>
  );
}
