export interface Greeting {
  id: string
  senderName: string
  recipientName: string
  message: string
  frameStyle?: "classic" | "elegant" | "modern" | "ornate" | "minimal" | "warm"
  customColors?: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  cardSize?: "small" | "medium" | "large"
  createdAt: string
}

const STORAGE_KEY = "eid-greetings"

export function getGreetings(): Greeting[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error("Error loading greetings:", error)
    return []
  }
}

export function saveGreeting(greeting: Greeting): void {
  if (typeof window === "undefined") return

  try {
    const greetings = getGreetings()
    greetings.unshift(greeting) // Add to beginning
    localStorage.setItem(STORAGE_KEY, JSON.stringify(greetings))
  } catch (error) {
    console.error("Error saving greeting:", error)
  }
}

export function deleteGreeting(id: string): void {
  if (typeof window === "undefined") return

  try {
    const greetings = getGreetings()
    const filtered = greetings.filter((g) => g.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  } catch (error) {
    console.error("Error deleting greeting:", error)
  }
}
