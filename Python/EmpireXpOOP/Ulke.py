import tkinter as tk
import random
class ulke(tk.Label):
    def __init__(self, dunya, isim):
        super().__init__(master=dunya, text = "deneme", name = isim, width = random.randint(3,8), height = random.randint(2,4))
        self.bind("<Button-1>", self.ulkeSecildi)
    arkaPlan = ""
    askerSayisi = 1
    komsular= []
    def ulkeSecildi(event):
        pass
    def renkVer(self,renk):
        self["background"] = renk
        self.arkaPlan = renk
    def askerEkleme(self):
        pass
