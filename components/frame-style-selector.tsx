"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CroissantIcon as Crescent, Star, ChurchIcon as Mosque, Heart, Sparkles, Crown } from "lucide-react"
import type { FrameStyle } from "@/types/greeting"

interface FrameStyleSelectorProps {
  selectedStyle: FrameStyle
  onStyleChange: (style: FrameStyle) => void
}

const frameStyles = [
  {
    id: "classic" as FrameStyle,
    name: "Classic",
    description: "Traditional Islamic design with crescents and stars",
    icon: Crescent,
    preview: "border-2 border-emerald-300 bg-gradient-to-br from-emerald-100 to-teal-100",
  },
  {
    id: "elegant" as FrameStyle,
    name: "Elegant",
    description: "Sophisticated design with mosque silhouettes",
    icon: Mosque,
    preview: "border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-100",
  },
  {
    id: "modern" as FrameStyle,
    name: "Modern",
    description: "Contemporary design with geometric patterns",
    icon: Sparkles,
    preview: "border-2 border-cyan-300 bg-gradient-to-br from-cyan-50 to-blue-100",
  },
  {
    id: "ornate" as FrameStyle,
    name: "Ornate",
    description: "Decorative design with intricate Islamic patterns",
    icon: Crown,
    preview: "border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-100",
  },
  {
    id: "minimal" as FrameStyle,
    name: "Minimal",
    description: "Clean and simple design with subtle accents",
    icon: Star,
    preview: "border border-gray-300 bg-gradient-to-br from-gray-50 to-slate-100",
  },
  {
    id: "warm" as FrameStyle,
    name: "Warm",
    description: "Warm colors with heart motifs for family",
    icon: Heart,
    preview: "border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-red-100",
  },
]

export function FrameStyleSelector({ selectedStyle, onStyleChange }: FrameStyleSelectorProps) {
  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
      <CardHeader>
        <CardTitle className="text-emerald-800 dark:text-emerald-200">Frame Styles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {frameStyles.map((style) => {
            const Icon = style.icon
            return (
              <Button
                key={style.id}
                variant={selectedStyle === style.id ? "default" : "outline"}
                className={`h-auto p-4 flex flex-col space-y-2 ${
                  selectedStyle === style.id
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                }`}
                onClick={() => onStyleChange(style.id)}
              >
                <div className={`w-full h-16 rounded ${style.preview} flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm">{style.name}</div>
                  <div className="text-xs opacity-75 mt-1">{style.description}</div>
                </div>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
