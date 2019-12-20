import tkinter as tk
import random
class ulke(tk.Label):
    def __init__(self, dunya, isim):
        super().__init__(master=dunya, text = isim, name = isim, width = random.randint(3,8), height = random.randint(2,4))
        self.komsular = []
        self.arkaPlan = ""
        self.askerSayisi = 1
        self.bind("<Button-1>", self.ulkeSecildi)
        self.bonusHesaplandimi = 0
    def ulkeSecildi(event):
        pass

    def renkVer(self,renk):
        self["background"] = renk
        self.arkaPlan = renk

    def askerEkleme(self):
        pass

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
