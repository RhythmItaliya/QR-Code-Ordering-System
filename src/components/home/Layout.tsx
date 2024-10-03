// src/components/home/Layout.tsx

import { LayoutProps } from '../../lib/types';
import Footer from './Footer';
import Header from './Header';

/**
 * Layout component.
 * @param  {object}  props          The component attributes as props.
 * @param  {Node}    props.children Child component(s) to render.
 * @return {Element}                The layout component.
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
