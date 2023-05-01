import React from 'react'
import Bala from "../../Resources/bala.jpg"
import "../FlipCard/FlipCard.css"

const FlipCard = () => {
    return (
        <div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={Bala} alt="Avatar" style={{width:"330px",height:"350px"}} />
                    </div>
                    <div class="flip-card-back">
                        <h2>Balasubramaniam P</h2>
                        <p>Business Relations Manager</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FlipCard