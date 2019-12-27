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

    def bonusHesapla(self,ulke,index, gezilenYerler):
        gezilenYerler.append(ulke.name)
        index += 1

        def komsuKontrol(komsu):
            try:
                gezilenYerler.index(komsu.name)
            except:
                if komsu != "" and ulke.renk == komsu.renk and index < 4:
                    self.bonusHesapla(komsu, index, gezilenYerler)

        komsuKontrol(ulke.solKomsu)
        komsuKontrol(ulke.ustKomsu)
        komsuKontrol(ulke.sagKomsu)
        komsuKontrol(ulke.altKomsu)

        if index >= 4:
           self.askerHakki += 3