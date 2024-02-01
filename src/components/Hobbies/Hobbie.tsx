import Tags from "@/components/Skills/Tags";

export interface HobbieProps {
  hobbie: string;
  tags: string[];
}

export default function Hobbie({ hobbie, tags }: HobbieProps) {
  return (
    <div className=" w-fit px-4 py-3 hover:bg-slate-100 ">
      <div className=" mb-2 ">
        <h5 className=" text-lg font-medium lg:text-xl ">{hobbie}</h5>
      </div>
      <div className=" flex flex-wrap gap-2 ">
        {tags.map((tag, index) => (
          <Tags key={index} color="primary" radius="sm" size="md" variant="flat">
            {tag}
          </Tags>
        ))}
      </div>
    </div>
  );
}
