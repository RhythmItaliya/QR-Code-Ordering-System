import type {NextPage} from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/home/Layout'

const LandingSection = dynamic(() => import('../_homepage/ui/LandingSection'))
const AboutSection = dynamic(() => import('../_homepage/ui/AboutSection'))
const FeatureSection = dynamic(() => import('../_homepage/ui/FeatureSection'))
const ContactUsSection = dynamic(
  () => import('../_homepage/ui/ContactUsSection')
)

/**
 * Homepage component.
 * @return {Element} The Homepage component.
 */
const Home: NextPage = () => {
  return (
    <Layout>
      <LandingSection />
      <AboutSection />
      <FeatureSection />
      <ContactUsSection />
    </Layout>
  )
}

export default Home
