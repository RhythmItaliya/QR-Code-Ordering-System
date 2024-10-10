import {useRef} from 'react'
import {Icon} from 'xtreme-ui'
import './searchButton.scss'

const SearchButton = (props: TSearchButton) => {
  const {placeholder, setSearchActive, value, setValue} = props
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="search">
      <input
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
      />
      <button
        className="searchButton"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick()
          }
        }}
        aria-label="Search"
      >
        <Icon className="searchIcon" code="f002" />
      </button>
    </div>
  )
}

export default SearchButton

export type TSearchButton = {
  placeholder: string
  setSearchActive: (searchActive: boolean) => void
  value: string
  setValue: (searchActive: string) => void
}
