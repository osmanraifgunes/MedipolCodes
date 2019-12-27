import tkinter as tk
import random

class ulke(tk.Label):
    def __init__(self, dunya, isim):
        super().__init__(master=dunya, text = 3, name = isim, width = random.randint(3,8), height = random.randint(2,4))
        self.komsular = []
        self.dunya = dunya
        self.arkaPlan = ""
        self.askerSayisi = 1
        self.bind("<Button-1>", self.ulkeSecildi)
        self.bonusHesaplandimi = 0

    def ulkeSecildi(self,event):
        if(self.dunya.aktifOyuncu.renk != self.arkaPlan):
            return

        askerSecmePencere = tk.Tk()
        hak = tk.Label(text = self.dunya.aktifOyuncu.eklemeSayisi, master=askerSecmePencere).grid(row=2,column =2)
        askerSayisi = tk.Entry(askerSecmePencere)
        askerSayisi.grid(row=0, column=0, padx=(10, 10), pady=(10, 10))
        tamamButon = tk.Button(askerSecmePencere, text="ekle", command=lambda: self.askerEkleme(askerSayisi.get(),askerSecmePencere))
        tamamButon.grid(row=0, column=1, padx=(10, 10), pady=(10, 10))
        askerSecmePencere.mainloop()

    def askerEkleme(self, askerSayisi, askerSecmePencere):
        if(self.dunya.aktifOyuncu.eklemeSayisi < int( askerSayisi)):
            print("asker fazla eklendi")
        else:
            askerSecmePencere.destroy()
            self['text'] = self['text'] + int(askerSayisi)
            self.dunya.aktifOyuncuSet()



    def renkVer(self,renk):
        self["background"] = renk
        self.arkaPlan = renk


    def isaretle(self):
        self.bonusHesaplandimi = 1
        def recursiveIsaretle(u, gezilenler):
            u.bonusHesaplandimi = 1
            gezilenler.append(u._name)
            for k in u.komsular:
                if k.arkaPlan == u.arkaPlan and not k.bonusHesaplandimi :
                    try:
                        gezilenler.index(k._name)
                    except:
                        recursiveIsaretle(k,gezilenler)

        recursiveIsaretle(self,[])
