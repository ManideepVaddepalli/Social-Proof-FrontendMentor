import React from "react"
import DesktopTopContent from "./DesktopTopContent"
import DesktopCards from "./DesktopCards"
import "../index.css"


export default function App()
{
    return(
        <div className="content">
            <DesktopTopContent />
            <DesktopCards />
        </div>
    )
}