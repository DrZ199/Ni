import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function History() {
  return (
    <div className="min-h-dvh bg-background">
      <header className="flex items-center px-4 h-14 bg-purple-600 text-white">
        <Link href="/" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">History</h1>
      </header>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <Input placeholder="Search history..." className="flex-1" />
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="symptoms">Symptoms</SelectItem>
              <SelectItem value="treatments">Treatments</SelectItem>
              <SelectItem value="development">Development</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-8 text-muted-foreground">
          <p>No chat history yet</p>
        </div>
      </div>
    </div>
  )
}

