class oyuncu():
    def __init__(self):
        self.ulkeleri = []
        self.askerHakki = 3
        if (len(self.ulkeleri) / 3 > 3):
            self.askerHakki = len(self.ulkeleri) / 3
    renk = ""


    def saldiri(self, nereden, nereye):
        pass

    def tasima(self):
        pass

    def bonusHesapla(self,ulke,count, gezilenYerler):
        gezilenYerler.append(ulke.name)
        count += 1

        try:
            gezilenYerler.index(ulke.sagKomsu.name)
        except:
            if ulke.sagKomsu != "" and ulke.renk == ulke.sagKomsu.renk and count < 4:
                self.bonusHesapla(ulke.sagKomsu, count,gezilenYerler)

        if count >= 4:
           self.askerHakki += 3