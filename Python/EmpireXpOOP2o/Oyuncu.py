import tkinter as tk

class oyuncu(tk.Label):
    def __init__(self, dunya):
        self.ulkeleri = []
        self.askerHakki = 3
        self.dunya = dunya
        self.renk = None
        self.sira = 1
        if (len(self.ulkeleri) / 3 > 3):
            self.askerHakki = len(self.ulkeleri) / 3
        super().__init__(master=self.dunya)


    def aktifHaleGetir(self):
        for o in self.dunya.oyuncular:
            o["bg"] = "gray"
        self["bg"] = "lightgray"
        self.dunya.aktifOyuncu = self;
    def saldiri(self, nereden, nereye):
        pass

    def tasima(self):
        pass

    def bonusHesapla(self,ulke,index, gezilenYerler):


        gezilenYerler.append(ulke.name)
        index += 1

        def komsuKontrol(komsu):
            try:
                gezilenYerler.index(komsu.name)
            except:
                if komsu != "" and ulke.renk == komsu.renk:
                    if index + ulke.komsuSayisiAyniRenk() > 4 and ulke.bonusHesaplandimi == 0:
                        self.askerHakki += 3
                        ulke.bonusIsaretle()
                    else:
                        self.bonusHesapla(komsu, index, gezilenYerler)

        komsuKontrol(ulke.solKomsu)
        komsuKontrol(ulke.ustKomsu)
        komsuKontrol(ulke.sagKomsu)
        komsuKontrol(ulke.altKomsu)

