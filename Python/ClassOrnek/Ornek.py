class deneme:
    __globalOzellik =2
    def __init__(self):
        self.acilis = "merhaba dünya"
        self.__globalOzellik = 5

class deneme2(deneme):
    def __init__(self):
        super(deneme2, self).__init__()
        self.__globalOzellik = 5
        print ('merhaba dünya 2')

    @property
    def globalOzellikGetter(self):
        return self.__globalOzellik

    @globalOzellikGetter.setter
    def globalOzellikSetter(self,yeni_isim):
        print (yeni_isim)
        self.__globalOzellik = yeni_isim