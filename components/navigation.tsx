"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, History, Settings, Info } from 'lucide-react'
import { cn } from "@/lib/utils"

const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'History', href: '/history', icon: History },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'About', href: '/about', icon: Info }
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex justify-around p-2 max-w-md mx-auto">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                  isActive 
                    ? "bg-purple-100 text-purple-600" 
                    : "bg-background text-muted-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span 
                className={cn(
                  "text-xs",
                  isActive ? "text-purple-600" : "text-muted-foreground"
                )}
              >
                {link.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

