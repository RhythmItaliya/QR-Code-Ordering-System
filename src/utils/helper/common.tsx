import forEach from 'lodash/forEach'
import {ReadonlyURLSearchParams} from 'next/navigation'
import {NextResponse} from 'next/server'
import {log} from '../log/logger'

import {TThemeColor} from '../database/models/profile'

/**
 * Constructs the URL for the Lottie animation file.
 * @param  {string} fileName - The name of the Lottie animation file (without extension).
 * @return {string}          - The complete URL for the Lottie animation.
 */
export const getAnimSrc = (fileName: string): string => {
  if (!fileName) {
    throw new Error('fileName must be a non-empty string')
  }
  return `https://raw.githubusercontent.com/itzzjarvis/Assets/main/anim/lottie/${fileName}.lottie`
}

/**
 * Smoothly scrolls to a specified section on the page.
 * @param  {string} [sectionId] - The ID of the section to scroll to. If undefined, scrolls to the top.
 * @return {void}
 */
export const scrollToSection = (sectionId?: string): void => {
  const section = sectionId ? document.getElementById(sectionId) : null
  if (section) {
    section.scrollIntoView({behavior: 'smooth', block: 'start'})
  } else if (!sectionId) {
    window.scrollTo({top: 0, behavior: 'smooth'})
  } else {
    log(`Section with ID "${sectionId}" not found.`)
  }
}

/**
 * Fetches data from a given URL and returns the JSON response.
 * @param  {string}       url - The URL to fetch data from.
 * @return {Promise<any>}     - The JSON response.
 */
export const fetcher = (url: string) => fetch(url).then((r) => r.json())

/**
 * Returns a NextResponse with a JSON error message and status.
 * @param  {object}       param         - An object containing the message and status for the response.
 * @param  {string}       param.message - The error message to return.
 * @param  {number}       param.status  - The HTTP status code to return.
 * @return {NextResponse}               - The formatted NextResponse with an error.
 */
export const CatchNextResponse = ({
  message = 'Something went wrong',
  status = 500
}: {
  message?: string
  status?: number
}) => {
  return NextResponse.json({message, status}, {status})
}

/**
 * Validates an email address format.
 * @param  {string}  [email] - The email to validate.
 * @return {boolean}         - Whether the email is valid.
 */
export const isEmailValid = (email?: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return emailPattern.test(email ?? '')
}

/**
 * Constructs a query string from a given set of search parameters and additional query parameters.
 * @param  {ReadonlyURLSearchParams} searchParams - The current URL search parameters.
 * @param  {Record<string, string>}  query        - The additional query parameters.
 * @return {string}                               - The resulting query string.
 */
export const createQueryString = (
  searchParams: ReadonlyURLSearchParams,
  query: Record<string, string>
): string => {
  const params = new URLSearchParams(searchParams)
  forEach(query, (value, key) => params.set(key, value))
  return params.toString()
}

/**
 * Splits a sentence into its first word and the remaining sentence.
 * @param  {string}                       sentence - The sentence to split.
 * @return {[string, string] | undefined}          An array where the first element is the first word, and the second is the remaining sentence, or undefined if the input is falsy.
 */
export const splitStringByFirstWord = (
  sentence: string
): [string, string] | undefined => {
  if (!sentence) {
    return undefined // Explicitly returning undefined
  }

  sentence = sentence.trim()
  return [sentence.split(' ')[0], sentence.substring(sentence.indexOf(' ') + 1)]
}

/**
 * Checks if a given color is a valid RGB color.
 * @param  {TThemeColor} [color] - The color to validate.
 * @return {boolean}             - Whether the color is valid.
 */
export const isValidRGB = (color?: TThemeColor): boolean => {
  if (!color) return false
  return (
    color.r >= 0 &&
    color.r <= 255 &&
    color.g >= 0 &&
    color.g <= 255 &&
    color.b >= 0 &&
    color.b <= 255
  )
}

/**
 * Compares two colors and checks if they are equal.
 * @param  {TThemeColor} [color1] - The first color to compare.
 * @param  {TThemeColor} [color2] - The second color to compare.
 * @return {boolean}              - Whether the two colors are equal.
 */
export const isEqualColor = (
  color1?: TThemeColor,
  color2?: TThemeColor
): boolean => {
  return (
    color1?.r === color2?.r &&
    color1?.g === color2?.g &&
    color1?.b === color2?.b
  )
}
