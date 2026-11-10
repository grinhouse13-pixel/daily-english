export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "https://grinhouse13-pixel.github.io",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: cors
      });
    }

    try {
      const { text } = await request.json();

      if (!text || typeof text !== "string" || text.length > 500) {
        return new Response("Invalid text", {
          status: 400,
          headers: cors
        });
      }

      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${env.ELEVENLABS_VOICE_ID}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": env.ELEVENLABS_API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75
            }
          })
        }
      );

      if (!response.ok) {
        return new Response("ElevenLabs error", {
          status: response.status,
          headers: cors
        });
      }

      return new Response(response.body, {
        headers: {
          ...cors,
          "Content-Type": "audio/mpeg",
          "Cache-Control": "no-store"
        }
      });
    } catch (error) {
      return new Response("Server error", {
        status: 500,
        headers: cors
      });
    }
  }
};
