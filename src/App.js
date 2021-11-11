import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import LinkedIn from "./pages/LinkedIn"

function App() {    
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/image-webshop">
                    <Photos />
                </Route>
                
                <Route path="/image-webshop/cart">
                    <Cart />
                </Route>

                <Route path="/image-webshop/linkedin">
                    <LinkedIn />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App