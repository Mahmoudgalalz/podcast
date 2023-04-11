import * as React from "react"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"



export default function Podcast({data}){
        const {title,content,link,image,url}=data
        return (
            <div className="flex border-2 border-sub">
                <img className="w-20" src="../images/avatar.png" alt="logo"/>
                <div>
                    <h1>{title}</h1>
                    <p>Dis</p>
                    <div></div>
                </div>
            </div>
        )
    }