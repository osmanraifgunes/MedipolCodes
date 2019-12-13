import Oyuncu
import Ulke
import Renkler
import tkinter as tk
import random

class dunya(tk.Tk):
    def __init__(self):
        super().__init__()
    oyuncuSayisi = 0
    imparatorlar = 0
    ulkeSayisi = 10
    kitalar = []
    ulkeler = [[],[],[],[],[],[],[],[],[],[]]
    oyuncular = []
    def oyuncuEkle(self):
        for i in range(0, self.oyuncuSayisi):
            o = Oyuncu.oyuncu()
            o.renk = Renkler.colors[str(i+1)]
            self.oyuncular.append(o)

    def ulkeleriEkle(self):
        for i in range(0, self.ulkeSayisi):
            for j in range(0, self.ulkeSayisi):
                eklenecekUlke = Ulke.ulke(self,  "lbl" +  str(i) + str(j) )
                eklenecekUlke.grid(row=j, column=i, sticky=tk.NSEW)
                oyuncu = self.oyuncular[random.randint(0, len( self.oyuncular) - 1)]
                eklenecekUlke.renkVer(oyuncu.renk)
                self.ulkeler[i].append(eklenecekUlke)
                if (i != 0):
                    eklenecekUlke.komsular.append(self.ulkeler[i-1][j])
                    self.ulkeler[i-1][j] = eklenecekUlke
                if (j != 0):
                    self.ulkeler[i][j-1] = eklenecekUlke
                    eklenecekUlke.komsular.append(self.ulkeler[i][j - 1])
                oyuncu.ulkeler.append(eklenecekUlke)
        self.mainloop()

