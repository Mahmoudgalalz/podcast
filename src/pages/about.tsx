import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { BaseLayout } from "../components/BaseLayout"
import { StaticImage } from "gatsby-plugin-image"
import { Icon } from '@iconify/react';

const socials=[
    {
        icon:<Icon icon="mdi:linkedin" fontSize="3rem" style={{color:'#76b5c5'}} />,
        link: 'https://linkedin.com/in/mahmoudgalalz',
    },
    {
        icon:<Icon icon="mdi:twitter" fontSize="3rem" style={{color:'#76b5c5'}} />,
        link: 'https://twitter.com/eitmg',
    },
    {
        icon:<Icon icon="mdi:github" fontSize="3rem" style={{color:'#76b5c5'}} />,
        link: 'https://github.com/mahmoudgalalz',
    },
]

export default function about(){
    return (
        <BaseLayout>
        <main className="flex flex-col justify-center items-center my-20">
            <h1 className="text-3xl font-bold my-6">About the Creator</h1>
            <StaticImage className="rounded-full object-cover h-56 w-56 shadow-md border-2 border-sub shadow-text " src="../images/avatar.png" alt="Avatar "></StaticImage>
            <p className="text-center text-xl my-20 mx-6 sm:mx-40">This is Mahmoud Galal aka KroKing, I created this podacast to share my story as a <span className="uppercase font-extrabold">Software Engineer</span> and share other Junior software engineers,
                in a way to enrich the Arabic content about Tech, I'm trying to help Junior Software Engineers to be  
            </p>
            <ul className="flex my-10 gap-4">
                {socials.map(({icon,link})=>{
                    return <li className="hover:scale-105 duration-150"><a href={link} target="_blank">{icon}</a></li>
                })}
            </ul>
            <button disabled className="rounded-xl border-2 border-accent p-2 hover:-translate-y-1 hover:border-b-8 duration-150 shadow-md line-through">Portfolio</button>
        </main>
        </BaseLayout>
    )
}

export const Head: HeadFC = () => <title>Junior Talks</title>