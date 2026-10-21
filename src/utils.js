import { Bell, Envelope, BookOpen, ShieldKeyhole, ArrowRightFromSquare, Gear, CircleLetterA, CircleLetterB, CircleLetterC, Magnifier, Person, PlanetEarth, Books, QuoteOpen, Book } from "@gravity-ui/icons";
import React from "react";

export const formatearTextoEnParrafos = (texto, oracionesPorParrafo = 3) => {
  if (!texto) return [];

  const oraciones = texto.match(/[^.!?]+[.!?]+(\s|$)/g) || [texto];

  if (oraciones.length === 1 && oraciones[0].length > 300) {
    return dividirPorLongitud(oraciones[0], 40); // 40 palabras por párrafo aprox.
  }

  const parrafos = [];
  for (let i = 0; i < oraciones.length; i += oracionesPorParrafo) {
    // Unimos las oraciones del bloque y limpiamos espacios extra
    const parrafo = oraciones
      .slice(i, i + oracionesPorParrafo)
      .join(' ')
      .trim();
    parrafos.push(parrafo);
  }

  return parrafos;
};

const dividirPorLongitud = (texto, palabrasPorParrafo) => {
  const palabras = texto.split(' ');
  const parrafos = [];
  let parrafoActual = [];

  palabras.forEach((palabra, index) => {
    parrafoActual.push(palabra);
    if (parrafoActual.length >= palabrasPorParrafo || index === palabras.length - 1) {
      parrafos.push(parrafoActual.join(' '));
      parrafoActual = [];
    }
  });

  return parrafos;
};

const IconABC = () =>
  React.createElement(
    "span",
    { className: "inline-flex items-center", "aria-label": "ABC" },
    React.createElement(CircleLetterA, { className: "w-4 h-4" }),
    React.createElement(CircleLetterB, { className: "w-4 h-4 -ml-1" }),
    React.createElement(CircleLetterC, { className: "w-4 h-4 -ml-1" })
  );

const SIDEBARITEMS = [
    { id: 1, icon: IconABC, label: "ABC Vida Cristiana", path: "/" },
    { id: 2, icon: BookOpen, label: "Estudios Bíblicos", path: "" },
    { id: 3, icon: PlanetEarth, label: "Estrategias para Evangelizar", path: "" },
    { id: 4, icon: Book, label: "Prédicas y Enseñanzas", path: "" },    
    { id: 5, icon: QuoteOpen, label: "Reflexiones Cristianas", path: "" },
    { id: 6, icon: Books, label: "Materiales de Estudios", path: "" }
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
      description: "Bob es un siervo de Dios comprometido con compartir el amor de Cristo. A través de sus escritos busca inspirar, enseñar y fortalecer la fe de quienes lo leen.",
      imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
    },
    {
      id: "2",
      name: "Kate Freeman",
      email: "kate@heroui.com",
      cargo: "Escritor y profesional",
      description: "Kate es una sierva de Dios comprometido con compartir el amor de Cristo. A través de sus escritos busca inspirar, enseñar y fortalecer la fe de quienes lo leen.",
      imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=4",
    },
    {
      id: "3",
      name: "Martha Sanchez",
      email: "martha@heroui.com",
      cargo: "Director de Alabanzas",
      description: "Martha es una sierva de Dios comprometido con compartir el amor de Cristo. A través de sus escritos busca inspirar, enseñar y fortalecer la fe de quienes lo leen.",
      imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=5",
    },
    {
      id: "4",
      name: "Pedro Martinez",
      email: "pedro@heroui.com",
      cargo: "Maestro de niños",
      description: "Pedro es un siervo de Dios comprometido con compartir el amor de Cristo. A través de sus escritos busca inspirar, enseñar y fortalecer la fe de quienes lo leen.",
      imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=8",
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

  const commentsData = [
    {
      id: 1,
      user: {
        id: 101,
        name: "María González",
        avatar: "https://i.pravatar.cc/150?img=1",
        username: "maria_g",
      },
      createdAt: "2024-06-10T14:32:00Z",
      text: "Beautiful post, spoke to me, I'm impressed. The way you described the sunset reminded me of my hometown. The way you described the sunset reminded me of my hometown. The way you described the sunset reminded me of my hometown. The way you described the sunset reminded me of my hometown.",
      likes: 24,
      isLiked: false,
      replies: [
        {
          id: 11,
          user: {
            id: 102,
            name: "Carlos Ruiz",
            avatar: "https://i.pravatar.cc/150?img=12",
          },
          text: "Totally agree, that part got me too.",
          createdAt: "2023-05-10T15:10:00Z",
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      user: {
        id: 103,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=5",
        username: "johndoe",
      },
      createdAt: "2024-07-09T09:15:00Z",
      text: "Great work! Could you share the resources you used for this project? I'd love to learn more about your process.",
      likes: 12,
      isLiked: true,
      replies: [],
    },
    {
      id: 3,
      user: {
        id: 104,
        name: "Ana Martínez",
        avatar: "https://i.pravatar.cc/150?img=9",
        username: "ana_mtz",
      },
      createdAt: "2026-03-08T22:45:00Z",
      text: "Increíble trabajo 🔥 La atención al detalle es impresionante. ¿Podrías explicar cómo manejaste la parte del dropdown personalizado?",
      likes: 41,
      isLiked: false,
      replies: [
        {
          id: 31,
          user: {
            id: 105,
            name: "Author",
            avatar: "https://i.pravatar.cc/150?img=15",
          },
          text: "@ana_mtz claro! Usé un useEffect con mousedown para detectar clics fuera del ref.",
          createdAt: "2025-09-08T23:02:00Z",
          likes: 8,
        },
      ],
    },
    {
      id: 4,
      user: {
        id: 106,
        name: "Pedro López",
        avatar: "https://i.pravatar.cc/150?img=8",
        username: "pedrol",
      },
      createdAt: "2024-06-07T11:20:00Z",
      text: "Not sure I agree with the approach here, but the execution is clean. Keep it up!",
      likes: 5,
      isLiked: false,
      replies: [],
    },
    {
      id: 5,
      user: {
        id: 107,
        name: "Sofía Ramírez",
        avatar: "https://i.pravatar.cc/150?img=20",
        username: "sofia_rmz",
      },
      createdAt: "2024-05-06T18:55:00Z",
      text: "This is exactly what I needed today. Saving it for later reference 🙌",
      likes: 17,
      isLiked: false,
      replies: [],
    },
  ];

  const uploadedBlogs = [
    {
      id: "1",
      title:
        "Implementing Electronic Health Records: A Case Study of the Generation",
      date: "June 20, 2024",
      image: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-1024x681.jpg",
    },
    {
      id: "2",
      title:
        "cybersecurity Challengers and Solutions: A Case Study of the Palace",
      date: "April 24, 2025",
      image: "https://media.istockphoto.com/id/1299198919/es/foto/fotograf%C3%ADa-a%C3%A9rea-de-la-costa-del-oc%C3%A9ano-acu%C3%A1tico-y-el-hombre-caminando-a-lo-largo-de-la-playa.jpg?s=2048x2048&w=is&k=20&c=RosalKzGfwlUClMr76fcO9BU-fPFlvc2kPkJxBSFeig=",
    },
    {
      id: "3",
      title: "Digital Marketing Transformation at unilever",
      date: "January 28, 2024",
      image: "https://media.istockphoto.com/id/1277467049/es/foto/idyllic-rock-pool.jpg?s=2048x2048&w=is&k=20&c=jMC_lLVjndnlAfN-QbqlCutG9P369HyklKm3TYTWEHw=",
    },
    {
      id: "4",
      title: "The Impact of the Bloackchain on Financial Service",
      date: "July 13, 2026",
      image: "https://media.istockphoto.com/id/2002034452/es/foto/vista-a%C3%A9rea-de-la-escena-costera-con-bah%C3%ADa-de-agua-y-rocas-rojas-al-amanecer.jpg?s=2048x2048&w=is&k=20&c=riJW2_GZYv1piVrQUK3XuBuI-082cffODQ3vpuesE68=",
    },
  ];
  
// Helper para formatear tiempo relativo
const timeAgo = (dateString) => {
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months > 1 ? "s" : ""} ago`;
};

  const post = {
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
    content: "India celebra una victoria histórica en el Mundial de Críquet 2024 tras derrotar a Inglaterra en una final electrizante. Bajo el liderazgo de Rohit Sharma, el equipo mostró una mezcla perfecta de estrategia, pasión y trabajo en equipo. “Esta victoria refleja la fuerza y el espíritu de nuestra nación”, declaró Sharma tras levantar el trofeo. El triunfo consolida a India como potencia mundial del críquet y deja una huella imborrable en la historia del deporte. India celebra una victoria histórica en el Mundial de Críquet 2024 tras derrotar a Inglaterra en una final electrizante. Bajo el liderazgo de Rohit Sharma, el equipo mostró una mezcla perfecta de estrategia, pasión y trabajo en equipo. “Esta victoria refleja la fuerza y el espíritu de nuestra nación”, declaró Sharma tras levantar el trofeo. El triunfo consolida a India como potencia mundial del críquet y deja una huella imborrable en la historia del deporte. India celebra una victoria histórica en el Mundial de Críquet 2024 tras derrotar a Inglaterra en una final electrizante. Bajo el liderazgo de Rohit Sharma, el equipo mostró una mezcla perfecta de estrategia, pasión y trabajo en equipo. “Esta victoria refleja la fuerza y el espíritu de nuestra nación”, declaró Sharma tras levantar el trofeo. El triunfo consolida a India como potencia mundial del críquet y deja una huella imborrable en la historia del deporte. India celebra una victoria histórica en el Mundial de Críquet 2024 tras derrotar a Inglaterra en una final electrizante. Bajo el liderazgo de Rohit Sharma, el equipo mostró una mezcla perfecta de estrategia, pasión y trabajo en equipo. “Esta victoria refleja la fuerza y el espíritu de nuestra nación”, declaró Sharma tras levantar el trofeo. El triunfo consolida a India como potencia mundial del críquet y deja una huella imborrable en la historia del deporte. India celebra una victoria histórica en el Mundial de Críquet 2024 tras derrotar a Inglaterra en una final electrizante. Bajo el liderazgo de Rohit Sharma, el equipo mostró una mezcla perfecta de estrategia, pasión y trabajo en equipo. “Esta victoria refleja la fuerza y el espíritu de nuestra nación”, declaró Sharma tras levantar el trofeo. El triunfo consolida a India como potencia mundial del críquet y deja una huella imborrable en la historia del deporte. ",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXt2PZm9PcAllep4u_ne3gp17c8RdM5CFKjSpUhIq2g&s=10",
    likes: "2.1k",
    comments: 26,
    shares: 35,
    tags: ["Fe", "Deportes", "India"],
  }
  const user = {name: "Peter Crow", email: "user@gmail.com", imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=8", isAdmin: true}
  const userHome = {name: "Martha Sanchez", email: "martha@gmail.com", imageProfile: "https://img.heroui.chat/image/avatar?w=400&h=400&u=5", isAdmin: false}
export { SIDEBARITEMS, NAVBARITEMS, AVATARITEMS, uploadedBlogs, followers, post, user, userHome, posts, commentsData, timeAgo};