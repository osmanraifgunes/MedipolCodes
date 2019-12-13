import tkinter as tk

class ulke(tk.Label):
    def __init__(self, dunya,renk):
        super().__init__(master=dunya, text= "merhaba", background=renk)

        pass

    askerSayisi = 0
    sagKomsu = ""
    solKomsu = ""
    altKomsu = ""
    ustKomsu = ""