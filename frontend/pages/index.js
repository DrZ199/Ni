"use client"

import { useState } from "react"
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Nelson, your AI assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      })

      if (!response.ok) throw new Error('Failed to fetch response')

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.answer }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex flex-col h-screen bg-purple-50 dark:bg-gray-950">
      <header className="flex items-center px-4 h-14 bg-purple-600 text-white">
        <h1 className="text-xl font-bold">NelsonBot</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 pb-20">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <Card className={`max-w-[85%] p-3 ${
              message.role === 'user' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white dark:bg-gray-800'
            }`}>
              <p className="text-sm">{message.content}</p>
            </Card>
          </div>
        ))}
      </div>

      <form 
        onSubmit={handleSubmit}
        className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t"
      >
        <div className="flex gap-2 max-w-md mx-auto">
          <Input
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>

      <Navigation />
    </main>
  )
}

