"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Download, CroissantIcon as Crescent, Star, Palette, MessageSquare, Frame } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { GreetingCard } from "@/components/greeting-card"
import { FrameStyleSelector } from "@/components/frame-style-selector"
import { MessageTemplateSelector } from "@/components/message-template-selector"
import { ColorCustomizer } from "@/components/color-customizer"
import { saveGreeting, type Greeting } from "@/lib/storage"
import { exportAsImage } from "@/lib/image-export"
import { messageTemplates } from "@/lib/templates"
import { useToast } from "@/hooks/use-toast"
import type { FrameStyle, CustomColors } from "@/types/greeting"

export default function CreatePage() {
  const [senderName, setSenderName] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [message, setMessage] = useState(messageTemplates.general[0].text)
  const [frameStyle, setFrameStyle] = useState<FrameStyle>("classic")
  const [customColors, setCustomColors] = useState<CustomColors>({
    primary: "#059669",
    secondary: "#0d9488",
    accent: "#f59e0b",
    background: "#ecfdf5",
  })
  const [cardSize, setCardSize] = useState<"small" | "medium" | "large">("medium")
  const [isExporting, setIsExporting] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const handleSave = () => {
    if (!senderName.trim() || !recipientName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both sender and recipient names.",
        variant: "destructive",
      })
      return
    }

    const greeting: Greeting = {
      id: Date.now().toString(),
      senderName: senderName.trim(),
      recipientName: recipientName.trim(),
      message: message.trim(),
      frameStyle,
      customColors,
      cardSize,
      createdAt: new Date().toISOString(),
    }

    saveGreeting(greeting)

    toast({
      title: "Greeting Saved!",
      description: "Your Eid greeting card has been saved successfully.",
    })

    // Reset form
    setSenderName("")
    setRecipientName("")
    setMessage(messageTemplates.general[0].text)
    setFrameStyle("classic")
    setCustomColors({
      primary: "#059669",
      secondary: "#0d9488",
      accent: "#f59e0b",
      background: "#ecfdf5",
    })
    setCardSize("medium")
  }

  const handleExportImage = async (format: "png" | "jpeg") => {
    if (!cardRef.current) return

    setIsExporting(true)
    try {
      await exportAsImage(cardRef.current, `eid-greeting-${Date.now()}`, format)
      toast({
        title: "Image Exported!",
        description: `Your greeting card has been saved as ${format.toUpperCase()}.`,
      })
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "There was an error exporting your greeting card.",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center space-x-2">
            <Crescent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-xl font-bold text-emerald-800 dark:text-emerald-200">Create Greeting</h1>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Customization Panel */}
          <div className="space-y-6">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 dark:bg-gray-800/80">
                <TabsTrigger value="content" className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">Content</span>
                </TabsTrigger>
                <TabsTrigger value="style" className="flex items-center space-x-1">
                  <Frame className="h-4 w-4" />
                  <span className="hidden sm:inline">Style</span>
                </TabsTrigger>
                <TabsTrigger value="colors" className="flex items-center space-x-1">
                  <Palette className="h-4 w-4" />
                  <span className="hidden sm:inline">Colors</span>
                </TabsTrigger>
                <TabsTrigger value="templates" className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span className="hidden sm:inline">Templates</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-4">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
                  <CardHeader>
                    <CardTitle className="text-emerald-800 dark:text-emerald-200">Greeting Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sender" className="text-emerald-700 dark:text-emerald-300">
                        Your Name (Sender)
                      </Label>
                      <Input
                        id="sender"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Enter your name"
                        className="border-emerald-200 dark:border-emerald-700 focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="recipient" className="text-emerald-700 dark:text-emerald-300">
                        Recipient Name
                      </Label>
                      <Input
                        id="recipient"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Enter recipient's name"
                        className="border-emerald-200 dark:border-emerald-700 focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-emerald-700 dark:text-emerald-300">
                        Greeting Message
                      </Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your Eid greeting message"
                        rows={4}
                        className="border-emerald-200 dark:border-emerald-700 focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-emerald-700 dark:text-emerald-300">Card Size</Label>
                      <Select
                        value={cardSize}
                        onValueChange={(value: "small" | "medium" | "large") => setCardSize(value)}
                      >
                        <SelectTrigger className="border-emerald-200 dark:border-emerald-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (300px)</SelectItem>
                          <SelectItem value="medium">Medium (400px)</SelectItem>
                          <SelectItem value="large">Large (500px)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="style">
                <FrameStyleSelector selectedStyle={frameStyle} onStyleChange={setFrameStyle} />
              </TabsContent>

              <TabsContent value="colors">
                <ColorCustomizer colors={customColors} onColorsChange={setCustomColors} />
              </TabsContent>

              <TabsContent value="templates">
                <MessageTemplateSelector onTemplateSelect={setMessage} />
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
              <CardContent className="p-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1">
                    <Save className="h-4 w-4 mr-2" />
                    Save Greeting
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                  >
                    <Link href="/greetings">View All Greetings</Link>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={() => handleExportImage("png")}
                    disabled={isExporting}
                    variant="outline"
                    className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {isExporting ? "Exporting..." : "Export PNG"}
                  </Button>
                  <Button
                    onClick={() => handleExportImage("jpeg")}
                    disabled={isExporting}
                    variant="outline"
                    className="flex-1 border-purple-300 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {isExporting ? "Exporting..." : "Export JPEG"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-emerald-800 dark:text-emerald-200 flex items-center space-x-2">
              <Crescent className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>Live Preview</span>
            </h2>
            <div className="sticky top-8">
              <div ref={cardRef}>
                <GreetingCard
                  senderName={senderName || "Your Name"}
                  recipientName={recipientName || "Recipient Name"}
                  message={message}
                  frameStyle={frameStyle}
                  customColors={customColors}
                  cardSize={cardSize}
                  isPreview={true}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
