import tkinter as tk
import random

renkler = ["red","blue","green","yellow"]
pencere = tk.Tk()

def askerEkle(girilenDeger,etiket):
    etiket["text"] =girilenDeger
    print(girilenDeger)

def ulkeSecildi(event):
    #event.widget["text"] = "deneme"
    askerPEnceresi = tk.Tk()
    bonusChecker(event.widget, event.widget.cget("background"))
    askerSayisi =  tk.Entry(askerPEnceresi);
    askerSayisi.pack()
    tk.Button(askerPEnceresi,text = "ekle", command = lambda : askerEkle(askerSayisi.get(),event.widget)).pack()
    askerPEnceresi.mainloop()

def bonusChecker(etiket, renk):
    x = etiket.grid_info()['column']
    y = etiket.grid_info()['row']
    ust = elementBulucu(x,y-1, renk)
    print(etiket._name)
    if ust:
        bonusChecker(ust,renk)
def elementBulucu(x,y,renk):
    for el in pencere.children:
        if (pencere.children[el].grid_info()['column'] == x
            and pencere.children[el].grid_info()['row'] == y
            and pencere.children[el].cget("background") == renk ):
            return  pencere.children[el]

for i in range(0,7):
    for j in range(0, 7):
        etiket = tk.Label(pencere,text = "1", name="label" +str(i)+str(j)  ,background = renkler[random.randint(0,3)],width= random.randint(3,5) , height= random.randint(3,5) )
        etiket.grid(row=i,column = j, sticky = tk.NSEW)
        etiket.bind("<Button-1>",func = ulkeSecildi)
pencere.mainloop()