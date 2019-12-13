class oyuncu():
    def __init__(self):
        if self.ulkeSayisi / 3 < 3 :
            self.eklemeSayisi = 3
        else:
            self.eklemeSayisi = self.ulkeSayisi / 3

    eklemeSayisi = 3
    ulkeSayisi = 0
    renk = ""
    kartlar = []
    ulkeler = []
    kitalar = []

    def ulkeSecildi(event):
        pass

    def saldiri(self):
        pass

    def kartKullan(self):
        pass

    def askerTasima(self,nereden,nereye):
        pass

    def bonusHesapla(self):
        for u in self.ulkeler:
            print(u.arkaPlan)