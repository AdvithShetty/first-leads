import { useLocalStorage } from 'usehooks-ts'

const useCartId = () => {
  const [cartId, setCartId] = useLocalStorage<number | null>('cartId', null)

  return { cartId, setCartId }
}

export default useCartId
