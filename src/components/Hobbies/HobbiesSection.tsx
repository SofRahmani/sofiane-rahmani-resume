import Tooltips from "@/components/Tooltips/Tooltips";
import Hobbie from "./Hobbie";

export const GamesList = ["World of Warcraft", "The last of us", "God of war"];

export const MusicList = ["Sign by FLOW", "Tsumibito by LiSA", "Dahlia by CHANMINA"];

export const DevList = ["Next JS", "Tailwind CSS", "React"];

export default function HobbiesSection() {
  return (
    <section className=" relative mx-auto flex w-full flex-col items-start justify-center gap-4 p-6 md:-left-5 md:flex-row ">
      <h3 className=" select-none text-2xl font-medium tracking-tight text-[#6c7781] md:ml-14 lg:text-3xl ">
        Intérêts
      </h3>
      <article className=" relative  -top-2 flex w-full flex-col flex-wrap gap-2 md:w-3/5 ">
        <Hobbie hobbie="Jeux vidéo" tags={GamesList} />
        <Hobbie hobbie="Musique" tags={MusicList} />
        <Tooltips content="Oui, J'aime vraiment ça !" placement="right" color="primary">
          <Hobbie hobbie="Développement" tags={DevList} />
        </Tooltips>
      </article>
    </section>
  );
}
