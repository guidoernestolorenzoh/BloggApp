import Search from "./Search";
import { useTheme } from "../store/useThemeStore";
import {
  Description,
  Label,
  Separator,
  Button,
  Tooltip,
  Chip,
} from "@heroui/react";
import { CirclePlus } from "@gravity-ui/icons";
import { followers, uploadedBlogs } from "../utils";
import Profile from "./Profile";

const RightBar = () => {
  const { theme } = useTheme();
  return (
    <aside className="h-full w-96 bg-white shrink-0 text-black shadow-md flex flex-col px-6 pt-6 z-30 dark:bg-[#121212] border-l border-gray-100 overflow-y-auto min-h-0 dark:border-gray-800">
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
                <Profile
                  user={f.imageProfile}
                  src={f.imageProfile}
                  isOpen={false}
                />

                <div className="flex flex-col min-w-44 max-w-44">
                  <Label>{f.name}</Label>
                  <Description className="line-clamp-2">
                    {f.description}
                  </Description>
                </div>

                <Tooltip delay={0}>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-gray-800 cursor-pointer dark:text-gray-200"
                  >
                    <CirclePlus className="size-6" />
                  </Button>
                  <Tooltip.Content showArrow>
                    <Tooltip.Arrow />
                    <p className="m-1">Follow</p>
                  </Tooltip.Content>
                </Tooltip>
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
                <Profile
                  className="rounded-lg"
                  size="lg"
                  alt={u.name}
                  user={u}
                  src={u.image}
                />

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
        {/* see more */}
        <div className="mx-2 mt-2 mb-5">
          <a className="w-full cursor-pointer text-sm text-green-500 dark:text-green-300">
            See more blogs...
          </a>
        </div>

        <Separator />

        {/* recommended topics */}
        <div className="mx-2 mt-6 mb-2">
          <p className="font-semibold w-full text-lg text-gray-700 dark:text-white">
            Recomended topics
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Chip variant="primary" size="lg" className="cursor-pointer">
            <Chip.Label>Predicas</Chip.Label>
          </Chip>
          <Chip variant="primary" size="lg" className="cursor-pointer">
            <Chip.Label>Enseñanzas</Chip.Label>
          </Chip>
          <Chip variant="primary" size="lg" className="cursor-pointer">
            <Chip.Label>ABC de la vida cristiana</Chip.Label>
          </Chip>
        </div>
      </div>
    </aside>
  );
};

export default RightBar;
