import clsx from 'clsx'
import {Icon} from 'xtreme-ui'

import './quantityButton.scss'

const QuantityButton = (props: TQuantityButtonProps) => {
  const {
    className,
    disabled,
    filled,
    quantity,
    increaseQuantity,
    decreaseQuantity
  } = props

  const classList = clsx(
    'quantityButton',
    className,
    disabled && 'disabled',
    filled && 'filled',
    quantity && 'quantityValue'
  )

  return (
    <div className={classList}>
      <div className="hiddenContainer">
        {!disabled && (
          <button
            className="quantity decrease"
            onClick={decreaseQuantity}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                decreaseQuantity()
              }
            }}
            disabled={disabled}
            aria-label="Decrease quantity"
          >
            <Icon code="2d" type="solid" />
          </button>
        )}
        <div className="value">
          {disabled && <Icon code="f00d" />}
          <p>{quantity || '0'}</p>
        </div>
      </div>
      {!disabled && (
        <button
          className="quantity increase"
          onClick={increaseQuantity}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              increaseQuantity()
            }
          }}
          disabled={disabled}
          aria-label="Increase quantity"
        >
          {quantity ? <Icon code="2b" type="solid" size={16} /> : 'Add'}
        </button>
      )}
    </div>
  )
}

export default QuantityButton

type TQuantityButtonProps = {
  className?: string
  disabled?: boolean
  filled?: boolean
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}
