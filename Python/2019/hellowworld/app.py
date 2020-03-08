#for i in range(5):
#    print(r"Raif Güneş'in \nilk uygulaması")

#dosya = open("merhaba.txt","w",encoding="utf-8")
#print("merhaba dünya",file=dosya)
#dosya.close()

#dosya = open("merhaba.txt","r",encoding="utf-8")
#satir = dosya.readline()
#print(satir)
#print("xyzt"[-1])

uzunluk = input("bir sayi girin: \n")
#print(type(uzunluk))
uzunluk = int(uzunluk);
#print(type(uzunluk))

tmpUzunluk = uzunluk
while uzunluk>0:
    uzunluk = uzunluk -1
    print("* " * tmpUzunluk)
