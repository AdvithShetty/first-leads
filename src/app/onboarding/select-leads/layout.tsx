import Cart from './Cart'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen w-full grid-cols-4 bg-white'>
      <div className='col-span-3 h-full'>{children}</div>
      <Cart />
    </div>
  )
}

export default Layout
