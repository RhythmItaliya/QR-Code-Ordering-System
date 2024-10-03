import React, {useState} from 'react'
import {Button, Lottie, Textfield} from 'xtreme-ui'
import contactData from '../data/contactSection.json'
import {getAnimSrc, scrollToSection} from '../utils/helper/common'

const ContactSection: React.FC = () => {
  const [showFront, setShowFront] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [emailShake, setEmailShake] = useState<boolean>(false)

  const toggleContent = () => {
    setShowFront((prev) => !prev)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <section className="contactSection" id={contactData.sectionId}>
      <div className="contactContent">
        <h2 className="text-2xl font-bold mb-4">{contactData.title}</h2>

        {showFront ? (
          <div className="front">
            {contactData.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-3 tracking-wide">
                {paragraph}
              </p>
            ))}
            <div className="contactAction space-x-4">
              {contactData.buttons.map((button, index) => {
                const buttonType =
                  button.type === 'primary' || button.type === 'secondary'
                    ? button.type
                    : 'primary'
                return (
                  <Button
                    key={index}
                    label={button.label}
                    type={buttonType}
                    onClick={() => {
                      scrollToSection(button.target)
                      toggleContent()
                    }}
                  />
                )
              })}
            </div>
          </div>
        ) : (
          <div className="back flex flex-col items-start">
            <div className="mb-4 w-full">
              <Textfield
                className={`email ${emailShake ? 'shake' : ''}`}
                icon="f0e0"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4 w-full">
              <textarea
                className="message border border-gray-300 rounded-lg shadow-sm p-2 w-full h-32 resize-none outline-none" // Added height and styles
                placeholder="Enter your message"
              />
            </div>
            <div>
              <Button label="Submit" onClick={toggleContent} />
            </div>
          </div>
        )}
      </div>

      <div className="contactAnim">
        <Lottie
          className="welcomeAnim"
          src={getAnimSrc('Welcome')}
          speed={0.6}
        />
      </div>
    </section>
  )
}

export default ContactSection
