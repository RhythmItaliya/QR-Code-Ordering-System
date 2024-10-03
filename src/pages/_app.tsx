import type {AppProps} from 'next/app'
import '~/src/_homepage/styles/aboutSection.scss'
import '~/src/_homepage/styles/contactUsSection.scss'
import '~/src/_homepage/styles/featureSection.scss'
import '~/src/_homepage/styles/footerSection.scss'
import '~/src/_homepage/styles/landingSection.scss'
import '~/src/_homepage/styles/navbar.scss'
import '~/src/scan/scan.scss'
import '~/src/styles/globals.scss'

/**
 * App component.
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.Component Page component to display.
 * @param  {boolean} props.pageProps Page component props.
 * @return {Element}                 The App component.
 */
export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
