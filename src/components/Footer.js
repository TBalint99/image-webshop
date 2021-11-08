import React from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <Link to="/linkedin">
                <i className="ri-linkedin-box-fill"></i>
            </Link>
        </footer>
    )
}

export default Footer