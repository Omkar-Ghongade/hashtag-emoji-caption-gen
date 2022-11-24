import os, io
from google.cloud import vision
from google.cloud.vision_v1 import types
import pickle

def vision_ai(url):
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'round-music-367807-47f151f50038.json'

    client  = vision.ImageAnnotatorClient()
    image = types.Image()
    image.source.image_uri = url

    # label detetction
    response_label = client.label_detection(image=image)
    lis=[]
    for label in response_label.label_annotations:
        # print(label.description)
        lis.append(label.description.replace(" ",""))

    ans=[]
    for l in lis:
        ans.append('#{}'.format(l))
    # print(ans)
    return ans
