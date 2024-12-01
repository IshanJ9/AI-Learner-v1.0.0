from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/receive_url', methods=['POST'])
def receive_url():
    # Extract the URL from the JSON payload
    data = request.json
    url = data.get('url', '')
    print(f"Received URL: {url}")

    try:
        # Extract video ID from the YouTube URL
        video_id = url.split('v=')[1].split('&')[0]

        # Fetch the transcript using the video ID
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        transcript = ' '.join([d['text'] for d in transcript_list])
        print(transcript)

        # Return the transcript as a JSON response
        return jsonify({"success": True, "transcript": transcript})
        
    except Exception as e:
        # Handle errors (e.g., invalid URL, no transcript available)
        return jsonify({"success": False, "error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
