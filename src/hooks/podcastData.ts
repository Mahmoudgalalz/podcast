import { graphql, useStaticQuery } from "gatsby"

export const usePodcastdata=()=>{
    const {allFeedpodcast}= useStaticQuery(
        graphql`
        query MyQuery {
            allFeedpodcast {
              edges {
                node {
                  id
                  title
                  link
                  enclosure {
                    url
                  }
                  itunes {
                    image
                  }
                }
              }
            }
          }
        `
    )
    console.log(allFeedpodcast)
    return allFeedpodcast.edges
}