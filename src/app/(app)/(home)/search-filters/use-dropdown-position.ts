import { RefObject } from 'react'

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) {
      return { top: 0, left: 0 }
    }

    const rect = ref.current.getBoundingClientRect()
    const dropdownWidth = 240 // w-60 = 15rem = 240px
    const top = rect.bottom + window.scrollY
    let left = rect.left + window.scrollX

    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right - dropdownWidth + window.scrollX

      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16
      }
      return { top, left }
    }

    if (left < 0) {
      left = 16
    }
    return { top, left }
  }

  return { getDropdownPosition }
}
