// utils/formatText.ts

// Capitalize first letter
export const capitalize = () =>
  str.charAt(0).toUpperCase() + str.slice(1)

// Limit text length
export const truncate = () =>
  str.length > maxLength ? str.slice(0, maxLength) + '...' : str

// Replace HTML entities (like &amp; → &)
export const decodeHTML = () =>
  text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
