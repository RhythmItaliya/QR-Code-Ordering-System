import clsx from 'clsx'
import {ReactNode} from 'react'
import {Button} from 'xtreme-ui'
import './sideSheet.scss'

const SideSheet = (props: SideSheetProps) => {
  const {children, className, title, open, setOpen} = props
  const classList = clsx('sideSheet', open && 'sideSheetOpen', className)

  const handleBackdropClick = () => {
    setOpen(false)
  }

  return (
    <div className={classList}>
      {/* Use a button for the backdrop to improve accessibility */}
      <button
        type="button"
        className="backdrop"
        onClick={handleBackdropClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleBackdropClick()
          }
        }}
        aria-label="Close side sheet" // Add an ARIA label for better accessibility
      />
      <div className="sideContainer">
        <div className="sheetHeader">
          <h1 className="title">
            {title[0]} <span>{title[1]}</span>
          </h1>
          <Button
            label=""
            icon="f00d"
            iconType="solid"
            size="mini"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="sheetContent">{children}</div>
      </div>
    </div>
  )
}

export default SideSheet

type SideSheetProps = {
  children: ReactNode
  className?: string
  title: string[]
  open: boolean
  setOpen: (open: boolean) => void
}
