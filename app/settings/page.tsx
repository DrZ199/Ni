"use client"

import { useTheme } from "next-themes"
import { ArrowLeft } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Settings() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-dvh bg-background">
      <header className="flex items-center px-4 h-14 bg-purple-600 text-white">
        <Link href="/" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Settings</h1>
      </header>

      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between">
          <label htmlFor="notifications" className="text-lg">Notifications</label>
          <Switch id="notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="dark-mode" className="text-lg">Dark Mode</label>
          <Switch 
            id="dark-mode" 
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="sound" className="text-lg">Sound Effects</label>
          <Switch id="sound" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="vibration" className="text-lg">Vibration</label>
          <Switch id="vibration" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="compact" className="text-lg">Compact View</label>
          <Switch id="compact" />
        </div>
      </div>
    </div>
  )
}

