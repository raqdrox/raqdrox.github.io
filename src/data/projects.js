import placeholderimage from "../assets/img/placeholder-image.png";
import flappybird from "../assets/img/proj/flappybird.png";
import njord from "../assets/img/proj/njord.webp";
import taskman from "../assets/img/proj/taskman.png";
const projectsData = [
    {
        title: "MariU",
        description: "Mario in Unity",
        imgUrl: placeholderimage,
        navUrl: "https://github.com/raqdrox/MariU",
        information: "This is a Mario game made in Unity. It is a 2D platformer game with 3 levels. The game is made using Unity and C#.",
        technologies: ["Unity", "C#"],
        projectType: "Game",
        status: "In Progress"



    },
    {
        title: "Taskman",
        description: "Task Manager for Linux",
        imgUrl: taskman,
        navUrl: "https://github.com/raqdrox/taskman",
        information: "This is a task manager for Linux. It is a command line tool that allows you to view and manage processes running on your system.",
        technologies: ["Python","QT"],
        projectType: "Utility",
        status: "In Progress"
    },
    {
        title: "ThreeDUS",
        description: "Amogus in 3D",
        imgUrl: placeholderimage,
        navUrl: "https://github.com/raqdrox/ThreeDUS",
        information: "This is a 3D version of the popular game Among Us.",
        technologies: ["Unity", "C#"],
        projectType: "Game",
        status: "In Progress"
    },
    {
        title: "Chain Reaction",
        description: "A chain reaction game",
        imgUrl: placeholderimage,
        navUrl: "https://github.com/raqdrox/ChainReaction",
        information: "This is a chain reaction game made in Unity. It is a 2D multiplayer game supporting up to 8 players.",
        technologies: ["Unity", "C#"],
        projectType: "Game",
        status: "In Progress"
    },
    {
        title: "Flappy Bird",
        description: "A flappy bird clone",
        imgUrl: flappybird,
        navUrl: "https://github.com/raqdrox/flappy-bird",
        information: "This is a clone of the popular game Flappy Bird. It is made using Unity and C#.",
        technologies: ["Unity", "C#"],
        projectType: "Game",
        status: "In Progress"
    },
    {
        title: "Njord",
        description: "Service to send UPI notifications to Streamlabs",
        imgUrl: njord,
        navUrl: "https://github.com/raqdrox/Njord",
        information: "This is a service that sends UPI notifications to Streamlabs. ",
        technologies: ["Node.js", "Express"],
        projectType: "Service",
        status: "In Progress"
    },
];

export default projectsData;