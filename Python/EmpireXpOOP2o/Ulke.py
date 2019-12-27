import tkinter as tk
import random


class ulke(tk.Label):
    def __init__(self, dunya, _renk, _name):
        self.sagKomsu = ""
        self.solKomsu = ""
        self.altKomsu = ""
        self.ustKomsu = ""
        self.renk = _renk
        self.name = _name
        self.dunya = dunya
        self.bonusHesaplandimi = 0
        self.askerSayisi = 3

        super().__init__(master=dunya, text= self.askerSayisi, background=_renk, width=random.randint(3, 8),
                         height=random.randint(2, 5), name =  _name, )

        self.bind("<Button-1>",func = self.ulkeSecildi)

    def bonusIsaretle(self):
        self.bonusHesaplandimi = 1

        def bonusIsaretleRec(ulke):
            ulke.bonusHesaplandimi = 1
            def komsuIsaretle(komsu):
                if komsu != "" and komsu.bonusHesaplandimi == 0 and komsu.renk == ulke.renk:
                    bonusIsaretleRec(komsu)
            komsuIsaretle(ulke.sagKomsu)
            komsuIsaretle(ulke.solKomsu)
            komsuIsaretle(ulke.altKomsu)
            komsuIsaretle(ulke.ustKomsu)

        bonusIsaretleRec(self)

    def komsuSayisiAyniRenk(self):
        komsuSayisi= 0
        if self.sagKomsu != "" and self.sagKomsu.renk == self.renk:
            komsuSayisi += 1
        if self.solKomsu != ""  and self.solKomsu.renk == self.renk:
            komsuSayisi += 1
        if self.altKomsu != ""  and self.altKomsu.renk == self.renk:
            komsuSayisi += 1
        if self.ustKomsu != ""  and self.ustKomsu.renk == self.renk:
            komsuSayisi += 1
        return komsuSayisi

    def ulkeSecildi(self, event):
        if (self.renk != self.dunya.aktifOyuncu.renk):
            return
        askerPEnceresi = tk.Tk()
        askerSayisiKutu = tk.Entry(askerPEnceresi);
        askerSayisiKutu.pack()
        tk.Button(askerPEnceresi, text="ekle", command=lambda: self.askerEkle(askerSayisiKutu.get(),askerPEnceresi)).pack()
        askerPEnceresi.mainloop()

    def askerEkle(self, sayi, pencere):
        if (int(sayi) > self.dunya.aktifOyuncu.askerHakki):
            print("asker hakkın fazla")
            return

        self.askerSayisi += int(sayi)
        self["text"] = self.askerSayisi
        if(self.dunya.oyuncuSayisi == self.dunya.aktifOyuncu.sira):
            self.dunya.oyuncular[0].aktifHaleGetir()
        else:
            self.dunya.oyuncular[self.dunya.aktifOyuncu.sira].aktifHaleGetir()

        pencere.destroy()

