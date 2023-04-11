import * as React from "react"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Podcast from "./Podcast"


export default function Podcasts(){
    const data = useStaticQuery(graphql`
        query {
            allFeedpodcast {
              nodes {
                content
                link
                title
                itunes {
                  image
                }
                enclosure {
                  url
                }
              }
            }
          }
        `
    )
    const podcasts:[]=data.allFeedpodcast.nodes
        return ({
            podcasts.map(podcast=>{
                return <Podcast data={podcast}/>
            })
        }
        )
    }
    

