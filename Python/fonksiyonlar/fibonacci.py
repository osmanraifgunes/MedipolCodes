def fibonacci(kacakadar,mevcutSayilar):
    print(mevcutSayilar[1])
    if mevcutSayilar[1] < kacakadar:
        ucuncusayi = mevcutSayilar[0] + mevcutSayilar[1]
        mevcutSayilar.append( ucuncusayi)
        del mevcutSayilar[0]
        fibonacci(kacakadar,mevcutSayilar)


fibonacci(300,[1,1])
