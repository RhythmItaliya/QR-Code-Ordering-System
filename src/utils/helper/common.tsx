import {log} from '../log/logger'

/**
 * Constructs the URL for the Lottie animation file.
 * @param  {string} fileName - The name of the Lottie animation file (without extension).
 * @return {string}          - The complete URL for the Lottie animation.
 */
export const getAnimSrc = (fileName: string): string => {
  // Validate the fileName input to prevent unexpected behavior
  if (!fileName) {
    throw new Error('fileName must be a non-empty string')
  }
  return `https://raw.githubusercontent.com/itzzjarvis/Assets/main/anim/lottie/${fileName}.lottie`
}

/**
 * Smoothly scrolls to a specified section on the page.
 * @param {string} [sectionId] - The ID of the section to scroll to. If undefined, scrolls to the top.
 */
export const scrollToSection = (sectionId?: string): void => {
  if (sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'})
    } else {
      log(`Section with ID "${sectionId}" not found.`)
    }
  } else {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
