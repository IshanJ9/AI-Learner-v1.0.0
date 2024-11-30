from youtube_transcript_api import YouTubeTranscriptApi

transcript_list = YouTubeTranscriptApi.get_transcript("JpYA7WXkHyI")
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
    with open(filename, 'w') as file:
        file.write(processed_text)
    


create_and_replace("output.txt", transcript)


    

