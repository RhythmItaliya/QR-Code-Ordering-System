import _mongoose, {connect} from 'mongoose'

declare global {
  declare module '*.svg' {
    import {FC, SVGProps} from 'react'

    const SVG: FC<SVGProps<SVGSVGElement>>
    export default SVG
  }

  interface NextResponseError {
    status: number
    message: string
  }

  // eslint-disable-next-line no-var
  var mongoose: {
    promise: ReturnType<void | typeof connect>
    conn: typeof _mongoose | null
  }
}

// Define the Product type
export type TProduct = {
  id: string // or any other properties your product might have
  adminApproved: boolean // This is the property that was causing the issue
  // Add other properties as needed
}

// Update the TOrder type
export type TOrder = {
  id: string // or whatever properties your order has
  state: 'active' | 'completed' | 'rejected' // Example states
  products: TProduct[] // Use the defined Product type here
  // Add other properties as needed
}

// Your existing context code...
