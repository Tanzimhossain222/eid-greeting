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
    description: "Traditional Islamic design",
    icon: Crescent,
    preview:
      "border-2 border-emerald-300 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900",
  },
  {
    id: "elegant" as FrameStyle,
    name: "Elegant",
    description: "Sophisticated mosque design",
    icon: Mosque,
    preview:
      "border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900 dark:to-orange-900",
  },
  {
    id: "modern" as FrameStyle,
    name: "Modern",
    description: "Contemporary geometric",
    icon: Sparkles,
    preview: "border-2 border-cyan-300 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900 dark:to-blue-900",
  },
  {
    id: "ornate" as FrameStyle,
    name: "Ornate",
    description: "Decorative patterns",
    icon: Crown,
    preview:
      "border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-900",
  },
  {
    id: "minimal" as FrameStyle,
    name: "Minimal",
    description: "Clean and simple",
    icon: Star,
    preview: "border border-gray-300 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-800 dark:to-slate-800",
  },
  {
    id: "warm" as FrameStyle,
    name: "Warm",
    description: "Family-friendly design",
    icon: Heart,
    preview: "border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-red-100 dark:from-rose-900 dark:to-red-900",
  },
]

export function FrameStyleSelector({ selectedStyle, onStyleChange }: FrameStyleSelectorProps) {
  return (
    <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
      <CardHeader className="pb-4">
        <CardTitle className="text-emerald-800 dark:text-emerald-200 text-lg">Frame Styles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {frameStyles.map((style) => {
            const Icon = style.icon
            return (
              <Button
                key={style.id}
                variant={selectedStyle === style.id ? "default" : "outline"}
                className={`h-auto p-3 sm:p-4 flex flex-col space-y-2 w-full ${
                  selectedStyle === style.id
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600"
                    : "border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                }`}
                onClick={() => onStyleChange(style.id)}
              >
                <div className={`w-full h-12 sm:h-16 rounded ${style.preview} flex items-center justify-center`}>
                  <Icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${selectedStyle === style.id ? "text-white" : "text-gray-600 dark:text-gray-400"}`}
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm">{style.name}</div>
                  <div className="text-xs opacity-75 mt-1 hidden sm:block">{style.description}</div>
                </div>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
