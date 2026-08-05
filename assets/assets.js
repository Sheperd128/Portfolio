import user_image from './user-image.png'; 
import profile_img from './profile-img.png'; 

// Import React Icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava, FaUnity, FaGithub, FaLinkedin, FaTwitter, FaMobile, FaGamepad, FaServer, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiUnrealengine, SiFlutter, SiCplusplus, SiCsharp, SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";
import { BiCodeAlt, BiPalette } from "react-icons/bi";

export const assets = {
    user_image,
    profile_img,
};

export const serviceData = [
    { 
        icon: <BiCodeAlt className="text-4xl text-emerald-500" />, 
        title: 'Full Stack Dev', 
        description: 'Building scalable, secure web apps using MERN Stack and Next.js.' 
    },
    { 
        icon: <FaMobile className="text-4xl text-emerald-500" />, 
        title: 'Mobile Development', 
        description: 'Creating cross-platform mobile applications with Flutter.' 
    },
    { 
        icon: <FaGamepad className="text-4xl text-emerald-500" />, 
        title: 'Game Design', 
        description: 'Interactive 2D & 3D experiences in Unity & Unreal Engine.' 
    },
    { 
        icon: <FaDatabase className="text-4xl text-emerald-500" />, 
        title: 'Data Science', 
        description: 'Database management and AI behavioral analysis.' 
    },
];

export const workData = [
    {
        title: 'HustleHub SA',
        description: 'Secure C2C marketplace featuring SafePay Escrow, KYC identity verification, and dynamic role-based dashboards.',
        tags: ['PHP', 'MySQL', 'C2C'],
        link: 'https://hustlehub-sa.kesug.com/?i=1', // Replace '#' with your actual live InfinityFree link
        bgImage: '/hustlehub-bg.png',
        comingSoon: false 
    },
    {
        title: 'Neon Peak OS',
        description: 'Tech-themed interactive murder mystery portal with logic puzzles and suspect dossiers.',
        tags: ['Next.js', 'Interactive', 'Web Portal'],
        link: 'https://neon-peak-1scxt8ot6-sheperd128s-projects.vercel.app/',
        bgImage: '/neon-peak-bg.png',
        comingSoon: false 
    },
    {
        title: 'Aegis Industries',
        description: 'Corporate espionage mystery featuring a custom employee UI and immersive puzzle mechanics.',
        tags: ['React', 'UI/UX', 'Web Game'],
        link: 'https://murder-mystery-iota-one.vercel.app/',
        bgImage: '/aegis-bg.png',
        comingSoon: false 
    },
    {
        title: 'Abundant Rain Church',
        description: 'Full-stack platform with admin dashboard for sermons & events.',
        tags: ['MERN Stack', 'Admin Panel', 'CMS'],
        link: 'https://abundantrainvoslooruscampus.org/',
        bgImage: '/church-bg.png',
        comingSoon: false 
    },
    {
        title: 'QND Eventiques',
        description: 'Streamlined event planning portfolio designed for elegance.',
        tags: ['Frontend', 'React', 'Static'],
        link: 'https://qnd-eventiques.vercel.app/',
        bgImage: '/event-bg.png',
        comingSoon: false 
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full frontend & backend with smart product creation system.',
        tags: ['MERN', 'E-commerce', 'Redux'],
        link: '', 
        bgImage: '/shop-bg.png',
        comingSoon: true 
    },
    {
        title: 'Flutter Mobile Shop',
        description: 'Functional mobile e-commerce app deployable on Android.',
        tags: ['Flutter', 'Mobile', 'Dart'],
        link: '', 
        bgImage: '/mobile-bg.png',
        comingSoon: true 
    },
    {
        title: '2D RPG (Unity)',
        description: 'Dynamic inventory, NPC dialogue systems, and auto-saving.',
        tags: ['Unity', 'C#', 'Game Dev'],
        link: '', 
        bgImage: '/game-2d-bg.png',
        comingSoon: true 
    },
    {
        title: '3D Assassin Prototype',
        description: 'Advanced movement, stealth mechanics, and combat AI.',
        tags: ['Unreal Engine', 'Blueprints', '3D'],
        link: '', 
        bgImage: '/game-3d-bg.png',
        comingSoon: true 
    },
];

export const infoList = [
    { 
        icon: <BiCodeAlt className="text-2xl text-emerald-400"/>, 
        title: 'Languages', 
        description: 'C++, C#, Python, JavaScript, Dart, SQL' 
    },
    { 
        icon: <FaReact className="text-2xl text-emerald-400"/>, 
        title: 'Frameworks', 
        description: 'React, Next.js, Express, Flutter, Unity, Unreal' 
    },
    { 
        icon: <BiPalette className="text-2xl text-emerald-400"/>, 
        title: 'Interests', 
        description: 'AI Ethics, Neuroscience Tech, Database Science' 
    }
];

export const toolsData = [
    <FaReact key="react"/>, <SiNextdotjs key="next"/>, <SiTailwindcss key="tail"/>, 
    <SiMongodb key="mongo"/>, <FaNodeJs key="node"/>, <SiUnrealengine key="unreal"/>, 
    <FaUnity key="unity"/>, <FaPython key="py"/>
];