import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-dvh bg-background">
      <header className="flex items-center px-4 h-14 bg-purple-600 text-white">
        <Link href="/" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">About</h1>
      </header>

      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>About NelsonBot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              NelsonBot is a specialized pediatric knowledge assistant that provides precise,
              evidence-based answers sourced exclusively from the Nelson Textbook of Pediatrics.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-3">Key Areas</h2>
              <ul className="space-y-2">
                <li>• Symptoms & Diagnoses</li>
                <li>• Treatment Protocols</li>
                <li>• Developmental Milestones</li>
                <li>• Preventive Care</li>
                <li>• Evidence-based Guidance</li>
                <li>• Detailed Citations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Consultations</p>
                  <p className="text-3xl font-bold text-purple-600">0</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Saved References</p>
                  <p className="text-3xl font-bold text-purple-600">0</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Ideal for healthcare professionals seeking quick, reliable pediatric information.
            </p>
            
            <p className="text-sm text-muted-foreground">
              Version 1.0.0
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

