import images from "../assets/images";

// --------------------------------------------------------------------

const linksNav = [
  {
    name: "navbar.links.home",
    toPage: "/",
    icons: <i className="bx bxs-home"></i>,
  },
  {
    name: "navbar.links.information",
    toPage: "/information",
    icons: <i className="bx bxs-user"></i>,
  },
  {
    name: "navbar.links.projects",
    toPage: "/works",
    icons: <i className="bx bxs-briefcase"></i>,
  },
  {
    name: "navbar.links.contact",
    toPage: "/contact-me",
    icons: <i className="bx bxs-phone"></i>,
  },
];

const linksNetwork = [
  {
    name: "Github",
    to: "https://github.com/Diego-Nieves26",
    title: "Diego-Nieves26",
    color: "#24292f",
    info: "Github de Diego Nieves",
    icons: <i className="bx bxl-github"></i>,
  },
  {
    name: "linkedin",
    to: "www.linkedin.com/in/Diego-Nieves-DLC",
    title: "Diego Nieves",
    color: "#0073b1",
    info: "Linkedin de Diego Nieves",
    icons: <i className="bx bxl-linkedin-square"></i>,
  },
  {
    name: "Discord",
    to: "https://discord.com/users/DN#7239",
    title: "Diego Nieves#7239",
    color: "#5865f2",
    info: "Discord de Diego Nieves",
    icons: <i className="bx bxl-discord-alt"></i>,
  },
];

const emails = [
  "nieves.de.la.cruz2020@gmail.com",
  "nieves.diego0426@gmail.com",
];

const sentencesData = [
  {
    src: "sentences.one",
    icon: images.Sentence01,
  },
  {
    src: "sentences.two",
    icon: images.Sentence02,
  },
  {
    src: "sentences.three",
    icon: images.Sentence03,
  },
  {
    src: "sentences.four",
    icon: images.Sentence04,
  },
];

const ramdomPhrase = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const education = [
  {
    date: "NOV_2022 - ENE_2023",
    institution: "Certus",
    typeInstitution: "Instituto - Perú",
    description: "information.education.certus",
  },
  {
    date: "FEB_2022 - NOV_2022",
    institution: "Academlo",
    typeInstitution: "Bootcamp - Mexico",
    description: "information.education.academlo",
  },
  {
    date: "AGO_2021 - ...",
    institution: "Udemy - Youtube - Google - ...",
    typeInstitution: "Autodidacta",
    description: "information.education.autodidact",
  },
];

const skills = [
  {
    identificador: "acc1",
    title: "one",
    icon: <i className="bx bx-code-alt"></i>,
    skills: [
      {
        icon: <i className="bx bxl-html5"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-css3"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-redux"></i>,
        level: "three",
      },
      {
        icon: <i className="bx bxl-bootstrap"></i>,
        level: "four",
      },
      {
        icon: <i className="bx bxl-tailwind-css"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-vuejs"></i>,
        level: "five",
      },
      {
        icon: <i className="bx bxl-flutter"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-sass"></i>,
        level: "five",
      },
    ],
  },
  {
    identificador: "acc2",
    title: "two",
    icon: <i className="bx bx-server"></i>,
    skills: [
      {
        icon: <i className="bx bxl-nodejs"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-postgresql"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-mongodb"></i>,
        level: "three",
      },
      {
        icon: <i className="bx bxl-python"></i>,
        level: "three",
      },
    ],
  },
  {
    identificador: "acc3",
    title: "three",
    icon: <i className="bx bx-wrench"></i>,
    skills: [
      {
        icon: <i className="bx bxl-git"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-heroku"></i>,
        level: "four",
      },
      {
        icon: <i className="bx bxl-visual-studio"></i>,
        level: "two",
      },
      {
        icon: <i className="bx bxl-github"></i>,
        level: "two",
      },
    ],
  },
];

const projectsData = [
  {
    title: "Clon del motor de busqueda Google",
    img: images.Project01,
    date: "10/06/2021",
    description:
      "Aplicacion que clona la pagina principal del motor de busqueda de Google.",
    category: "Front",
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
    ],
  },
  {
    title: "Generador de contraseña",
    img: images.Project02,
    date: "22/05/2021",
    description:
      "Aplicacion que crea contraseñas aleatorias con las diversas caracteristicas que seleccione el usuario.",
    category: "Front",
    technologies: [
      ,
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
    ],
  },
  {
    title: "Daffy Store",
    img: images.Project03,
    date: "28/06/2021",
    description:
      "Tienda de productos relacionados con el anime 'Naruto'. Simula un proceso básico de comprar en una tienda online.",
    category: "Front",
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
    ],
  },
  {
    title: "Selector de color de imagen",
    img: images.Project04,
    date: "27/06/2021",
    description:
      "Esta aplicacion ayuda a encontrar colores exactos de una imagen.",
    category: "Front",
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
    ],
  },
  {
    title: "Simons Web",
    img: images.Project05,
    date: "28/06/2021",
    description:
      "Clon version web del popular juego Simon Says que es un juego de memoria atravez de colores.",
    category: "Front",
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
    ],
  },
  {
    title: "Whatsapp Chat Fake",
    img: images.Project06,
    date: "30/06/2021",
    description:
      "Realiza un chat falso de Whatsapp agregando los ajustes que el usuario quiera. Se puede descargar el chat generado con la herramienta canvas a travez de una imagen PNG.",
    category: "Front",
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-bootstrap"></i>,
    ],
  },
  {
    title: "Encriptador de Textos",
    img: images.Project07,
    date: "13/07/2021",
    description:
      "Encripta y desencripta textos, ayuda a enviar mensajes seguros.",
    category: "Front",
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
    ],
  },
  {
    title: "Filtro de autos",
    img: images.Project08,
    date: "15/08/2021",
    description:
      "Esta aplicacion filtra diversos autos por sus caracteristicas.",
    category: "Front",
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxs-file-json"></i>,
    ],
  },
];

const slidesHomeImages = [
  {
    img: images.Certificado01.img,
    alt: images.Certificado01.info,
  },
  {
    img: images.Certificado02.img,
    alt: images.Certificado02.info,
  },
  {
    img: images.Certificado03.img,
    alt: images.Certificado03.info,
  },
];

const galerySP = [
  {
    img: images.SP01.img,
    info: images.SP01.info,
    color: "#FF4500",
  },
  {
    img: images.SP02.img,
    info: images.SP02.info,
    color: "#0000FF",
  },
  {
    img: images.SP03.img,
    info: images.SP03.info,
    color: "#C71585",
  },
  {
    img: images.SP04.img,
    info: images.SP04.info,
    color: "#800080",
  },
  {
    img: images.SP05.img,
    info: images.SP05.info,
    color: "#008000",
  },
  {
    img: images.SP06.img,
    info: images.SP06.info,
    color: "#FFFF00",
  },
];

const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export {
  linksNav,
  linksNetwork,
  emails,
  sentencesData,
  projectsData,
  slidesHomeImages,
  regexEmail,
  ramdomPhrase,
  education,
  skills,
  galerySP,
};
