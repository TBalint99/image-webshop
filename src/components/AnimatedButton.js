import React from "react"

const AnimatedButton = ({ onClick, children }) => {
    return (
        <button className="btn draw-border" onClick={onClick}>
            {children}
        </button>
    )

}

export default AnimatedButton