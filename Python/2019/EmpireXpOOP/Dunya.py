import Oyuncu
import Ulke
import Renkler
import tkinter as tk
import random

class dunya(tk.Tk):
    def __init__(self):
        super().__init__()
        tamamButon = tk.Button(self, text="saldır")
        tamamButon.grid(row=0, column=12, padx=(10, 10))

    oyuncuSayisi = 0
    imparatorlar = 0
    ulkeSayisi = 10
    kitalar = []
    ulkeler = [[],[],[],[],[],[],[],[],[],[]]
    oyuncular = []
    aktifOyuncu = None

    def oyuncuEkle(self):
        for i in range(0, self.oyuncuSayisi):
            o = Oyuncu.oyuncu(self)
            o.grid(row=9-i, column=12, sticky=tk.NSEW)
            o.renk = Renkler.colors[str(i+1)]
            o.ekranaEkle()
            o.sira = i + 1
            self.oyuncular.append(o)
        self.aktifOyuncuSet()

    def aktifOyuncuSet(self):
        for o in self.oyuncular:
            o["background"] = "white"

        if self.aktifOyuncu == None:
            self.aktifOyuncu = self.oyuncular[0]
        else:
            if self.aktifOyuncu.sira == self.oyuncuSayisi:
                self.aktifOyuncu = self.oyuncular[0]
            else:
                self.aktifOyuncu = self.oyuncular[self.aktifOyuncu.sira]
        self.aktifOyuncu["background"] = "gray"

    def ulkeleriEkle(self):
        for i in range(0, self.ulkeSayisi):
            for j in range(0, self.ulkeSayisi):
                eklenecekUlke = Ulke.ulke(self,  "lbl" +  str(i) + str(j) )
                eklenecekUlke.grid(row=j, column=i, sticky=tk.NSEW)
                oyuncu = self.oyuncular[random.randint(0, len( self.oyuncular) - 1)]
                eklenecekUlke.renkVer(oyuncu.renk)
                self.ulkeler[i].append(eklenecekUlke)
                oyuncu.ulkeler.append(eklenecekUlke)

    def komsulariBelirle(self):
        for i in range(0, self.ulkeSayisi  ):
            for j in range(0, self.ulkeSayisi ):
                geciciUlke = self.ulkeler[i][j] #komşusu belirlenecek ülke
                if (i != 0):
                    geciciUlke.komsular.append(self.ulkeler[i-1][j])
                if (j != 0):
                    geciciUlke.komsular.append(self.ulkeler[i][j - 1])
                if (i != self.ulkeSayisi - 1):
                    geciciUlke.komsular.append(self.ulkeler[i + 1][j])
                if (j != self.ulkeSayisi - 1):
                    geciciUlke.komsular.append(self.ulkeler[i][j + 1])


