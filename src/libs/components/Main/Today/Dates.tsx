export default function Dates() {
  return (
    <div className="flex items-center justify-between space-x-2 sm:space-x-3 md:space-x-3">
      <Date day="Mon" date={13} active={false} />
      <Date day="Tue" date={14} active={false} />
      <Date day="Wed" date={15} active={false} />
      <Date day="Thu" date={16} active={true} />
      <Date day="Fri" date={17} active={false} />
      <Date day="Sat" date={18} active={false} />
      <Date day="Sun" date={19} active={false} />
    </div>
  );
}

function Date(props: { day: string; date: number; active: boolean }) {
  return (
    <div className="flex flex-col items-center w-full">
      <p
        className={`px-2 py-2 ${
          props.active ? "bg-red-700" : "bg-zinc-900"
        } rounded-t-2xl w-full  text-center text-sm`}>
        {props.day}
      </p>
      <p
        className={`text-md sm:text-2xl ${
          props.active ? "bg-red-900" : "bg-zinc-800"
        } text-center w-full py-1 rounded-b-xl`}>
        {props.date}
      </p>
    </div>
  );
}
