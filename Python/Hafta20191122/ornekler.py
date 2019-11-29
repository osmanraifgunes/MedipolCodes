""""
bunu biz yazdık
"""

"""harfler = "abcçdefgğhıijklmnoöprsştuüvyz"
çevrim = {i: harfler.index(i) for i in harfler}
isimler = ["ahmet", "ışık", "ismail", "çiğdem", "can", "şule", "iskender"]



print(sorted(isimler, key= lambda eleman: çevrim.get(eleman[0])))"""

l = [4, 25, 100, 529, 9, 36]

def kareal (eleman):
    return  eleman*eleman
print(*map(kareal,l))
print(kareal(2))

print(*map(lambda sayı: sayı ** 2, l))

def kareal2(sayi):
    print(sayi*sayi)