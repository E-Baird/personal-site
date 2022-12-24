export type Project = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    linkText?: string;
}

export const projectData: Project[] = [
    {
        title: "AWS re:Invent 2021: This Is My Architecture",
        description: "In November 2021, I was given the opportunity to attend AWS re:Invent and to produce a video with the AWS This Is My Architecture team. We went in-depth into how PureWeb routes requests to virtual resources, and discussed the challenges and opportunities of a system designed around agent-based computing.",
        imageUrl: "images/tima.png",
        link: "https://www.youtube.com/watch?v=hrhBOOrR5v0",
        linkText: "Watch the Video"
    },
    {
        title: "ZZZA",
        description: "ZZZA is a fast-paced autoscroller developed for the unexpanded Commodore VIC-20. Written in 6502 assembly, this project was all about space optimization. I worked on a small team to get the most bang for our buck with access to only 3k of RAM, and the final product is a fun, surprisingly challenging game that pays homage to its retro roots.",
        imageUrl: "images/zzza.png",
        link: "https://github.com/E-Baird/zzza",
        linkText: "Play ZZZA"
    },
    {
        title: "MagpieCTF 2021",
        description: "MagpieCTF is an annual Capture-the-Flag security event hosted by the University of Calgary's Information Security club. I developed challenges for players that tested skills including reverse engineering, web exploitation, and open-source intelligence gathering. All challenges were containerized in Docker to work with our automated deployment pipeline.",
        imageUrl: "images/ctf-logo.png",
        link: "https://github.com/infosec-ucalgary/magpieCTF-2021/"
    },
    {
        title: "Introduction to Cross-Site Scripting",
        description: "As an executive of the Univerity of Calgary's Information Security club, I developed and taught a workshop that introduced participants to Cross-Site Scripting, its risks, and remediations. The workshop material consisted of a full-stack web app with intentional security flaws, written in PHP and SQL, with a Bootstrap frontend. It also involved a headless Selenium script acting as the exploit victim.",
        imageUrl: "images/xss-workshop.png",
        link: "https://github.com/E-Baird/xss-workshop"
    }
]
