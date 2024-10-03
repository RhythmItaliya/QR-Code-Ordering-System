import {useRouter} from 'next/navigation'
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'
import {Button} from 'xtreme-ui'
import {scrollToSection} from '../../utils/helper/common'
import landingSection from '../data/landingSection.json'

const LandingSection = () => {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const [blurBackground, setBlurBackground] = useState<number>(
    landingSection.maxBlurPerImage
  )
  const [blurOverlay, setBlurOverlay] = useState<number>(
    landingSection.maxBlurPerImage
  )

  const onMouseMove = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement
    const width = target.clientWidth / 2
    const height = target.clientHeight / 2

    const overlayX =
      landingSection.maxOverlayTranslate * ((event.pageX - width) / width)
    const overlayY =
      landingSection.maxOverlayTranslate * ((event.pageY - height) / height)
    if (ref?.current)
      ref.current.style.transform = `translate(${overlayX}%, ${overlayY}%)`
  }

  useEffect(() => {
    const fetchImages = (
      src: string,
      setBlur: Dispatch<SetStateAction<number>>
    ) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', src, true)
      xhr.responseType = 'arraybuffer'
      xhr.onprogress = (event) =>
        setBlur(
          (blur) =>
            landingSection.maxBlurPerImage -
            (blur - 4) * (event.loaded / event.total)
        )
      xhr.onload = () => setBlur(0)
      xhr.send()
    }

    fetchImages(landingSection.backgroundImage, setBlurBackground)
    fetchImages(landingSection.overlayImage, setBlurOverlay)
  }, [])

  return (
    <section
      className="landingSection"
      id={landingSection.sectionId}
      style={{filter: `blur(${blurBackground + blurOverlay}px)`}}
    >
      <div
        className="coverBackground"
        style={{backgroundImage: `url(${landingSection.backgroundImage})`}}
      />
      <div
        ref={ref}
        className="coverOverlay"
        onMouseMove={onMouseMove}
        style={{backgroundImage: `url(${landingSection.overlayImage})`}}
      />
      <div className="overlay" />
      <div className="landingGreeting">
        <p className="head">{landingSection.content.heading}</p>
        <p className="subHead">{landingSection.content.subHeading}</p>
        {landingSection.content.descriptions.map((desc, index) => (
          <p className="desc" key={index}>
            {desc}
          </p>
        ))}
        <div className="greetingAction">
          {landingSection.content.actions.map((action, index) => {
            const buttonType: 'primary' | 'secondary' =
              action.type === 'primary' || action.type === 'secondary'
                ? action.type
                : 'primary'
            return (
              <Button
                key={index}
                label={action.label}
                type={buttonType}
                onClick={() =>
                  action.onClick.startsWith('/')
                    ? router.push(action.onClick)
                    : scrollToSection(action.onClick)
                }
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LandingSection
