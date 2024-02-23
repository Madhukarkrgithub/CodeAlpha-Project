import React from 'react'
import greenParadise from "./projectImages/GreenParadise.png"
import BedBathBeyond from "./projectImages/BedBathBeyond.png"
import Myntra from "./projectImages/Myntra.png";
import Sugar from "./projectImages/Sugar.png";

import "./Project.css"
// import { motion } from "framer-motion"

const data = [
    {
        img: Sugar,
        projectTitle: "Sugar Cosmetics",
        techStack: ["React", "Redux", "CSS", "JavaScript ", "RazorPay" ],
        description: "Sugar Cosmetics is a popular beauty brand known for its diverse range of cruelty-free makeup products. From vivid lipsticks to precise eyeliners, Sugar offers high-quality cosmetics that cater to various styles and skin tones.",
        githubLink: "https://github.com/Madhukarkrgithub/Sugar-Cosmetics",
        appLink: "https://sugarcosmetics-awcs4db1s-navtejs-projects.vercel.app/"
    },
    {
        img: greenParadise,
        projectTitle: "Green Paradise",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
        description: "Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.",
        githubLink: "https://github.com/madhukarkr2468/Green-Paradise",
        appLink: "https://656cbd8b78668a2ac47fd273--jolly-kitten-c781a7.netlify.app/index.html"
    },
    {
        img: Myntra,
        projectTitle: "Myntra-Clone",
        techStack: ["HTML", "CSS", "JavaScript","Local Storage",],
        description: "Myntra is an online shopping platform tailored for style enthusiasts. With an extensive collection of trendy apparel, footwear, and accessories, Myntra provides a seamless shopping experience. Explore the latest fashion trends.",
        githubLink: "https://github.com/Madhukarkrgithub/Myntra-clone",
        appLink: "https://gilded-vacherin-2e78d2.netlify.app/"
    },
    {
        img: BedBathBeyond,
        projectTitle: "Bed-Bath-Beyond",
        techStack: ["HTML", "CSS", "JavaScript",],
        description: "Bed Bath & Beyond is a popular American retail chain specializing in home goods and furnishings. With a wide range of products, it offers everything from bedding and kitchenware to décor and organizational solutions.",
        githubLink: "https://github.com/madhukarkr2468/Bed-Bath-Beyond",
        appLink: "https://65971282c2606534a50187a1--hilarious-cheesecake-167185.netlify.app/"
    }, 
]

function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects