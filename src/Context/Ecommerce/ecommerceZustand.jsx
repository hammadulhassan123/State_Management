import React from 'react'
import {
    useAddToCart,
    useCartCount,
    useLogin,
    useLogout,
    useUser,
} from './StoreZustand'

const LoginSection =() =>{
    const login = useLogin();
    const logout = useLogout();
    return(
    <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
)}

const UserSection= ()=>{
    const user = useUser();
    return(
    <div>
        USER: {user}
    </div>
    )
}
const AddToCartSection = ()=>{
    const addToCart = useAddToCart();
    return(
    <div>
        <button onClick={addToCart}>Add To Cart</button>
    </div>
    )
}

const CartCountSection=()=>{
    const cartCount = useCartCount();
    return(
    <div>
        Cart-Count: {cartCount} 
    </div>
    )
}

function ECommerceZustand() {
  return (
    <>
        <LoginSection />
        <UserSection />
        <AddToCartSection />
        <CartCountSection />
    </>
  )
}

export default ECommerceZustand