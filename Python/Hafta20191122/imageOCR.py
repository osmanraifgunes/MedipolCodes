import pyocr
import pyocr.builders
import sys
from PIL import Image


tools = pyocr.get_available_tools()
if len(tools) == 0:
    print("No OCR tool found")
    sys.exit(1)
# The tools are returned in the recommended order of usage
tool = tools[0]

lng = tool.get_available_languages()

txt = tool.image_to_string(
    Image.open('resim2.jpg'),
    lang='eng',
    builder=pyocr.builders.TextBuilder()
)

"""txt = tool.image_to_string(
    open(r"C:\code\MedipolCodes\Python\Hafta20191122\resim.jpg"),
    lang='eng',
    builder=pyocr.builders.TextBuilder()
)"""
print(txt)