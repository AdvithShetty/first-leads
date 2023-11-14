import { ReactNode, createContext, useContext, useState } from 'react'

export const CartContext = createContext<{
  cartId: number | null
  setCartId: (cartId: number | null) => void
} | null>(null)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartId, setCartId] = useState<number | null>(null)

  const value = {
    cartId,
    setCartId,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCartId = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider')
  }
  return context
}
