import {
  LiaChurchSolid,
  LiaListAlt,
  LiaUserFriendsSolid,
} from "react-icons/lia";
import {
  TbBrandGoogleAnalytics,
  TbCalendarEvent,
  TbCalendarUser,
  TbDeviceAnalytics,
  TbHome2,
  TbListCheck,
  TbLogout,
  TbSettings,
} from "react-icons/tb";

export default function SidenavIBC() {
  return (
    <div className="relative flex flex-col gap-1 p-4 h-full uppercase">
      <h1 className="text-white text-5xl text-right">IBC</h1>
      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 bg-blue-300 p-2 rounded-xl group">
        <TbHome2
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-blue-700 text-sm ms-2">home</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <LiaChurchSolid
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">entities</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <LiaUserFriendsSolid
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">people</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <TbCalendarEvent
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">events</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <LiaListAlt
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">church reports</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <TbSettings
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">permissions</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <TbBrandGoogleAnalytics
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">reports</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <TbCalendarUser
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">my events</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <TbDeviceAnalytics
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">feasible studies</span>
      </a>

      <a href="/projects/ibc" title="Home" className="flex items-center gap-1 p-2 rounded-xl group">
        <TbListCheck
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className="text-white text-sm ms-2">surveys</span>
      </a>
      <button className="absolute flex items-center gap-1 uppercase bottom-0 hover:text-[#4be84b] group">
        <TbLogout
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <p className="pl-2 text-white text-sm">LogOut</p>
      </button>
    </div>
  );
}
