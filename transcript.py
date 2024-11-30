# from youtube_transcript_api import YouTubeTranscriptApi

# # Corrected video ID (remove invalid parts like `&t=997s`)
# video_id = "DCWcK4c-F8Q"

# # Function to fetch the transcript and save it to a file
# def get_transcript(video_id):
#     try:
#         # Fetch the transcript
#         transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        
#         # Combine the transcript texts into a single string
#         transcript = ' '.join([d['text'] for d in transcript_list])
        
#         # Save the transcript to a file
#         with open(f"{video_id}_transcript.txt", "w", encoding="utf-8") as file:
#             file.write(transcript)
        
#         print(f"Transcript saved to {video_id}_transcript.txt")
#     except Exception as e:
#         print(f"An error occurred: {e}")

# # Call the function
# get_transcript(video_id)
from youtube_transcript_api import YouTubeTranscriptApi
video_id = "jDg8DQl7ZeQ";
transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
transcript = ' '.join([d['text'] for d in transcript_list])
#print(transcript)

def create_and_replace(filename, input_text):
    """
    Creates a text file with the given filename and writes the input text
    with all single inverted commas replaced with \'
    """
    # Replace single inverted commas with \'
    processed_text = input_text.replace("'", "\'")
    
    # Write the processed text to the file
    with open(f"output.txt", 'w') as file:
        file.write(processed_text)
    


create_and_replace("output.txt", transcript)