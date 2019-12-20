import Dunya


dunya = Dunya.dunya()
dunya.oyuncuSayisi = 4
dunya.oyuncuEkle()
dunya.ulkeleriEkle()
dunya.komsulariBelirle()

for o in dunya.oyuncular:
    for u in o.ulkeler:
        if (not u.bonusHesaplandimi):
            o.bonusHesapla(1,u,[])

for o in dunya.oyuncular:
    print(o.renk , " " , o.eklemeSayisi)
dunya.mainloop()