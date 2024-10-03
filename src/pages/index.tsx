import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Layout from '../components/Layout'

// Dynamically import the components with lazy loading
const AboutSection = dynamic(() => import('../_homepage/AboutSection'))
const FeatureSection = dynamic(() => import('../_homepage/FeatureSection'))
const LandingSection = dynamic(() => import('../_homepage/LandingSection'))
const ContactUsSection = dynamic(() => import('../_homepage/ContactUsSection'))
const FooterSection = dynamic(() => import('../_homepage/FooterSection'))
/**
 * Homepage component.
 * @return {Element} The Homepage component.
 */
const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <LandingSection />
      <AboutSection />
      <FeatureSection />
      <ContactUsSection />
      <FooterSection />
    </Layout>
  )
}

export default Home
