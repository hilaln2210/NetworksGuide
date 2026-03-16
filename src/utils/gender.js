const GENDER_KEY = 'networks_gender'

export function getGender() {
  return localStorage.getItem(GENDER_KEY) || null // 'female' | 'male' | null
}

export function setGender(g) {
  localStorage.setItem(GENDER_KEY, g)
}

// Returns the correct form based on stored gender (defaults to female)
export function t(female, male) {
  return getGender() === 'male' ? male : female
}
