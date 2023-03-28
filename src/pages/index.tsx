import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { BaseLayout } from "../components/BaseLayout"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout>
    </BaseLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Junior Talks</title>
