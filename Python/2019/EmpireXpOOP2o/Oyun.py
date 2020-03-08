import tkinter as tk
window = tk.Tk()
score = 0
def inst():
    t = tk.Label(window, text="Bu uygulamayı açıklayan yazı.")
    t.pack()
def start():
    root = tk.Tk()
    root.title("soru 1")
    q = tk.Label(root, text="İstanbul'un fethi")
    q.pack()
    a = tk.Label(root, text="1.) eski")
    a.pack()
    b = tk.Label(root, text="2.) yeni")
    b.pack()
    ans = tk.Entry(root, width=40)
    ans.pack()
start = tk.Button(window, command=start, text="Start")
start.pack()
instr = tk.Button(window, text="Instructions", command=inst)
instr.pack()
end = tk.Button(window, text="Exit", command=exit)
end.pack()
window.mainloop()