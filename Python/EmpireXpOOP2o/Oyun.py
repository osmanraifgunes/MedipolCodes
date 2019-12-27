import Dunya

game = Dunya.dunya()
game.oyuncuSayisi = 3
game.oyuncuEkle()
game.ulkleriOlustur()
game.komsulariBelirle()

for o in game.oyuncular:
    for u in o.ulkeleri:
        o.bonusHesapla(u, 0, [])
for o in game.oyuncular:
    print(o.renk, " ", o.askerHakki)
game.mainloop()
