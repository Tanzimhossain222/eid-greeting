export type FrameStyle = "classic" | "elegant" | "modern" | "ornate" | "minimal" | "warm"

export interface CustomColors {
  primary: string
  secondary: string
  accent: string
  background: string
}

export interface Greeting {
  id: string
  senderName: string
  recipientName: string
  message: string
  frameStyle?: FrameStyle
  customColors?: CustomColors
  cardSize?: "small" | "medium" | "large"
  createdAt: string
}
