# sayi = input("sayi girin")
# sayi = int(sayi)
# for i in range(sayi):
#    print(i, end=',')

"""sayi = input("sayi girin")
sayi = int(sayi)
def sayiyazici(mevcutSayi):
    if sayi > mevcutSayi:
        print(mevcutSayi)
        sayiyazici(mevcutSayi+1)

sayiyazici(0)"""

anahtarKelime = input("Aranacak kelimeyi girin : ")
aranacakDizin = input("Aranacak dizini girin : ")
import os
##hasan ali
def Arayici(dizin):
    alanlar = os.listdir(dizin)
    for x in alanlar:
        if os.path.isfile(dizin + "\\" + x):
            if x.find('.py') > -1 and open(dizin + "\\" + x,"r", encoding="utf8").read().count(anahtarKelime) > 0:
                print(dizin + "\\" + x)
        else:
            Arayici(dizin + "\\" + x)


Arayici(aranacakDizin)
