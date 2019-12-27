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
            oyuncu = Oyuncu.oyuncu()
            oyuncu.renk = Renkler.colors[i]
            self.oyuncular.append(oyuncu)

    def komsulariBelirle(self):
        for i in self.ulkeler:
            for j in i:
                if(j.x>0):
                    j.ustKomsu = self.ulkeler[j.x-1][j.y]
                if (j.x<self.ulkeSayisi-2):
                    j.altKomsu = self.ulkeler[j.x+1][j.y]
                if(j.y>0):
                    j.solKomsu = self.ulkeler[j.x][j.y-1]
                if (j.y < self.ulkeSayisi - 2):
                    j.sagKomsu = self.ulkeler[j.x][j.y+1]


