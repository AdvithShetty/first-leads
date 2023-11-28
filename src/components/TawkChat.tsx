import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useRef } from 'react'

const TawkChat = () => {
  const tawkMessengerRef = useRef()

  const handleMinimize = () => {
    ;(tawkMessengerRef.current as any)?.minimize()
  }

  return (
    <TawkMessengerReact
      propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID as string}
      widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID as string}
      ref={tawkMessengerRef}
    />
  )
}

export default TawkChat
