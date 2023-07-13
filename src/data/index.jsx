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
    images: ["01_x2v1ek", "02_xx77sd"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Google-Clone--.git",
      },
      { name: "Preview", link: "https://teal-genie-3c079b.netlify.app/" },
    ],
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
    images: ["01_zlcwdl", "02_zxkocs", "03_ityb6t"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Password-Generator--.git",
      },
      {
        name: "Preview",
        link: "https://lustrous-fenglisu-41151e.netlify.app/",
      },
    ],
    technologies: [
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
    images: ["03_smndil", "04_bav7fw", "02_bipvf5", "05_nsrki2", "01_yl4rnb"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Daffy-Store--.git",
      },
      {
        name: "Preview",
        link: "https://gregarious-klepon-d3ec37.netlify.app",
      },
    ],
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
    images: ["01_rgm8bg", "02_vl8ljc", "03_jxxazu"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Image-Color-Picker--.git",
      },
      {
        name: "Preview",
        link: "https://cool-chebakia-8553fe.netlify.app/",
      },
    ],
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
    images: ["02_w4rjyq", "03_m1zj32", "01_r2zafc"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Simons-Web--.git",
      },
      {
        name: "Preview",
        link: "https://elaborate-rabanadas-4bc137.netlify.app/",
      },
    ],
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
    images: ["03_nfwtba", "01_pprqv7", "02_ncycnb"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Whatsapp-Chat-Fake--.git",
      },
      {
        name: "Preview",
        link: "https://sensational-cupcake-2df5d6.netlify.app/",
      },
    ],
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
    images: ["01_j33s50", "02_bcqmd1", "03_ls1tpj"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Encriptador-de-Textos--.git",
      },
      {
        name: "Preview",
        link: "https://earnest-eclair-9fe886.netlify.app/",
      },
    ],
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
    images: ["01_hxq7gf", "02_sebpu4", "03_ctfbvy", "04_eejgzq"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Filter-Cars--.git",
      },
      {
        name: "Preview",
        link: "https://elaborate-stroopwafel-f64577.netlify.app",
      },
    ],
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxs-file-json"></i>,
    ],
  },
  {
    title: "Frases Aleatorias",
    img: images.Project09,
    date: "10/04/2022",
    description:
      "Esta aplicacion muestra frases ramdom cada vez que el usuario presione el boton.",
    category: "Front",
    images: ["01_j6hfkk", "02_cmw3dt"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/React-Frases-Random--.git",
      },
      {
        name: "Preview",
        link: "https://peppy-jalebi-89e2bc.netlify.app/",
      },
    ],
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxs-file-json"></i>,
      <i className="bx bxl-react"></i>,
    ],
  },
  {
    title: "Aplicacion del clima",
    img: images.Project10,
    date: "10/05/2022",
    description:
      "Utilice la API gratuita de Open Weather App, usando el método getCurretPosition() obtuve las coordenadas del usuario. Usando las coordenadas obtenidas las utilicé en la API para obtener la información necesaria. Desarrolle una aplicación que muestre datos del clima, obteniendo de la API los siguientes datos: país, ciudad, icono que describa el clima, la temperatura en grados centígrados, y un botón que cambie la temperatura a grados Fahrenheit.",
    category: "Front",
    images: ["02_chykoi", "03_p6nnel", "01_lr9ole"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/React-Weather-App--.git",
      },
      {
        name: "Preview",
        link: "https://incandescent-cannoli-66ab91.netlify.app/",
      },
    ],
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
    ],
  },
  {
    title: "Rick and Morty App",
    img: images.Project11,
    date: "29/05/2022",
    description:
      "Cree un sitio donde el usuario pueda ver información sobre las ubicaciones de los universos y personajes de “Rick and Morty”. Utilizando la API de The Rick and Morty API para obtener la información nesesaria. Creando asi una app web que muestra los diferentes personajes y universos, con su respectiva informacion",
    category: "Front",
    images: [
      "01_cawkno",
      "03_oz9us5",
      "04_x01rp4",
      "05_wdikmo",
      "02_puwsay",
      "06_inzjwu",
    ],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/React-Rick-and-Morty--.git",
      },
      {
        name: "Preview",
        link: "https://subtle-banoffee-4014e9.netlify.app/",
      },
    ],
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-react"></i>,
    ],
  },
  {
    title: "Pokedex App",
    img: images.Project12,
    date: "15/06/2022",
    description:
      "Cree una app web con una primera pagina, en la que sólamente hay un input que le preguntará el nombre al usuario. Dicho nombre es almacenado en la store de redux, y será obligatorio para que pueda acceder a las siguientes rutas. La ruta “/pokedex”, se muetra despues de que el usuario ingreso su nombre, la cuál es una ruta protegida que le da un mensaje de bienvenida al usuario utilizando el nombre almacenado en el store, a la vez, listará los pokemones traídos desde la PokeApi. Cada tarjeta, al darle clic llevara a la informacion mas detallada del pokemon de la tarjeta. La ruta “/pokedex” esta paginada. Cuenta con una estiqueta select que filtra los pokemones por especie. Tiene un input para buscar un pokemon en específico por su nombre.",
    category: "Front",
    images: [
      "03_lrduxh",
      "05_erlfqc",
      "02_hiskib",
      "01_fpn8ub",
      "06_qk8sz3",
      "04_jld4wh",
    ],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/React-Pokedex--.git",
      },
      {
        name: "Preview",
        link: "https://lustrous-marigold-b9f6ee.netlify.app/",
      },
    ],
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-redux"></i>,
      <i className="bx bxl-react"></i>,
    ],
  },
  {
    title: "Full CRUD App",
    img: images.Project13,
    date: "22/06/2022",
    description:
      "Cree una aplicación donde se puedan administrar usuarios a través de un CRUD. Para ello cree mi propia API para consultar, crear, eliminar y actualizar dichos usuarios. La pagina consiste en listar todos los usuarios, mostrando su nombre, apellido, email y fecha de nacimiento. Adicionalmente cada targeta tiene 2 botones, uno para eliminar. Y uno para editar, el cuál pondrá toda la información del usuario seleccionado en un formulario para ejecutar dicha accion. El formulario tambien sirve para crear un nuevo usuario.",
    category: "Full Stack",
    images: ["02_t7onga", "01_koq5r8", "03_iif3wo"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/Full-CRUD-App--.git",
      },
      {
        name: "Preview",
        link: "https://vocal-boba-408f1c.netlify.app/",
      },
    ],
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-redux"></i>,
      <i className="bx bxl-react"></i>,
      <i className="bx bxl-nodejs"></i>,
      <i className="bx bxl-postgresql"></i>,
    ],
  },
  {
    title: "Portafolio 01",
    img: images.Project14,
    date: "10/07/2022",
    description:
      "Esta web contiene informacion mia relacionada a la programacion",
    category: "Front",
    images: ["01_i4weyj", "02_tvqq7s", "03_gvyy02", "04_ackecg", "05_zj9usb"],
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Diego-Nieves26/React-Portfolio-01--.git",
      },
      {
        name: "Preview",
        link: "https://nvs-dlc.netlify.app/",
      },
    ],
    technologies: [
      <i className="bx bxl-html5"></i>,
      <i className="bx bxl-css3"></i>,
      <i className="bx bxl-javascript"></i>,
      <i className="bx bxl-redux"></i>,
      <i className="bx bxl-react"></i>,
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
  {
    img: images.Certificado04.img,
    alt: images.Certificado04.info,
  },
  {
    img: images.Certificado05.img,
    alt: images.Certificado05.info,
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
  education,
  emails,
  galerySP,
  linksNav,
  linksNetwork,
  projectsData,
  ramdomPhrase,
  regexEmail,
  sentencesData,
  skills,
  slidesHomeImages,
};
