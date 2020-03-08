"""
fdsfdsfdf
fdsfdsfdf
fdsfdsfdf
fdsfdsfdf

"""
import os

print(dir(3),sep='\n')
harfler = "abcçdefgğhıijklmnoöprsştuüvyz"
cevrim = {i: harfler.index(i) for i in harfler}
isimler = ["ahmet", "ışık", "ismail", "çiğdem", "can", "şule", "iskender"]
help(os)
#exit();
eval('print(2*4)')

print(sorted(isimler, key = lambda kelime:cevrim.get(kelime[0]) ))

print('---------------------------------'*3)
liste = [1, 4, 5, 4, 2, 9, 10]
print(*map(lambda x: x*x ,liste))


def karesi(n):
    return n ** 2