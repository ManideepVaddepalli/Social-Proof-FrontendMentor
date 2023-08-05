import React from "react"
import Colton from "../images/image-colton.jpg"
import Irene from "../images/image-irene.jpg"
import Anne from "../images/image-anne.jpg"
export default function Card(props)
{
    function check(){
        if (props.propic == '1')
        {
            return Colton;
        }
        else if (props.propic =='2')
        {
            return Irene;
        }
        else
        {
            return Anne;
        }
    }
    console.log(check());
    return(
        <div className="card--container">
            <div className="card--user">
                <div className="user--pic" style={{backgroundImage:`url(${check()})`}}>
                </div>
                <h4>{props.username}<br/><span>Verified Buyer</span></h4>
            </div>
            <p>"{props.paragraph}"
            </p>
        </div>
    )
} 