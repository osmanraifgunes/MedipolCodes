import tkinter as tk

import Ornek
orn = Ornek.deneme2()
"""print (type(orn))
print (orn.acilis)"""
#orn.globalOzellik3 = 123
print (orn.globalOzellikGetter)
#print (orn.globalOzellik3)

#print (Ornek.deneme2.globalOzellik)

def topla(sayi1,sayi2):
    return  sayi1 + sayi2
orn.globalOzellikSetter = topla(5,55)

print (orn.globalOzellikGetter)

pencere = tk.Tk()
pencere.geometry('200x70')
etiket = tk.Label(text='Merhaba Zalim Dünya')
etiket.pack()
düğme = tk.Button(text='Tamam', command=pencere.destroy)
düğme.pack()
pencere.mainloop()
