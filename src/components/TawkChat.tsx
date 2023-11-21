/* eslint-disable */ // Disabling linting because this is a third party library
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useRef } from 'react'

const TawkChat = () => {
  const tawkMessengerRef = useRef()

  const handleMinimize = () => {
    ;(tawkMessengerRef.current as any)?.minimize()
  }

  return <TawkMessengerReact propertyId='65593ffed600b968d314a697' widgetId='1hflq8sgv' ref={tawkMessengerRef} />
}

export default TawkChat
