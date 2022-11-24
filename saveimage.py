from pyrebase import pyrebase
from model import vision_ai
import requests
from ritetag import RiteTagApi
def img_url(pat):
    config={
        "apiKey": "AIzaSyDVpkTeV5JQrLYDaMDvodzUXTRknqYRniA",
        "authDomain": "visionai-ba47c.firebaseapp.com",
        "projectId": "visionai-ba47c",
        "storageBucket": "visionai-ba47c.appspot.com",
        "messagingSenderId": "675252217978",
        "appId": "1:675252217978:web:ebfcde6854481e407033c3",
        "measurementId": "G-VPVXWCTYDX",
        "serviceAccount":"serive_account_fb.json",
        "databaseURL":"https://console.firebase.google.com/u/0/project/visionai-ba47c/database/visionai-ba47c-default-rtdb/data/~2F"
    }

    firebase = pyrebase.initialize_app(config)
    storage=firebase.storage()
    lis=pat.split('/')
    storage.child(lis[-1]).put(pat)
    url=storage.child(lis[-1]).get_url(None)
    return vision_ai(url)
    # access_token = '74100b25fe1382bcf5b51152493a30f38b5e073171c1'
    # client = RiteTagApi(access_token)
    # url = "https://api.ritekit.com/v1/stats/hashtag-suggestions-image?image="+url
    # payload={}
    # headers = {}
    # response = requests.request("GET", url, headers=headers, data=payload)
    # print(response.text)
