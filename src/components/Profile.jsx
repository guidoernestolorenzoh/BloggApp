import { ArrowRightFromSquare, Gear, Person } from "@gravity-ui/icons"
import { Avatar, Dropdown, Label } from "@heroui/react"


const Profile = ({user, theme}) => {   

  return (
    <Dropdown>
            <Dropdown.Trigger className="rounded-full">
              <Avatar>
                <Avatar.Image
                  alt={user.name}
                  src={user?.imageProfile}
                />
                <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <div
                className={`px-3 pt-3 pb-1 `}
              >
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image
                      alt="Jane"
                      src={user.imageProfile}
                    />
                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                  </Avatar>
                  <div
                    className={`flex flex-col gap-0 `}
                  >
                    <p className="text-sm leading-5 font-medium">{user.name}</p>
                    <p className="text-xs leading-none text-muted">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>
              <Dropdown.Menu
                
              >
                <Dropdown.Item id="profile" textValue="Profile">
                  <div
                    className={`flex w-full items-center justify-between gap-2 `}
                  >
                    <Label
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-800"
                      }
                    >
                      Profile
                    </Label>
                    <Person className="size-3.5 text-muted" />
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id="settings" textValue="Settings">
                  <div
                    className={`flex w-full items-center justify-between gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}
                  >
                    <Label
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-800"
                      }
                    >
                      Settings
                    </Label>
                    <Gear className="size-3.5 text-muted" />
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                  <div className="flex w-full items-center justify-between gap-2">
                    <Label>Log Out</Label>
                    <ArrowRightFromSquare className="size-3.5 text-danger" />
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
  )
}

export default Profile