
import { Avatar, Dropdown, Label, cn } from "@heroui/react";
import { AVATARITEMS } from "../utils";


const Profile = ({ user, theme, isOpen }) => {
  const isAdmin = user?.isAdmin;
  const items = AVATARITEMS.filter((prev) => (prev.label !== "Admin Panel" || isAdmin));

  const getColor = (a) => {
    if (a.isAdmin  || a.label === "Admin Panel" && isAdmin) return "text-orange-300";
    if (a.label === "Log out") return "text-red-500";
     return theme === "dark" ? "text-gray-300" : "text-gray-800"    
  }

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image alt={user?.name} src={user?.imageProfile} />
          <Avatar.Fallback className="bg-blue-400 text-white" delayMs={600}>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover isOpen={isOpen}>
        <div className={`px-3 pt-3 pb-1 `}>
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image alt="Jane" src={user?.imageProfile} />
              <Avatar.Fallback className="bg-blue-400 text-white" delayMs={600}>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <div className={`flex flex-col gap-0 `}>
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          {items.map((a) => (
            <Dropdown.Item id={a.id} key={a.id} textValue={a.label} className={cn(getColor(a))}>
              <div
                className={`flex w-full items-center justify-between gap-2 `}
              >
                <Label
                  className={cn(getColor(a))}
                >
                  {a.label}
                </Label>
                {a.icon && typeof a.icon === "function" && <a.icon />}
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default Profile;