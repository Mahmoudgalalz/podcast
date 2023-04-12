import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { BaseLayout } from "../components/BaseLayout"
import { Icon } from "@iconify/react"
import Podcast from "../components/Podcast"


const rss=[
  {
    logo:<Icon icon="cib:apple-podcasts" fontSize='2.5rem'/>,
    link:'https://podcasts.apple.com/us/podcast/junior-talks/id1681654229'
  },
  {
    logo:<Icon icon="mdi:spotify" fontSize='2.5rem'/>,
    link:'https://open.spotify.com/show/04klQk9zTe4QEcV70kmajK'
  },
  {
    logo:<Icon icon="cib:google-podcasts" fontSize='2.5rem' />,
    link:''
  },
  {
    logo:<Icon icon="fluent:rss-20-filled" fontSize='2.5rem' color="orange" />,
    link:'https://anchor.fm/s/916ca660/podcast/rss'
  }

]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout>
    <div className="grid sm:grid-flow-col sm:my-20 my-44 gap-6">
      <StaticImage className="mx-auto rounded-md h-56 w-56 items-center shadow-md" src="../images/cover.png" alt="Cover"/>
      <div className="text-black mx-10 my-8">
        <h1 className="text-3xl font-bold">Junior Talks</h1>
        <h2 className="text-2xl font-bold">Mahmoud Galal aka <span className="text-red-500">KroKing</span></h2>
        <p className="my-6">
        I'm a Junior Software engineer, interested in community-enriching and empowering Juniors.

In this Podcast, I will share my story and other Juniors' Stories, How they become a Software engineer.
Talking about best practices to learn and create software.

I'm also an open-source enthusiast so I will talk a lot about how contributions to open-source helped me to become a good SW
        </p>
      </div>
    </div>
    <ul className="flex gap-4 flex-wrap -mt-10 mx-4 max-sm:-mt-32">
    <li><a href="https://play.anghami.com/artist/17560836" target="_blank"><StaticImage className="w-20 hover:scale-105 duration-150" src="../images/anghami.png" alt="logo"></StaticImage></a></li>
      {rss.map(({logo,link})=>{
        return <li className="hover:scale-105 duration-150"><a href={link} target="_blank">{logo}</a></li>
      })}
    </ul>
    <Podcast/>
    </BaseLayout>
  )
}


export default IndexPage

export const Head: HeadFC = () => <title>Junior Talks</title>
