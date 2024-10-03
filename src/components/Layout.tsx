import {LayoutProps} from '../lib/types'

/**
 * Layout component.
 * @param  {object}  props          The component attributes as props.
 * @param  {Node}    props.children Child component(s) to render.
 * @return {Element}                The layout component.
 */
export default function Layout({children}: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
