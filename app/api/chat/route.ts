import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { question } = await request.json()

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    const response = await fetch("https://huggingface.co/spaces/NelsonBot/NelBot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`
      },
      body: JSON.stringify({ inputs: question })
    })

    if (!response.ok) {
      throw new Error('Failed to fetch from Hugging Face')
    }

    const data = await response.json()
    return NextResponse.json({ answer: data })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

