from gtts import gTTS

# Get user input for text and filename
text = input("Enter the text you want to convert to speech: ")
filename = input("Enter the filename (without extension): ") + ".mp3"

# Generate speech
tts = gTTS(text, lang="en")

# Save as an MP3 file
tts.save(filename)

print(f"Audio file saved as {filename}")
