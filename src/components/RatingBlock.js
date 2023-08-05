import React from "react";
import Rating from "./Rating"

export default function RatingBlock(){
    return(
        <div className="ratingblock">
            <div id="rating1">
                <Rating downpara="Reviews"/>
            </div>
            <div id="rating2">
                <Rating downpara="Report Guru"/>    
            </div>
            <div id="rating3">
                <Rating downpara="Best Tech"/>    
            </div>
        </div>
    )
}