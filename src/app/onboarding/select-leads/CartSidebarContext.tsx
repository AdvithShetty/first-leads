import { useDisclosure } from '@nextui-org/react'
import { FC, ReactNode, createContext, useContext } from 'react'

interface CartSidebarProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const CartSidebarContext = createContext<CartSidebarProps | undefined>(undefined)

interface CartSidebarProviderProps {
  children: ReactNode
}

export const CartSidebarProvider: FC<CartSidebarProviderProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <CartSidebarContext.Provider value={{ isOpen, onOpen, onClose }}>{children}</CartSidebarContext.Provider>
}

export const useCartDisclosure = (): CartSidebarProps => {
  const context = useContext(CartSidebarContext)
  if (!context) {
    throw new Error('useCartDisclosure must be used within a CartSidebarProvider')
  }
  return context
}
