import { BsThreeDots } from "react-icons/bs";
import workImg from "../assets/images/icon-work.svg";
import userImg from "../assets/images/image-jeremy.png";
import data from "../assets/data.json";

export default function Home() {
  return (
    <div className="min-h-screen text-white w-full bg-very-dark-blue flex flex-col justify-center items-center">
      <main className="w-[800px] grid grid-cols-4 gap-5">
        <div className="bg-dark-blue row-span-2 rounded-xl overflow-hidden flex flex-col items-start">
          <div className="bg-blue px-6 pt-4 pb-8 flex flex-col gap-8 rounded-xl">
            <img src="userImg" alt="User"
              className="ring-2 h-16 w-16 rounded-full ring-white" />
            <p>Report for</p>
            <h2 className="text-3xl">Jeremy Robson</h2>
          </div>
          <div className="flex flex-col gap-4 justify-between text-pale-blue text-sm font-thin px-6 py-4">
            <button>daily</button>
            <button>daily</button>
            <button>daily</button>

          </div>
        </div>

        {data.map((d, i) => {
          <TimeCard
            key={i}
            title={d.title}
            current={d.timeframes.weekly.current}
            previous={d.timeframes.weekly.previous}
          />
        })}
      </main>
    </div>
  )
}

type TimeCardType = {
  title: string;
  current: number;
  previous: number;
};

function TimeCard({ current = 32, previous = 32, title }: TimeCardType) {
  return (
    <div className=" pt-10 bg-orange-400 overflow-hidden rounded-lg relative">
      <img src={workImg} className="absolute z-10 h-[70px] w-auto top-[-10px] right-3" />
      <div className="bg-dark-blue rounded-t-lg py-6 px-6 flex flex-col gap-8">
        <div className="flex justify-between w-full">
          <p>{title}</p>
          <BsThreeDots />
        </div>
        <section className="flex flex-col gap-1">
          <h2 className="text-5xl font-thin">{current}hrs</h2>
          <p className="text-pale-blue text-xs">Last week - {previous}hrs</p>
        </section>

      </div>
    </div>
  )
}