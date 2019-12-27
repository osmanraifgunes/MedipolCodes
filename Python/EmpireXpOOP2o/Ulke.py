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

        super().__init__(master=dunya, text= _name, background=_renk, width=random.randint(3, 8),
                         height=random.randint(2, 5), name =  _name)
    askerSayisi = 0

