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
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SidenavIBC() {
  let { page } = useParams();
  if (page === undefined) {
    page = "home";
  }
  return (
    <div className="relative flex flex-col gap-1 p-4 h-full uppercase items-center lg:items-start">
      <h1 className="text-white text-5xl text-right">IBC</h1>
      
      <Link
        to="/projects/ibc"
        title="Home"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full lg:w-full ${page === "home" && "ibc-active-link-bg"}`}
      >
        <TbHome2
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "home" && "ibc-active-link-text"}`}>home</span>
      </Link>

      <Link
        to="/projects/ibc/entities"
        title="Entities"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "entities" && "ibc-active-link-bg"}`}
      >
        <LiaChurchSolid
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "entities" && "ibc-active-link-text"}`}>entities</span>
      </Link>

      <Link
        to="/projects/ibc/people"
        title="People"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "people" && "ibc-active-link-bg"}`}
      >
        <LiaUserFriendsSolid
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "people" && "ibc-active-link-text"}`}>people</span>
      </Link>

      <Link
        to="/projects/ibc/events"
        title="Events"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "events" && "ibc-active-link-bg"}`}
      >
        <TbCalendarEvent
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "events" && "ibc-active-link-text"}`}>events</span>
      </Link>

      <Link
        to="/projects/ibc/church-reports"
        title="Church reports"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "church-reports" && "ibc-active-link-bg"}`}
      >
        <LiaListAlt
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "church-reports" && "ibc-active-link-text"}`}>church reports</span>
      </Link>

      <Link
        to="/projects/ibc/permissions"
        title="Permissions"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "permissions" && "ibc-active-link-bg"}`}
      >
        <TbSettings
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "permissions" && "ibc-active-link-text"}`}>permissions</span>
      </Link>

      <Link
        to="/projects/ibc/reports"
        title="Reports"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "reports" && "ibc-active-link-bg"}`}
      >
        <TbBrandGoogleAnalytics
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "reports" && "ibc-active-link-text"}`}>reports</span>
      </Link>

      <Link
        to="/projects/ibc/my-events"
        title="My events"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "my-events" && "ibc-active-link-bg"}`}
      >
        <TbCalendarUser
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "my-events" && "ibc-active-link-text"}`}>my events</span>
      </Link>

      <Link
        to="/projects/ibc/feasible-studies"
        title="Feasible studies"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "feasible-studies" && "ibc-active-link-bg"}`}
      >
        <TbDeviceAnalytics
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "feasible-studies" && "ibc-active-link-text"}`}>feasible studies</span>
      </Link>

      <Link
        to="/projects/ibc/surveys"
        title="Surveys"
        className={`flex items-center gap-1 p-2 rounded-xl group lg:w-full ${page === "surveys" && "ibc-active-link-bg"}`}
      >
        <TbListCheck
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <span className={`text-white text-sm ms-2 hidden lg:inline-block ${page === "surveys" && "ibc-active-link-text"}`}>surveys</span>
      </Link>

      <button className="absolute flex items-center gap-1 uppercase bottom-0 hover:text-[#4be84b] group">
        <TbLogout
          className="text-blue-300 text-2xl border-2 border-blue-300 p-[6px] rounded-lg bg-blue-700 transition-all ease-in-out group-hover:scale-110"
          size={35}
        />
        <p className="pl-2 text-white text-sm hidden lg:inline-block">LogOut</p>
      </button>
    </div>
  );
}
