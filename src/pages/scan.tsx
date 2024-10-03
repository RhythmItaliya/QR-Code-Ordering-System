import type {NextPage} from 'next'
import dynamic from 'next/dynamic'

const LandingSection = dynamic(() => import('../scan/page'))

/**
 * scanpage component.
 * @return {Element} The scanpage component.
 */
const scan: NextPage = () => {
  return (
    <>
      <LandingSection />
    </>
  )
}

export default scan
