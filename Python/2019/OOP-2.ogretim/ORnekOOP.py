import os

class OrnekSinif():
    __adi = "ilk sınıf"
    def __init__(self):
        self.ip = "192.168.1.1"
        self.adi = "örnek özelliği"
        self.__soyad = "örnek özelliği private"
        self.compExample = os.name

    def addegistirici(self, yenisim):
        self.adi = yenisim
    
    @property
    def soyad(self):
        return self.__soyad

    @soyad.setter
    def soyad(self,yenisoyadi):
        self.__soyad = yenisoyadi

class ornekKalitim(OrnekSinif):
    def __init__(self):
        super(ornekKalitim, self).__init__()
        baslamayasi = 8
    kalitilanSinif = "denenme kalitim özelliği"