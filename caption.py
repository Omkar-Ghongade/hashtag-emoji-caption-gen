import os
import openai

openai.api_key = os.getenv("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")

response = openai.Completion.create(
  model="text-davinci-002",
  prompt="Write a catchy twitter tweet for sentence : \"a race track with a bunch of cars on it\".\n\nA race track with a bunch of cars on it is the best place to be on a Saturday!",
  temperature=0.7,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)