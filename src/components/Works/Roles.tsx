export interface RolesProps {
  role: string;
  startDate: string;
  startDateTime: string;
  endDate?: string;
  endDateTime?: string;
  location: string;
  description: string;
  skills: string[];
  duration?: string;
}

export default function Roles({
  role,
  startDate,
  startDateTime,
  endDate,
  endDateTime,
  location,
  description,
  skills,
  duration
}: RolesProps) {
  return (
    <div className=" p-4 hover:bg-slate-100 w-full ">
      <div className=" mb-2 ">
        <h5 className=" text-lg font-medium lg:text-xl ">{role}</h5>
        <div className=" text-sm text-[#6c7781] ">
          <div className=" flex flex-row gap-1 ">
            <time dateTime={startDateTime}>{startDate}</time>
            <span>–</span>
            <time dateTime={endDateTime}>{endDate}</time>
            <span>{duration}</span>
          </div>
          <p>{location}</p>
        </div>
      </div>
      <p className=" mb-2 text-justify ">{description}</p>
      <ul>
        {skills.map((task, index) => (
          <li key={index}>
            <p>
              <span className=" text-[#6c7781] ">•</span> {task}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
