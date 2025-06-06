import { Card, CardContent } from "@/components/ui/card"
import { CroissantIcon as Crescent, Star, ChurchIcon as Mosque, Heart, Sparkles, Crown, Hexagon } from "lucide-react"
import type { FrameStyle, CustomColors } from "@/types/greeting"

interface GreetingCardProps {
  senderName: string
  recipientName: string
  message: string
  frameStyle?: FrameStyle
  customColors?: CustomColors
  cardSize?: "small" | "medium" | "large"
  isPreview?: boolean
}

const sizeClasses = {
  small: "w-full max-w-sm",
  medium: "w-full max-w-md",
  large: "w-full max-w-lg",
}

export function GreetingCard({
  senderName,
  recipientName,
  message,
  frameStyle = "classic",
  customColors = {
    primary: "#059669",
    secondary: "#0d9488",
    accent: "#f59e0b",
    background: "#ecfdf5",
  },
  cardSize = "medium",
  isPreview = false,
}: GreetingCardProps) {
  const renderFrameContent = () => {
    const commonProps = {
      senderName,
      recipientName,
      message,
      customColors,
    }

    switch (frameStyle) {
      case "classic":
        return <ClassicFrame {...commonProps} />
      case "elegant":
        return <ElegantFrame {...commonProps} />
      case "modern":
        return <ModernFrame {...commonProps} />
      case "ornate":
        return <OrnateFrame {...commonProps} />
      case "minimal":
        return <MinimalFrame {...commonProps} />
      case "warm":
        return <WarmFrame {...commonProps} />
      default:
        return <ClassicFrame {...commonProps} />
    }
  }

  return <div className={`${sizeClasses[cardSize]} mx-auto`}>{renderFrameContent()}</div>
}

// Classic Frame Component
function ClassicFrame({ senderName, recipientName, message, customColors }: any) {
  return (
    <Card
      className="shadow-lg border-2 bg-white dark:bg-gray-800"
      style={{
        borderColor: customColors.primary,
        background: `linear-gradient(135deg, ${customColors.background}, ${customColors.secondary}20)`,
      }}
    >
      <CardContent className="p-6 space-y-6">
        <div className="text-center space-y-3">
          <div className="flex justify-center items-center space-x-4">
            <Star className="h-6 w-6" style={{ color: customColors.accent }} />
            <Crescent className="h-8 w-8" style={{ color: customColors.primary }} />
            <Star className="h-6 w-6" style={{ color: customColors.accent }} />
          </div>
          <h2 className="text-2xl font-bold" style={{ color: customColors.primary }}>
            Eid Mubarak
          </h2>
          <p className="text-lg font-semibold" style={{ color: customColors.secondary }}>
            عيد أضحى مبارك
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm mb-1" style={{ color: customColors.secondary }}>
            To:
          </p>
          <p className="text-xl font-semibold" style={{ color: customColors.primary }}>
            {recipientName}
          </p>
        </div>

        <div
          className="rounded-lg p-4 border"
          style={{
            backgroundColor: `${customColors.background}80`,
            borderColor: customColors.secondary,
          }}
        >
          <p className="text-gray-700 dark:text-gray-200 text-center leading-relaxed">{message}</p>
        </div>

        <div className="flex justify-center">
          <Mosque className="h-12 w-12 opacity-70" style={{ color: customColors.primary }} />
        </div>

        <div className="text-center">
          <p className="text-sm mb-1" style={{ color: customColors.secondary }}>
            From:
          </p>
          <p className="text-lg font-semibold" style={{ color: customColors.primary }}>
            {senderName}
          </p>
        </div>

        <div className="flex justify-center space-x-2 opacity-40">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-1">
              <Crescent className="h-3 w-3" style={{ color: customColors.primary }} />
              <Star className="h-2 w-2" style={{ color: customColors.accent }} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Elegant Frame Component
function ElegantFrame({ senderName, recipientName, message, customColors }: any) {
  return (
    <Card
      className="shadow-xl border-2 relative overflow-hidden bg-white dark:bg-gray-800"
      style={{
        borderColor: customColors.accent,
        background: `linear-gradient(135deg, ${customColors.background}, ${customColors.primary}10)`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-2"
        style={{
          background: `linear-gradient(90deg, ${customColors.primary}, ${customColors.accent}, ${customColors.secondary})`,
        }}
      />
      <CardContent className="p-8 space-y-6">
        <div className="text-center space-y-4">
          <Mosque className="h-16 w-16 mx-auto" style={{ color: customColors.primary }} />
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: customColors.primary }}>
              Eid Mubarak
            </h2>
            <p className="text-xl font-semibold" style={{ color: customColors.accent }}>
              عيد أضحى مبارك
            </p>
          </div>
        </div>

        <div className="text-center py-4">
          <p className="text-2xl font-bold" style={{ color: customColors.primary }}>
            {recipientName}
          </p>
        </div>

        <div
          className="rounded-xl p-6 border-2 relative"
          style={{
            backgroundColor: `${customColors.background}90`,
            borderColor: customColors.secondary,
          }}
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Star className="h-6 w-6" style={{ color: customColors.accent }} />
          </div>
          <p className="text-gray-700 dark:text-gray-200 text-center leading-relaxed italic">{message}</p>
        </div>

        <div className="text-center pt-4">
          <p className="text-lg font-semibold" style={{ color: customColors.secondary }}>
            — {senderName}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Modern Frame Component
function ModernFrame({ senderName, recipientName, message, customColors }: any) {
  return (
    <Card
      className="shadow-2xl border-0 relative overflow-hidden bg-white dark:bg-gray-800"
      style={{
        background: `linear-gradient(135deg, ${customColors.background}, ${customColors.primary}15, ${customColors.secondary}10)`,
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="w-full h-full rounded-full" style={{ backgroundColor: customColors.accent }} />
      </div>
      <CardContent className="p-8 space-y-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Hexagon className="h-6 w-6" style={{ color: customColors.primary }} />
            <Sparkles className="h-6 w-6" style={{ color: customColors.accent }} />
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold" style={{ color: customColors.primary }}>
              EID
            </h2>
            <p className="text-sm" style={{ color: customColors.secondary }}>
              MUBARAK
            </p>
          </div>
        </div>

        <div className="h-px w-full" style={{ backgroundColor: customColors.secondary }} />

        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-wide" style={{ color: customColors.secondary }}>
              To
            </p>
            <p className="text-2xl font-bold" style={{ color: customColors.primary }}>
              {recipientName}
            </p>
          </div>

          <div className="p-6 rounded-2xl" style={{ backgroundColor: `${customColors.primary}08` }}>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{message}</p>
          </div>

          <div className="text-right">
            <p className="text-sm uppercase tracking-wide" style={{ color: customColors.secondary }}>
              From
            </p>
            <p className="text-xl font-semibold" style={{ color: customColors.primary }}>
              {senderName}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Ornate Frame Component
function OrnateFrame({ senderName, recipientName, message, customColors }: any) {
  return (
    <Card
      className="shadow-2xl border-4 relative bg-white dark:bg-gray-800"
      style={{
        borderColor: customColors.accent,
        background: `radial-gradient(circle at center, ${customColors.background}, ${customColors.primary}08)`,
      }}
    >
      <div className="absolute inset-2 border-2 rounded-lg" style={{ borderColor: customColors.secondary }} />
      <CardContent className="p-8 space-y-6 relative z-10">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-3">
            <Crown className="h-8 w-8" style={{ color: customColors.accent }} />
            <div className="text-center">
              <h2 className="text-3xl font-bold" style={{ color: customColors.primary }}>
                Eid Mubarak
              </h2>
              <p className="text-lg" style={{ color: customColors.secondary }}>
                عيد أضحى مبارك
              </p>
            </div>
            <Crown className="h-8 w-8" style={{ color: customColors.accent }} />
          </div>
        </div>

        <div className="text-center">
          <div
            className="inline-block px-6 py-2 rounded-full border-2"
            style={{
              borderColor: customColors.accent,
              backgroundColor: `${customColors.accent}20`,
            }}
          >
            <p className="text-xl font-bold" style={{ color: customColors.primary }}>
              {recipientName}
            </p>
          </div>
        </div>

        <div
          className="border-4 rounded-2xl p-6 relative"
          style={{
            borderColor: customColors.secondary,
            backgroundColor: `${customColors.background}80`,
          }}
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: customColors.accent }}
            >
              <Star className="h-4 w-4 text-white" />
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-200 text-center leading-relaxed font-medium">{message}</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-2">
            <div className="h-px w-12" style={{ backgroundColor: customColors.secondary }} />
            <Mosque className="h-8 w-8" style={{ color: customColors.primary }} />
            <div className="h-px w-12" style={{ backgroundColor: customColors.secondary }} />
          </div>
          <p className="text-lg font-semibold" style={{ color: customColors.primary }}>
            {senderName}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Minimal Frame Component
function MinimalFrame({ senderName, recipientName, message, customColors }: any) {
  return (
    <Card
      className="shadow-lg border bg-white dark:bg-gray-800"
      style={{
        borderColor: customColors.primary,
        backgroundColor: customColors.background,
      }}
    >
      <CardContent className="p-8 space-y-8">
        <div className="text-center">
          <Crescent className="h-12 w-12 mx-auto mb-4" style={{ color: customColors.primary }} />
          <h2 className="text-2xl font-light" style={{ color: customColors.primary }}>
            Eid Mubarak
          </h2>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg font-medium" style={{ color: customColors.primary }}>
              {recipientName}
            </p>
          </div>

          <div className="text-center px-4">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{message}</p>
          </div>

          <div className="text-center">
            <div className="h-px w-16 mx-auto mb-2" style={{ backgroundColor: customColors.secondary }} />
            <p className="text-sm font-medium" style={{ color: customColors.secondary }}>
              {senderName}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Warm Frame Component
function WarmFrame({ senderName, recipientName, message, customColors }: any) {
  return (
    <Card
      className="shadow-xl border-2 relative overflow-hidden bg-white dark:bg-gray-800"
      style={{
        borderColor: customColors.accent,
        background: `linear-gradient(135deg, ${customColors.background}, ${customColors.primary}10)`,
      }}
    >
      <div className="absolute top-4 right-4">
        <Heart className="h-8 w-8 opacity-20" style={{ color: customColors.accent }} />
      </div>
      <CardContent className="p-8 space-y-6">
        <div className="text-center space-y-3">
          <div className="flex justify-center items-center space-x-3">
            <Heart className="h-6 w-6" style={{ color: customColors.accent }} />
            <h2 className="text-2xl font-bold" style={{ color: customColors.primary }}>
              Eid Mubarak
            </h2>
            <Heart className="h-6 w-6" style={{ color: customColors.accent }} />
          </div>
          <p className="text-lg font-semibold" style={{ color: customColors.secondary }}>
            عيد أضحى مبارك
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm mb-2" style={{ color: customColors.secondary }}>
            With love to
          </p>
          <p className="text-2xl font-bold" style={{ color: customColors.primary }}>
            {recipientName}
          </p>
        </div>

        <div
          className="rounded-2xl p-6 border-2"
          style={{
            backgroundColor: `${customColors.background}60`,
            borderColor: customColors.accent,
          }}
        >
          <p className="text-gray-700 dark:text-gray-200 text-center leading-relaxed">{message}</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <Heart className="h-4 w-4" style={{ color: customColors.accent }} />
            <p className="text-lg font-semibold" style={{ color: customColors.primary }}>
              {senderName}
            </p>
            <Heart className="h-4 w-4" style={{ color: customColors.accent }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
