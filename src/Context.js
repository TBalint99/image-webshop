import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(() => {
                let modifiedData = []
                for (let d of data) {
                    let local = localStorage.getItem(`${d.id}-liked`)
                    let modifiedLocal = JSON.parse(local)
                    modifiedLocal && modifiedLocal.id === d.id ?
                    modifiedData.push(modifiedLocal) :
                    modifiedData.push(d)
                }
                return modifiedData
            }))
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                photo.isFavorite === false ?
                localStorage.setItem(`${photo.id}-liked`, JSON.stringify({...photo, isFavorite: !photo.isFavorite})) :
                localStorage.removeItem(`${photo.id}-liked`)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}