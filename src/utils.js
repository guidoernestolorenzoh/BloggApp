import { Bell, Envelope, BookOpen, ShieldKeyhole, ArrowRightFromSquare, Gear, House, Magnifier, Person } from "@gravity-ui/icons";

const SIDEBARITEMS = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" }
];

const NAVBARITEMS = [
    { id: 1, label: "Authors",  path: "/authors" },
    { id: 2, label: "About Us",  path: "/about-us" },
    { id: 3, label: "Contact Us", path: "/contact-us" }    
];

const AVATARITEMS = [
    { id: 1, icon: BookOpen, label: "My Articles" },
    { id: 2, icon: ShieldKeyhole, label: "Admin Panel" },
    { id: 3, icon: ArrowRightFromSquare, label: "Log out" }   
];
export { SIDEBARITEMS, NAVBARITEMS, AVATARITEMS};