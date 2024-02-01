/* eslint-disable react/no-unescaped-entities */
import { GithubIcon, GitlabIcon, LocationIcon, MailIcon } from "@/icons/Icons";
import ProfilPic from "../ProfilPic/ProfilPic";

export default function Profil() {
  return (
    <header className=" mx-auto flex h-full w-screen flex-col items-start justify-center gap-8 bg-[#f3f4f5] p-10 md:flex-row ">
      <ProfilPic
        src="./pp.jpg"
        alt="Photo de profil de Sofiane Rahmani"
        height={168}
        width={168}
        radius="full"
        isZoomed={false}
        shadow="md"
      />
      <section className=" flex w-full flex-col gap-4 md:w-2/5">
        <div className=" flex flex-col ">
          <h1 className=" text-[2.3rem] font-bold leading-9 lg:text-5xl ">Sofiane Rahmani</h1>
          <h2 className=" text-2xl font-medium text-slate-700 lg:text-4xl ">
            Développeur Web Frontend
          </h2>
        </div>

        <p className=" text-justify ">
          Expert logiciel Maiia Gestion au sein de Cegedim Santé. En plus de ma passion pour les
          nouvelles technologies, je suis également un développeur web frontend autodidacte. Fort de
          mes compétences polyvalentes et de mon expérience dans le domaine informatique, je suis
          enthousiaste à l'idée de postuler pour un poste de développeur frontend junior.
          Connaissant les technologies modernes et animé par la volonté constante d'apprendre et
          d'innover, je suis prêt à contribuer activement à vos projets et à apporter une valeur
          ajoutée significative à votre équipe.
        </p>

        <div>
          <div className="flex items-center justify-start gap-2">
            <LocationIcon />
            <p className=" text-slate-700 ">Onet le Château, France</p>
          </div>

          <div className="flex items-center justify-start gap-2">
            <MailIcon />
            <a href="mailto:sofiane.rahmani12@gmail.com?subject=Contact professionnel : [NOM DE VOTRE ENTREPRISE]" className="text-[#0073aa] hover:underline">
              sofiane.rahmani12@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-start gap-2">
            <GithubIcon />
            <a href="https://github.com/SofRahmani" className="text-[#0073aa] hover:underline">
              SofRahmani
            </a>
            <span className="network">(Github)</span>
          </div>

          <div className="flex items-center justify-start gap-2">
            <GitlabIcon />
            <a href="https://gitlab.com/SofianeR" className="text-[#0073aa] hover:underline">
              SofRahmani
            </a>
            <span className="network">(Gitlab)</span>
          </div>
        </div>
      </section>
    </header>
  );
}
