import replicate
import os
# import client
# replicate.Client(api_token='f6d2190cd1aeba5ab71341f85b332d3644100239')
# replicate.api_token=os.getenv('f6d2190cd1aeba5ab71341f85b332d3644100239')
# replicate.Client(api_token='f6d2190cd1aeba5ab71341f85b332d3644100239')
# headers = {"REPLICATE_API_TOKEN": "Bearer f6d2190cd1aeba5ab71341f85b332d3644100239"}
# replicate.default_client(api_token='f6d2190cd1aeba5ab71341f85b332d3644100239')
# REPLICATE_API_TOKEN='f6d2190cd1aeba5ab71341f85b332d3644100239'
model = replicate.models.get("rmokady/clip_prefix_caption")
version = model.versions.get("9a34a6339872a03f45236f114321fb51fc7aa8269d38ae0ce5334969981e4cd8")
output = version.predict(image="/static/uploads/akash.jpg")
print(output)