export interface SchoolProps {
  schoolName: string;
  duration: string;
  description: string;
  location: string;
  degree: string;
}

export default function School({
  schoolName,
  duration,
  description,
  location,
  degree
}: SchoolProps) {
  return (
    <div className=" w-full px-4 py-3 hover:bg-slate-100 ">
      <div className=" mb-2 ">
        <h5 className=" text-lg font-medium lg:text-xl ">{schoolName}</h5>
        <div className=" text-sm text-[#6c7781] ">
          <div className=" flex flex-row gap-1 ">
            <span>{duration}</span>
          </div>
          <p>{location}</p>
        </div>
      </div>
      <p className=" mb-2 text-justify ">{description}</p>
      <span className=" text-sm text-[#6c7781] ">Niveau : {degree}</span>
    </div>
  );
}
