export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { question } = req.body

  try {
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
    
    res.status(200).json({ answer: data })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

