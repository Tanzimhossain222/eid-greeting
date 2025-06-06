"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { messageTemplates } from "@/lib/templates"

interface MessageTemplateSelectorProps {
  onTemplateSelect: (message: string) => void
}

export function MessageTemplateSelector({ onTemplateSelect }: MessageTemplateSelectorProps) {
  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-700">
      <CardHeader>
        <CardTitle className="text-emerald-800 dark:text-emerald-200">Message Templates</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="formal">Formal</TabsTrigger>
          </TabsList>

          {Object.entries(messageTemplates).map(([category, templates]) => (
            <TabsContent key={category} value={category}>
              <ScrollArea className="h-64">
                <div className="space-y-2">
                  {templates.map((template, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full h-auto p-3 text-left justify-start border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                      onClick={() => onTemplateSelect(template.text)}
                    >
                      <div>
                        <div className="font-medium text-sm text-emerald-800 dark:text-emerald-200 mb-1">
                          {template.title}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{template.text}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
