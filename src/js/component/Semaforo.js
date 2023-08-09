
import '../../styles/index.css'
import React, { useState } from "react";


const Semaforo = () => {


    const [color, setColor] = useState(null);
    const [showPurple, setShowPurple] = useState(false);


    function handColor(color) {
        console.log(`${color} click`);
        setColor(color)
    }
    function cambioColor() {
        if (color === "green") {
            setColor("yellow")

        }
        else if (color === "yellow") {
            setColor("red")
        }
        else if (color === "green") {
            setActiveLight("purple");
        }


        else { setColor("green") }
    }
    return (
        <>
            <div className='bg-black position-absolute top-4 start-50 translate-middle ps-3 pe-3 pt-3 pb-3  palo'></div>

            <div className='bg-black position-absolute top-50 start-50 translate-middle ps-3 pe-3 pt-3 pb-3 rounded'>

                <div className='d-flex align-items-center flex-column mb-3'>
                    <button className={`btn btn-success rounded-circle ${color === "green" ? "glow-button" : ""} pt-5 ps-5 pe-5 pb-5`} onClick={() => handColor("green")}></button>
                    <button className={`btn btn-warning rounded-circle ${color === "yellow" ? "glow-button" : ""} pt-5 ps-5 pe-5 pb-5`} onClick={() => handColor("yellow")}></button>
                    <button className={`btn btn-danger rounded-circle ${color === "red" ? "glow-button" : ""} pt-5 ps-5 pe-5 pb-5`} onClick={() => handColor("red")}></button>
                    {showPurple && (
                        <button
                            className={`btn btn-lg btn-purple mb-2 mt-2 rounded-circle ${setColor === "purple" ? "glow-button" : ""}`}
                            style={{ width: "90px", height: "90px" }}
                            onClick={() => handlColor("purple")}
                        ></button>
    
                        )}
    
    
                </div>
                <div className='botoncambio'>
                    <button onClick={cambioColor}>click here</button>
                    <button className="btn btn-dark mt-3 d-flex" onClick={() => setShowPurple(true)}>Add Purple Light</button>
                </div>
            </div>
        </>


    )

}



export default Semaforo