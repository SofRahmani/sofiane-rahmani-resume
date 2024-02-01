export interface LanguagesProps {
  language: string;
  level: "Langue maternelle" | "Courant" | "Intermédiaire" | "Notions" | "Débutant" | "Technique";
}

export default function Languages({ language, level }: LanguagesProps) {
  return (
    <div className=" w-fit px-4 py-3 hover:bg-slate-100 ">
      <div className=" mb-2 ">
        <h5 className=" text-lg font-medium lg:text-xl ">{language}</h5>
      </div>
      <span className=" text-sm text-[#6c7781] ">{level}</span>
    </div>
  );
}
