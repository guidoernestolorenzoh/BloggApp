import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoThemeDark from "../assets/logo_oscuro.png";
import {
  Bell,
  Moon,
  Sun,
  PencilToSquare  
} from "@gravity-ui/icons";
import {
  Badge,
  Button,
  Dropdown,  
  Separator,
  Switch,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { NAVBARITEMS } from "../utils";
import Search from "./Search";
import Profile from "./Profile";
import { useTheme } from "../store/useThemeStore";
import CreatePostModal from "./Modals/CreatePostModal";

const languages = [
  { id: "es", label: "ES" },
  { id: "en", label: "EN" },
];

const icons = {
  darkMode: {
    off: Moon,
    on: Sun,
    selectedControlClass: "",
  },
};

const ACTIVE_COLOR = "after:content-[''] after:block after:h-0.5 after:bg-blue-400 after:w-full after:mt-1";

const Navbar = () => {
  const [language, setLanguage] = useState("es");
  //const [search, setSearch] = useState("");
  

  const {theme, toggleDarkMode} = useTheme();
  const [active, setActive] = useState(null);

  const user = {name: "Peter Crow", email: "user@gmail.com", imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=9", isAdmin: true}
  
  //const user = null;

  return (
    <nav
      className={
        "top-0 z-50 border-b sticky border shadow-sm " +
        (theme === "dark"
          ? "bg-zinc-800 border-b-blue-200/10"
          : "bg-white border-gray-200")
      }
      style={{
        transition: "background-color 0.2s, border-color 0.2s",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          <img
            src={theme === "light" ? Logo : LogoThemeDark}
            alt="Logo"
            width={50}
            height={50}
          />
          <p
            className={`font-extrabold text-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}
          >
            Filadelfia Blog
          </p>
        </Link>

        {/* search */}
        <Search theme={theme} iconPosition="top-1/2 left-2.5" className="bg-zinc-200/50 hover:bg-zinc-400/20 text-black placeholder:text-zinc-600 focus:bg-zinc-700/30 dark:text-white dark:bg-zinc-800 dark:border-zinc-700" placeholder="Search here..."/>
        
        {/* navs */}

        <div
          className={`hidden md:flex items-center gap-6 text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {NAVBARITEMS.map((item, index) => {
            const isActive = active === index;
            return (
            <Link
              key={item.label}
              className={`relative after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } ${isActive ? ACTIVE_COLOR : "text-foreground"}`}
              onClick={()=> setActive(index)}
              to={item.path}
            >
              {item.label}
            </Link>)
          })}
        </div>

        {/* language */}
        <div className="text-small flex h-5 items-center space-x-4">
          <Dropdown>
            <Dropdown.Trigger
              aria-label="Seleccionar idioma"
              className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                theme === "dark"
                  ? "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              } shadow-none outline-none`}
            >
              <Icon icon="material-symbols:translate" className="size-5" />
            </Dropdown.Trigger>
            <Dropdown.Popover
              placement="bottom end"
              className={`w-16 min-w-16 max-w-16 rounded-xl md:min-w-16!
                ${theme === "dark" ? "bg-zinc-800" : "bg-white"}`}
            >
              <Dropdown.Menu
                aria-label="Idioma"
                selectionMode="single"
                selectedKeys={new Set([language])}
                onSelectionChange={(keys) => {
                  const next = keys.values().next().value;
                  if (next) setLanguage(String(next));
                }}
              >
                {languages.map((lang) => (
                  <Dropdown.Item
                    key={lang.id}
                    id={lang.id}
                    textValue={lang.label}
                    className={`justify-center px-0 text-center text-sm ${
                      theme === "dark"
                        ? "text-gray-300 bg-zinc-800"
                        : "text-gray-800 bg-white"
                    }`}
                  >
                    {lang.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
          {/* switch theme */}
          <div className="flex mt-2 ml-auto">
            {Object.entries(icons).map(([key, value]) => (
              <Switch
                key={key}
                defaultSelected={theme === "dark"}
                onChange={toggleDarkMode}
                aria-label={key}
                size="md"
              >
                {({ isSelected }) => (
                  <Switch.Content>
                    <Switch.Control
                      className={isSelected ? value.selectedControlClass : ""}
                    >
                      <Switch.Thumb>
                        <Switch.Icon>                          
                          {isSelected ? (
                            <value.off className="size-3 text-inherit opacity-100" />
                          ) : (
                            <value.on className="size-3 text-inherit opacity-70" />
                          )}
                        </Switch.Icon>
                      </Switch.Thumb>
                    </Switch.Control>
                  </Switch.Content>
                )}
              </Switch>
            ))}
          </div>
          <Separator orientation="vertical" variant="secondary" />
          {/* notifications */}
          {user ? <>
          <div
            className={
              theme === "dark" ? "relative text-white" : "relative text-black"
            }
          >
            <Badge.Anchor>
              <Bell className="cursor-pointer" />
              <Badge
                color="danger"
                size="sm"
                className="absolute -top-0.5 -right-0.5"
              >
                5
              </Badge>
            </Badge.Anchor>
          </div>
          
          {/* profile */}
          <Profile theme={theme} user={user} className="cursor-pointer"/>

          {/* write */}
          <CreatePostModal 
            nameButton="Write" 
            icon={<PencilToSquare />}
            headerTitle="Create Post"
            className={`px-3 py-0.5 text-lg cursor-pointer rounded-lg gap-1 flex items-center bg-transparent ${theme === 'dark' ? 'text-gray-300' : 'text-black' }`}/>
          </> : (
            <Button onClick={()=> window.location.href = "/login"} className="mr-0 text-white dark:bg-blue-400">
              Sign In/ Sign Up
            </Button>
          )}          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;