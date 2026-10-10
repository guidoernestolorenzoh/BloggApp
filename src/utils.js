import { Bell, Envelope, BookOpen, ShieldKeyhole, ArrowRightFromSquare, Gear, House, Magnifier, Person } from "@gravity-ui/icons";

const SIDEBARITEMS = [
    { id: 1, icon: House, label: "Home", path: "/" },
    { id: 2, icon: Magnifier, label: "Search", path: "" },
    { id: 3, icon: Bell, label: "Notifications", path: "" },
    { id: 4, icon: Envelope, label: "Messages", path: "" },
    { id: 5, icon: Person, label: "Profile", path: "" },
    { id: 6, icon: Gear, label: "Settings", path: "" }
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

const followers = [
    {
      id: "1",
      name: "Bob Dylan",
      email: "bob@heroui.com",
      cargo: "Maestro de Educación Cristiana",
      description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
      img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
    },
    {
      id: "2",
      name: "Kate Freeman",
      email: "kate@heroui.com",
      cargo: "Escritor y profesional",
      description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
      img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=4",
    },
    {
      id: "3",
      name: "Martha Sanchez",
      email: "martha@heroui.com",
      cargo: "Director de Alabanzas",
      description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
      img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=5",
    },
    {
      id: "4",
      name: "Pedro Martinez",
      email: "pedro@heroui.com",
      cargo: "Maestro de niños",
      description: "Lorenm ipsum Lorenm ipsumLorenm ipsumLorenm ipsumLorenm",
      img: "https://img.heroui.chat/image/avatar?w=400&h=400&u=8",
    }
  ];

  const posts = [
    {
      id: "post-1",
      author: {
        id: "u1",
        name: "Ana Gutiérrez",
        email: "ana@heroui.com",
        imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=11",
        isAdmin: false,
        role: "Editora",
      },
      timeAgo: "5 days ago",
      title: "Champions Again: India's Glorious World Cup!!",
      excerpt:
        "La India vuelve a coronarse campeona del mundo. Millones de aficionados celebran, los estadios se llenan de gritos y el nombre del equipo queda escrito una vez más en la historia del críquet. Pero más allá del trofeo, esta victoria nos deja lecciones que también hablan a nuestro corazón cristiano.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXt2PZm9PcAllep4u_ne3gp17c8RdM5CFKjSpUhIq2g&s=10",
      likes: "2.1k",
      comments: 26,
      shares: 35,
      tags: ["Fe", "Deportes", "India"],
    },
    {
      id: "post-2",
      author: {
        id: "u2",
        name: "Daniel Rojas",
        email: "daniel@heroui.com",
        imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=12",
        isAdmin: true,
        role: "Pastor",
      },
      timeAgo: "2 days ago",
      title: "Cinco minutos con Dios antes del celular",
      excerpt:
        "¿Cuántas veces revisamos el teléfono antes de decirle buenos días a nuestro Padre? No se trata de reglas, se trata de amor. Te comparto un hábito simple que transformó mis mañanas: cinco minutos de silencio y oración antes de abrir cualquier pantalla.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6Ypt5B_1m2yRRKLQTkF3Cd073DrUFTIdWygJdZsQcuUAgS8YjYiGfnA&s=10",
      likes: 842,
      comments: 57,
      shares: 120,
      tags: ["Devocional", "Oración", "Hábitos"],
    },
    {
      id: "post-3",
      author: {
        id: "u3",
        name: "Sofía Méndez",
        email: "sofia@heroui.com",
        imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=13",
        isAdmin: false,
        role: "Autora invitada",
      },
      timeAgo: "1 week ago",
      title: "Cuando el silencio de Dios no es ausencia",
      excerpt:
        "Hay temporadas en las que parece que Dios no responde. Pero el silencio no siempre es distancia: a veces es preparación. Un artículo honesto sobre esperar, dudar y seguir confiando en medio de la incertidumbre.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7EwLugnwnQEfQxd11aZB39JgTW-McGZymXkGPS4gNrwGvzZ2ZEi59OI&s=10",
      likes: "1.34k",
      comments: 98,
      shares: 76,
      tags: ["Fe", "Esperanza", "Reflexión"],
    },
    {
      id: "post-4",
      author: {
        id: "u4",
        name: "Lucia Fernandez",
        email: "lucia@heroui.com",
        imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=14",
        isAdmin: false,
        role: "Comunidad",
      },
      timeAgo: "3 hours ago",
      title: "Bienvenido a la comunidad: por dónde empezar",
      excerpt:
        "Si acabas de unirte, este es tu lugar. Aquí encontrarás devocionales, historias reales, música, y espacios para compartir tus preguntas sin miedo. No necesitas tener todo resuelto para pertenecer.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqx1PwaucLE37llGqQF4QzQjWxt4m_DK6qQvEflGPNRZeCs_iLXH6dxDM&s=10",
      likes: 456,
      comments: 41,
      shares: 18,
      tags: ["Comunidad", "Bienvenida"],
    },
  ];

  const user = {name: "Peter Crow", email: "user@gmail.com", imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=9", isAdmin: true}
  const userHome = {name: "Martha Sanchez", email: "martha@gmail.com", imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=5", isAdmin: false}
export { SIDEBARITEMS, NAVBARITEMS, AVATARITEMS, followers, user, userHome, posts};