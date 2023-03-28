import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { BaseLayout } from "../components/BaseLayout"



export default function about(){
    return (
        <BaseLayout>
        <main className="flex-1">d</main>
        </BaseLayout>
    )
}

export const Head: HeadFC = () => <title>Junior Talks</title>