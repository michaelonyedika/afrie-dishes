import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

const SideBarApp = () => {
  const [open, setOpen] = useState(true);
  const [submenuItemOpen, setSubmenuItemOpen] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuItemOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icons: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icons: <BsFillImageFill /> },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Project" },
        { title: "Project" },
        { title: "Project" },
      ],
      icons: <BsReverseLayoutTextSidebarReverse />,
    },
    { title: "Analytics", icons: <AiOutlineBarChart /> },
    { title: "Inbox", icons: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icons: <BsPerson /> },
    { title: "Setting", icons: <AiOutlineSetting /> },
    { title: "Logout", icons: <AiOutlineLogout /> },
  ];
  return (
    <div className=" flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl 
            top-9 rounded-full absolute -right-3 border
            border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block 
            float-left mr-2 duration-500 ${open && " rotate-[360deg]"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl 
            duration-300  ${!open && "scale-0"}`}
          >
            Tailwind
          </h1>
        </div>

        <div
          className={`flex items-center bg-light-white rounded-md mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && " hidden"
            }`}
            placeholder="Search"
          />
        </div>

        <ul className=" pt-2">
          {Menus.map((menu, index) => (
            <div key={index}>
              <li
                className={`text-gray-300 text-sm flex 
                items-center gap-x-4 cursor-pointer p-2
                hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className=" text-2xl block float-left">
                  {menu.icons ? menu.icons : <RiDashboardFill />}
                </span>

                <span
                  className={`text-base font-medium flex-1 
                    duration-200 ${!open && "hidden"}`}
                >
                  {menu.title}
                </span>

                {menu.submenu && open && (
                  <BiChevronDown
                    className={`${submenuItemOpen[index] && "rotate-180"}`}
                    onClick={() => toggleSubmenu(index)}
                  />
                )}
              </li>

              {menu.submenu && submenuItemOpen[index] && open && (
                <ul className=" pl-8">
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-gray-300 text-sm 
                      flex items-center gap-x-4 cursor-pointer p-2 
                      px-5 hover:bg-light-white rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default SideBarApp;
