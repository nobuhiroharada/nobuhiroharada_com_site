import { useEffect, useState } from "react"

const getInitialTheme = _ => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return "light"
}

const useDarkMode = () => {
  const [ theme, setTheme ] = useState(getInitialTheme)
  const colorTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem("color-theme", theme)

  }, [theme], colorTheme)

  return [ colorTheme, setTheme ]
}

export default useDarkMode