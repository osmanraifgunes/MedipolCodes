import base64
import io
import numpy as np
import builtins
import PIL.Image as PIL


def open(path):
    with builtins.open(path,"rb") as f:
        b64encode=base64.b64encode(f.read())
        b64decode=base64.b64decode(b64encode)
        b=io.BytesIO(b64decode)
        img=PIL.open(b)
        arr=np.asarray(img)
    return Image(arr)
    
class Image:

    def __init__(self,arr):
            self.__arr = arr

    def reshape(self,size):
        img=PIL.fromarray(self.__arr).resize(size)
        return Image(np.array(img))

    def save(self,path):
        img=PIL.fromarray(self.__arr)
        img.save(path)

    def asarray(self):
            return self.__arr

    def gray(self,method="F"):
        r=self.__arr[:,:,0]
        g=self.__arr[:,:,1]
        b=self.__arr[:,:,2]

        tmp=[]
        if method=="G": # Green Only
            tmp=g
        elif method=="F": # Float Algorithm
            tmp = (r*0.3+g*0.59+b*0.11).astype("uint8")

        result=[]
        for i in range(len(tmp)):
            for j in range(len(tmp[i])):
                result.append(tmp[i][j])
        return Image(np.reshape(result,(self.__arr.shape[0],self.__arr.shape[1])))

    def binary(self):
        im = self.gray("F").asarray() # gray
        threshold = 0
        for i in range(len(im)):
            for j in range(len(im[i])):
                threshold=threshold+im[i][j]
        threshold=threshold/(im.shape[0]*im.shape[1])
                    
        for i in range(len(im)):
            for j in range(len(im[i])):
                if im[i][j]<threshold:
                    im[i][j]=0
                else:
                    im[i][j]=255
        return Image(im)

    def show(self):
        PIL.fromarray(self.__arr).show()