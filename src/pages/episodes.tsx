import * as React from "react"
import { graphql } from 'gatsby';
import type { HeadFC, PageProps } from "gatsby"
import { BaseLayout } from "../components/BaseLayout"



export default function episodes(){
    return (
        <BaseLayout>
        </BaseLayout>
    )
    
}

export const Head: HeadFC = () => <title>Junior Talks Episodes</title>