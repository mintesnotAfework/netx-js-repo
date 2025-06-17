export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication and Software security",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development and Software security.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building a Cyber range Plaform",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "አኩኩሉ CTF platform",
    des: "Capture the flag platform for Bahirdar university",
    img: "/b5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/go.svg","/docker.svg", "/wireguard.svg", "/redis.svg"],
    link: "",
  },
  {
    id: 2,
    title: "Public Key Infrastructure",
    des: "Intermediate level PKI using openssl and Bash scripting Lang.",
    img: "/pki.png",
    iconLists: ["/bash.svg","openssl.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Note Keeping App",
    des: "Note keeping Application using django",
    img: "/p2.svg",
    iconLists: ["/django.svg", "/tail.svg","/html.svg","/jinja.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Student Management and Monitoring System",
    des: "Student Location and Authentication Managment and monitoring System for Bahirdar University",
    img: "/student.png",
    iconLists: ["/laravel.svg", "/tail.svg","/blade.svg","/html.svg"],
    link: "",
  },
    {
    id: 5,
    title: "Cryptographic Algorthims Implementation",
    des: "Implementation of various cryptographic algorithms using C and Java",
    img: "/crypto.png",
    iconLists: ["/c++.svg", "/java-4.svg","/key.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Mintesnot was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mintesnot's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mintesnot is the ideal partner.",
    name: "Eyob Zekarias",
    title: "Bahirdar university Cyber Security Graduate",
    image :"/eyu.png"
  },
  {
    quote:
      "Working with Mintesnot to develop the CTFF platform was an outstanding experience. Their professionalism, responsiveness, and commitment to excellence were evident at every stage of the project. Mintesnot's passion for innovation and attention to detail truly set them apart. If you're looking to build a transformative digital solution that drives impact, Mintesnot is the perfect collaborator.",
    name: "Dr.Tesfahun",
    title: "Faculty of Computing Din at Bahirdar university",
    image :"/profile.svg"
  },
  {
    quote:
      "What Mintesnot has built with the CTF platform goes far beyond a typical final-year project—it;s a sophisticated, scalable system that solves real-world challenges with remarkable ingenuity. The evaluators at Bahir Dar University were thoroughly impressed by its technical depth, seamless functionality, and potential for lasting impact. Mintesnot didn't just meet academic requirements; they delivered a professional-grade solution that could easily be adopted at an institutional level. Their vision, skill, and dedication are truly exceptional.",
    name: "Mr. Kokeb and Mr. Belayneh",
    title: "Director of Bahirdar Cyber security Departement",
    image :"/profile.svg"
  },
  {
    quote:
      "Thank you no word for you.",
    name: "Mr. Abel T.",
    title: "Supervior",
    image :"/profile.svg"
  },
];

export const companies = [
  {
    id: 1,
    name: "BahirDar Unversity",
    img: "/bdu.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "INSA",
    img: "/insa.png",
    nameImg: "/appName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using golang.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Peneteration Testing and Ethical Hacking Intern",
    desc: "Performing a simulated attack on wide range of system ",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a Web app for a client, from initial concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Ec-council Ethical Hacking Essentials Certified",
    desc: "I have Ec-council Ethical Hacking Essentails Certificate from Coursera",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Ethio coders certified",
    desc: "I have been certified in Fundamental of programming and Data science",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    url : "https://github.com/mintesnotAfework",
    img: "/git.svg",
  },
  {
    id: 2,
    url: "https://x.com/mintesnota34963",
    img: "/twit.svg",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/mintesnot-afework-4755a02a0/",
    img: "/link.svg",
  },
];
