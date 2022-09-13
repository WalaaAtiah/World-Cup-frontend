import React from "react";
import Data from "./history.json"
import "./history.css"
class History extends React.Component{
    render(){
        return(
            <section className="history">
{Data.map(item=>{
    return (
        <div className="section">
            <div className="description">
                <h1 className="year">{item.year}</h1>
                <p className="description">{item.description}</p>
            </div>
            <img src={item.picture} className="winner"/>
        </div>
    )
})}
            </section>
        )
    }
}
export default History