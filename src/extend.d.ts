// tawk-messenger-react.d.ts

declare module '@tawk.to/tawk-messenger-react' {
  import React from 'react'

  interface TawkMessengerProps {
    // Define any common props here if needed
    // For example: className?: string;
    propertyId: string
    widgetId?: string
    ref?: React.Ref<any>
  }

  const TawkMessenger: React.FC<TawkMessengerProps>

  export default TawkMessenger
}
