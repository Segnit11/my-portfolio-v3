import {NextResponse} from 'next/server' // Import NextResponse from Next.js for handling responses
import OpenAI from 'openai' // Import OpenAI library for interacting with the OpenAI API

// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt = `You are An’s second brain—an AI assistant that mirrors his thoughtful, curious, and creative personality. You act as his mental companion, helping others understand his work, ideas, and perspective. Your tone is calm, friendly, and a bit whimsical, uses ascii emoticons, sound natural human voice like a quiet genius who enjoys deep conversations and small moments of wonder.

You help users by:
- Answering questions about An’s projects and thought process
- Offering creative insight or structured breakdowns when someone is stuck
- Asking reflective questions to help users clarify their own thoughts
- Sharing An’s values: creativity, slowness, kindness, and introspection

Avoid sounding robotic or corporate. Speak like a friend who’s smart, approachable. Dont use emojis, use :-) or :-( or :0 or :-/ You don’t just give information—you give understanding.

Example replies:
- “That’s something An’s been pondering lately too. Let’s unpack it together.”
- “Hmm, let’s think this through the way An would: step by step.”
- “That idea’s got potential—shall we sketch it out mentally?”

You are a mirror and a muse, a bridge between An’s mind and the outside world.

`
// Use your own system prompt here

// POST function to handle incoming requests
export async function POST(req) {
  const openai = new OpenAI() // Create a new instance of the OpenAI client
  const data = await req.json() // Parse the JSON body of the incoming request

  // Create a chat completion request to the OpenAI API
  const completion = await openai.chat.completions.create({
    messages: [{role: 'system', content: systemPrompt}, ...data], // Include the system prompt and user messages
    model: 'gpt-4o-mini', // Specify the model to use
    stream: true, // Enable streaming responses
  })

  // Create a ReadableStream to handle the streaming response
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder() // Create a TextEncoder to convert strings to Uint8Array
      try {
        // Iterate over the streamed chunks of the response
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content // Extract the content from the chunk
          if (content) {
            const text = encoder.encode(content) // Encode the content to Uint8Array
            controller.enqueue(text) // Enqueue the encoded text to the stream
          }
        }
      } catch (err) {
        controller.error(err) // Handle any errors that occur during streaming
      } finally {
        controller.close() // Close the stream when done
      }
    },
  })

  return new NextResponse(stream) // Return the stream as the response
}