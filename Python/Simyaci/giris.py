kitap = open(r"C:\Users\raif\Desktop\simyaci.txt","r",encoding="utf8")
sayfalar = kitap.read()
kelimeler = sayfalar.split()
kelimeSayilari = [["",0]]
for kelime in kelimeler:
    karsilastimmi = 0
    for element in kelimeSayilari:
        if element[0] == kelime:
            element[1] += 1
            karsilastimmi = 1
    if karsilastimmi == 0:
        kelimeSayilari.append([kelime,1])

kelimelerSirali = sorted(kelimeSayilari,key=lambda x: x[1])

for kelime in kelimelerSirali:
    if not kelime[0].istitle():

        kelimelerSirali.remove(kelime)
print(*kelimelerSirali ,sep="\n")
print(len(kelimelerSirali))