import placeholderimage from "../assets/img/placeholder-image.png";
import flappybird from "../assets/img/proj/flappybird.png";


const games = [
    {
        gameid: "flappybird",
        title: "Flappy Bird",
        imgUrl: flappybird,
        embedUrl: "https://itch.io/embed-upload/8079496?color=afbfd2",            
        information: "This is a clone of the popular game Flappy Bird. It is made using Unity and C#.",
        status: "Completed",
        changelog: [
            {
                version: "1.0",
                date: "2021-06-10",
                changes: ["Initial release"]
            }
        ]



    },
    {
        gameid: "chainreaction",
        title: "Chain Reaction",
        imgUrl: placeholderimage,
        embedUrl: "https://itch.io/embed-upload/8079496?color=afbfd2",
        information: "This is a chain reaction game made in Unity. It is a 2D multiplayer game supporting up to 8 players.",
        status: "Completed",
        changelog: [
            {
                version: "1.0",
                date: "2021-06-10",
                changes: ["Initial release"]
            }
        ]
    },

];

export default games;   