"""
Update the JS file.
"""
import requests

def file_request(fileobj, path):
    """Make a large request  This must provide
    a file object ``fileobj`` to copy the request into.
    """
    req = requests.get(path, stream=True)
    for block in req.iter_content(1024):
        fileobj.write(block)

with open("./js/scratchblocks-v4-min.js","w") as sb:
    file_request(sb, "https://raw.githubusercontent.com/scratchblocks/scratchblocks.github.io/master/js/scratchblocks-v4-min.js")

with open("./js/translations-v4-min.js","w") as sb:
    file_request(sb, "https://raw.githubusercontent.com/scratchblocks/scratchblocks.github.io/master/js/translations-v4-min.js")
