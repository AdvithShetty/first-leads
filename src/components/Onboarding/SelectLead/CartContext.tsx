import { ReactNode, createContext, useContext, useState } from 'react'

export const CartContext = createContext<{
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart([...cart, item])
  }

  const removeFromCart = (item: CartItem) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id))
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider')
  }
  return context
}

export interface CartItem {
  id: string
}
