import React from "react";
import Card from "./Card";

export default function DesktopCards(){
    return(
        <div className="desktopcards">
            <div id="card1">
                <Card username="Colton Smith"
                        propic="1"
                        paragraph="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also recieved it in time. Excellent!" 
                />
            </div>
            <div id="card2">
                <Card username="Irene Roberts"
                        propic="2"
                        paragraph="Customer service is always excellet and very quick turn around. Completely delighted with the simplicity of the purchase and speed of delivery."
                />
            </div>
            <div id="card3">
            <Card username="Anne Wallace"
                    propic="3"
                    paragraph="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!" 
            />
            </div>
        </div>

    )
}