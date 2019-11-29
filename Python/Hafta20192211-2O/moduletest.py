"""import  os
from Deneme import karesi
print('-' * 100)
#dn = __import__('Deneme')

print(karesi(3))"""
from PIL import Image
print(*dir(Image))

im = Image.open("resim.jpg")
im.effect_spread(10).show()