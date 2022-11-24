# from ritetag import RiteTagApi

# access_token = '74100b25fe1382bcf5b51152493a30f38b5e073171c1'
# client = RiteTagApi(access_token)

# def taggen(hlis):
#     for i in hlis:
#         stats = client.hashtag_stats([i])
#         for data in stats:
#             print('#{}: {} posts per hour'.format(data.hashtag, data.tweets))

import requests
from ritetag import RiteTagApi
import urllib
import urllib.parse

def hgen(url):
    url2=urllib.parse.quote_plus(url)
    # print(url2)
    access_token = 'c181a3370e9106886e0c3672edd10ec84208a5a32c61'
    client = RiteTagApi(access_token)
    url1 = "https://api.ritekit.com/v1/stats/hashtag-suggestions-image?image="+url2
    print(url1)
    payload={"Authorization" : "c181a3370e9106886e0c3672edd10ec84208a5a32c61"}
    headers = {}
    response = requests.request("GET", url1, headers=headers, data=payload)
    print(response.text)