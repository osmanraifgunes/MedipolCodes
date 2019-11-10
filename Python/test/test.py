fl = open(r'C:\code\MedipolCodes\Python\test\tiger.bmp','rb')

fl.seek(0)
fl.read(18)
imageWidth = int.from_bytes(fl.read(4), byteorder='little')
fl.read(32)

bitxperpixel = 24
resultData= bytearray()

fl.seek(0)
resultData += fl.read(54)

rowdata = bytearray( fl.read(imageWidth))
while len(rowdata)>0:
    for x in range(0, imageWidth - 1):
        try:
            #rowdata[x] = int( rowdata[x] / 3)
            rowdata[x] = int( (rowdata[x] + rowdata[x+1] + rowdata[x+2]) / 3)
        except:
            x= x+1
    resultData += rowdata
    rowdata = bytearray(fl.read(imageWidth))


with open('out.bmp', 'wb') as f:
    f.write(resultData)