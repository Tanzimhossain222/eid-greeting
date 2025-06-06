import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CroissantIcon as Crescent, Star, ChurchIcon as Mosque } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Crescent className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          <h1 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">EidGreetings</h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <Star className="h-12 w-12 text-amber-500 animate-pulse" />
            <Mosque className="h-16 w-16 text-emerald-600 dark:text-emerald-400" />
            <Star className="h-12 w-12 text-amber-500 animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold text-emerald-800 dark:text-emerald-200">Eid Mubarak</h2>
            <p className="text-xl md:text-2xl text-emerald-700 dark:text-emerald-300 font-semibold">عيد أضحى مبارك</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Create beautiful, personalized Eid-ul-Adha greeting cards to share with your loved ones. Celebrate this
              blessed occasion with heartfelt messages and elegant designs.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
              <CardContent className="p-6 text-center">
                <Crescent className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Create Greetings</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Design personalized Eid greeting cards with custom messages
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Live Preview</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  See your greeting card design in real-time as you create
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
              <CardContent className="p-6 text-center">
                <Mosque className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Save & Share</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Store your greetings locally and share them with family
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
              <Link href="/create">Create Greeting Card</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 text-lg"
            >
              <Link href="/greetings">View My Greetings</Link>
            </Button>
          </div>

          {/* Decorative Pattern */}
          <div className="mt-16 opacity-20">
            <div className="flex justify-center space-x-4">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <Crescent className="h-4 w-4 text-emerald-600" />
                  <Star className="h-3 w-3 text-amber-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
