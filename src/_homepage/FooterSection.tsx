import footerData from '../data/footerSection.json';

const FooterSection = () => {
  return (
    <section className="footerSection" id="homepage-footer">
      <hr />
      <h2>{footerData.title}</h2>
      <p>
        © {new Date().getFullYear()} {footerData.copyright}
      </p>
    </section>
  )
}

export default FooterSection
