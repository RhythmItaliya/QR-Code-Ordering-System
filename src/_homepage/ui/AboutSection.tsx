import {Button, Lottie} from 'xtreme-ui'
import {getAnimSrc, scrollToSection} from '../../utils/helper/common'
import aboutData from '../data/aboutSection.json'

const AboutSection = () => {
  return (
    <section className="aboutSection" id={aboutData.sectionId}>
      <div className="aboutContent">
        <h2>{aboutData.title}</h2>
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-3 tracking-wide">
            {paragraph}
          </p>
        ))}
        <div className="aboutAction">
          {aboutData.buttons.map((button, index) => {
            const buttonType: 'primary' | 'secondary' =
              button.type === 'primary' || button.type === 'secondary'
                ? button.type
                : 'primary'

            return (
              <Button
                key={index}
                label={button.label}
                type={buttonType}
                onClick={() => scrollToSection(button.target)}
              />
            )
          })}
        </div>
      </div>
      <div className="aboutAnim">
        <Lottie
          className="scanMenuAnim"
          src={getAnimSrc('FoodScanMenu')}
          speed={0.8}
        />
      </div>
    </section>
  )
}

export default AboutSection
