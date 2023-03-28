import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react"
const navList=[
    {
        title: "Home",
        link:'/'
    },
    {
        title: "Episodes",
        link:'/episodes'
    },
    {
        title: "About",
        link:'/about'
    },
]
const pathname = window.location.pathname;
export function BaseLayout({children}:any){
    return (
        <>
        <header className="top-0 z-30 w-full fixed sm:static">
  <div className="mx-auto">
    <div className="flex flex-col items-center justify-between gap-2 pt-6 sm:flex-row">
      <a href="/" className="text-2xl font-medium duration-150 hover:text-zinc-600/70">
        Junior Talks
      </a>
      {/* Desktop navigation */}
      <nav className="flex items-center grow ">
        <ul className="flex flex-wrap items-center justify-end sm:gap-4 grow">
          {navList.map(({title,link}) => (
            <li className="">
              <Link
                className={`flex items-center px-2 xs:px-3 py-2 duration-150 text-xl hover:text-zinc-600/70
                ${pathname.substring(0,pathname.length-1) === link ? "text-blue-600" : "text-zinc-700"}`}
                to={link}
                // target={item.external ? "_blank" : undefined}
                // rel={item.external ? "noopener noreferrer" : undefined}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
</header>
            {children}

            <footer className="my-auto bg-white rounded-lg shadow m-4">
              <div className="p-4 flex justify-center">
      <span className="text-sm text-gray-500 text-center">© 2023 <a href="." className="hover:underline">Junior Talks™</a>. All Rights Reserved.
    </span>
    </div>
</footer>

    </>
    )
}