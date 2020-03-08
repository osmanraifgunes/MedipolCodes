import tkinter as tk
import Ulke
import random
import Oyuncu
import Renkler

class dunya(tk.Tk):
    def __init__(self):
        super().__init__()
    kitalar = []
    ulkeler = [[],[],[],[],[],[],[],[],[],[]]
    oyuncular = []
    ulkeSayisi = 10
    oyuncuSayisi = 0
    x = 0
    y = 0
    aktifOyuncu = None


    def ulkleriOlustur(self):
        for i in range(0,self.ulkeSayisi):
            for j in range(0, self.ulkeSayisi):
                o = self.oyuncular[random.randint(0, self.oyuncuSayisi-1)]
                u = Ulke.ulke(self, o.renk, "label" + str(i) + str(j))
                u.renk = o.renk
                u.grid(row=i, column=j, sticky=tk.NSEW)
                u.x = i
                u.y = j
                o.ulkeleri.append(u)
                self.ulkeler[i].append(u)

    def oyuncuEkle(self):
        for i in range(self.oyuncuSayisi):
            oyuncu = Oyuncu.oyuncu(self)
            oyuncu.renk = Renkler.colors[i]
            oyuncu["fg"] = oyuncu.renk
            oyuncu["bg"] = "gray"
            oyuncu["text"] = oyuncu.renk
            oyuncu.grid(row=i, column=12)
            oyuncu.sira = i+ 1
            self.oyuncular.append(oyuncu)
            self.oyuncular[0].aktifHaleGetir()

    def komsulariBelirle(self):
        for satir in self.ulkeler:
            for ulke in satir:
                if(ulke.x>0):
                    ulke.ustKomsu = self.ulkeler[ulke.x-1][ulke.y]
                if (ulke.x<self.ulkeSayisi - 1):
                    ulke.altKomsu = self.ulkeler[ulke.x+1][ulke.y]
                if(ulke.y>0):
                    ulke.solKomsu = self.ulkeler[ulke.x][ulke.y-1]
                if (ulke.y < self.ulkeSayisi - 1):
                    ulke.sagKomsu = self.ulkeler[ulke.x][ulke.y+1]


