import tkinter as tk
import random
import socket



colors = ["red","blue","orange","gray","white","purple","green"]

deger = ""
def enterValue(pencere2,newDeger):
    print(newDeger)
    pencere2.destroy()

def mouseClick( event ):
    enteredValue = tk.StringVar()
    pencere2 = tk.Tk()
    enteredValue.set("hello")
    print( event.widget.cget("text"))
    tk.Label(pencere2, text='').pack()
    mtn = tk.Entry(pencere2, textvariable=enteredValue)
    mtn.pack()
    btn = tk.Button(pencere2, text="tmm", command=lambda: enterValue(pencere2,mtn.get()))
    btn.pack()
    pencere2.mainloop()

def connectSocket():
    s = socket.socket()
    host = socket.gethostname()
    port = 12345
    s.connect((host, port))
    s.recv(1024)
    s.close()

def openSocket():
    s = socket.socket()
    host = socket.gethostname()
    port = 12345
    s.bind((host, port))

    s.listen(5)
    while True:
        c, addr = s.accept()
        print('Got connection from', addr)
        c.send('Thank you for connecting')
        c.close()


pencere = tk.Tk()
for i in  range(1,5):
    for j in range(1, 5):
        w = tk.Label(pencere, text=str(i) + "-" + str(j) ,bg=colors[random.randint(0, 6)],height = random.randint(3, 5)*2, width = random.randint(3, 5)*2)
        w.grid(row = j, column =i , sticky = tk.NSEW)
        w.bind("<Button>", mouseClick)
scCon = tk.Button(pencere,text = "connect",command = connectSocket)
scOpen = tk.Button(pencere,text = "ac",command = openSocket)
scCon.grid(row = 20 , column = 4)
scOpen.grid(row = 20 , column = 1)
pencere.mainloop()


