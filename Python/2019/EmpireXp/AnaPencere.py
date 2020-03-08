import tkinter as tk
import random
colors = ["blue","red","green","orange","yellow","brown"]
pencere = tk.Tk()
girilenDeger = 0
secilenLabel = ""
size = 10
kitaSayaci = 0

def askerEkle(secilenLabel,askerSayisi):
    pencere.children[secilenLabel]['text'] = askerSayisi

def bonusKontrol(labelAdi):
    global kitaSayaci
    print(kitaSayaci)
    kontrol = False
    element = pencere.children[labelAdi]
    x = element.grid_info()['column']
    y = element.grid_info()['row']
    while(not kontrol):
        renk = element.cget('background')
        sonuc1 = elementByKonum(x,y-1,renk)
        sonuc2 = elementByKonum(x,y+1,renk)
        sonuc3 = elementByKonum(x+1,y,renk)
        sonuc4 = elementByKonum(x - 1, y, renk)

        if sonuc1:
            kitaSayaci = kitaSayaci + 1;
            bonusKontrol(sonuc1)
        else:
            kitaSayaci= 0
        break



def elementByKonum(x,y,renk):
    for el in pencere.children:
        nesne = pencere.children[el]
        if(nesne.grid_info()['column'] == x and nesne.grid_info()['row'] == y and renk == nesne.cget('background')):
            return el

def ulkeSecildi(event):
    secilenLabel = event.widget._name
    askerSecme = tk.Tk()
    bonusKontrol(secilenLabel)
    sayi =  tk.Entry(askerSecme)
    sayi.grid(row=0, column=0, padx=(10,10), pady=(10,10))
    tamamButon = tk.Button(askerSecme,text="ekle" , command = lambda : askerEkle(secilenLabel, sayi.get()))
    tamamButon.grid(row=0, column=1, padx=(10,10), pady=(10,10))
    askerSecme.mainloop()

for i in range(0,size):
    for j in range(0,size):
        etiket = tk.Label(pencere, font =("arial", 16),  name = "lbl" +  str(i) + str(j) , text="1", background = colors[random.randint(0,5)],width = random.randint(1,3) ,height = random.randint(1,3))
        etiket.grid(row=j,column=i, sticky = tk.NSEW)
        etiket.bind("<Button-1>",ulkeSecildi)
pencere.mainloop()

