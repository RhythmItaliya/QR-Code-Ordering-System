import type {NextPage} from 'next'
import dynamic from 'next/dynamic'

const ScanPage = dynamic(() => import('../scan/page'))

/**
 * scanpage component.
 * @return {Element} The scanpage component.
 */
const scan: NextPage = () => {
  return (
    <>
      <ScanPage />
    </>
  )
}

export default scan
