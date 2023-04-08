import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { BaseLayout } from "../components/BaseLayout"
import { StaticImage } from "gatsby-plugin-image"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout>
    <div className="grid sm:grid-flow-col sm:my-20 my-44 gap-6 ">
      <StaticImage className="mx-auto rounded-md h-56 w-56 items-center" src="../images/cover.png" alt="Cover"/>
      <div className="text-black ml-6 mr-44 my-10">
        <h1 className="text-3xl font-bold">Junior Talks</h1>
        <h2 className="text-2xl font-bold">Mahmoud Galal aka <span className="text-red-500">KroKing</span></h2>
        <p className="">
        I'm a Junior Software engineer, interested in community-enriching and empowering Juniors.

In this Podcast, I will share my story and other Juniors' Stories, How they become a Software engineer.
Talking about best practices to learn and create software.

I'm also an open-source enthusiast so I will talk a lot about how contributions to open-source helped me to become a good SW
        </p>
      </div>
    </div>
    </BaseLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Junior Talks</title>
