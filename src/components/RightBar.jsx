import { useState } from "react";
import Search from "./Search";
import { Avatar, Description, Label, Separator } from "@heroui/react";
import { CirclePlus } from "@gravity-ui/icons";

const followers = [
  {
    id: "1",
    name: "Bob Dylan",
    email: "bob@heroui.com",
    description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
    img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
  },
  {
    id: "2",
    name: "Fred Freeman",
    email: "fred@heroui.com",
    description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
    img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
  },
  {
    id: "3",
    name: "Martha Sanchez",
    email: "martha@heroui.com",
    description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
    img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
  },
  {
    id: "4",
    name: "Pedro Martinez",
    email: "pedro@heroui.com",
    description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
    img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
  },
];

const uploadedBlogs = [
  {
    id: "1",
    title:
      "Implementing Electronic Health Records: A Case Study of the Generation",
    date: "June 20, 2024",
    img: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-1024x681.jpg",
  },
  {
    id: "2",
    title:
      "cybersecurity Challengers and Solutions: A Case Study of the Palace",
    date: "April 24, 2025",
    img: "https://media.istockphoto.com/id/1299198919/es/foto/fotograf%C3%ADa-a%C3%A9rea-de-la-costa-del-oc%C3%A9ano-acu%C3%A1tico-y-el-hombre-caminando-a-lo-largo-de-la-playa.jpg?s=2048x2048&w=is&k=20&c=RosalKzGfwlUClMr76fcO9BU-fPFlvc2kPkJxBSFeig=",
  },
  {
    id: "3",
    title: "Digital Marketing Transformation at unilever",
    date: "January 28, 2024",
    img: "https://media.istockphoto.com/id/1277467049/es/foto/idyllic-rock-pool.jpg?s=2048x2048&w=is&k=20&c=jMC_lLVjndnlAfN-QbqlCutG9P369HyklKm3TYTWEHw=",
  },
  {
    id: "4",
    title: "The Impact of the Bloackchain on Financial Service",
    date: "July 13, 2026",
    img: "https://media.istockphoto.com/id/2002034452/es/foto/vista-a%C3%A9rea-de-la-escena-costera-con-bah%C3%ADa-de-agua-y-rocas-rojas-al-amanecer.jpg?s=2048x2048&w=is&k=20&c=riJW2_GZYv1piVrQUK3XuBuI-082cffODQ3vpuesE68=",
  },
];

const RightBar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  return (
    <aside className="h-full w-96 bg-white text-black shadow-md flex flex-col px-6 pt-6 z-30 dark:bg-[#121212] border-l border-gray-100 overflow-y-auto dark:border-gray-800">
      <div className="flex flex-col">
        {/* search */}
        <Search
          theme={theme}
          placeholder="Search here..."
          iconPosition="top-[20px] left-[12PX]"
          inputClassName="bg-white text-black border border-gray-200 dark:text-white dark:bg-zinc-800 dark:border-zinc-700"
        />

        {/* recommended you follow */}
        <div className="mx-2 mt-6 mb-2">
          <p className="font-semibold w-full text-lg text-gray-700 dark:text-white">
            Recommended you follow
          </p>
        </div>

        {/* list followers */}
        <ul className="flex flex-col gap-2">
          {followers.map((f) => (
            <li
              key={f.id}
              className="flex items-center justify-between my-2 mx-4 rounded-lg p-1"
            >
              <div className="flex gap-4 items-center">
                <Avatar size="sm">
                  <Avatar.Image alt={f.name} src={f.img} />
                  <Avatar.Fallback>B</Avatar.Fallback>
                </Avatar>
                <div className="flex flex-col min-w-44 max-w-44">
                  <Label>{f.name}</Label>
                  <Description className="line-clamp-2">
                    {f.description}
                  </Description>
                </div>

                <button
                  type="button"
                  className="text-gray-800 cursor-pointer dark:text-gray-200"
                >
                  <CirclePlus height={24} width={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* see more */}
        <div className="mx-2 mt-2 mb-5">
          <a className="w-full cursor-pointer text-sm text-green-500 dark:text-green-300">
            See more people...
          </a>
        </div>

        <Separator />

        {/* recent uploaded blogs */}
        <div className="mx-2 mt-6 mb-2">
          <p className="font-semibold w-full text-lg text-gray-700 dark:text-white">
            Recent uploaded blogs
          </p>
        </div>

        {/* list uploaded blogs */}
        <ul className="flex flex-col gap-2">
          {uploadedBlogs.map((u) => (
            <li
              key={u.id}
              className="flex items-center justify-between my-2 mx-4 rounded-lg p-1"
            >
              <div className="flex gap-4 items-center">
                <Avatar className="rounded-lg" size="lg">
                  <Avatar.Image alt={u.name} src={u.img} />
                </Avatar>
                <div className="flex flex-col">
                  <Label className="line-clamp-2 text-md">{u.title}</Label>
                  <div className="text-sm font-light dark:text-gray-200">
                    {u.date}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightBar;
