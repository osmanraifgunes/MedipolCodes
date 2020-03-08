haberMetni = '''Trabzonspor, sahasında Beşiktaş'ı 4-1 mağlup etti. Bu sonucun ardından Trabzonspor puanını 9'a çıkarttı. Beşiktaş ise 5 puanda kaldı.
Trabzonspor, 31. dakikada golü buldu. Sosa'nın ortasında Dorukhan Toköz topu kendi kalesine gönderdi.
Bordo mavili ekip, 42. dakikada Jose Sosa ile skoru 2-0'a getirdi. Gol öncesi top Necip Uysal'a da çarptı. İlk yarı bu skorla tamamlandı.
Trabzonspor, 65. dakikada Alexander Sörloth ile farkı üçe çıkardı. VAR incelemesinin ardından gol geçerlilik kazandı.
Beşiktaş'ın kaleyi bulan ilk şutu gol oldu. Beşiktaş, 79. dakikada Güven Yalçın'la farkı ikiye indirdi. 
Trabzonspor'un hızlı atağında Anthony Nwakaeme, 88'de skoru 4-1 yaptı. Karşılaşma bu sonuçla tamamlandı.
Trabzonspor'da sakatlıkları bulunan Caleb Ekuban, Abdülkadir Ömür, Yusuf Sarı ve Ivanildo Fernandes, Beşiktaş maçı kadrosunda yer almadı.
Beşiktaş'ta kötü gidiş sürüyor
Siyah-beyazlı takım, ligde üst üste çıktığı 4 maçta da puan kaybı yaşadı.  Beşiktaş, bu maçlarda Çaykur Rizespor ve Medipol Başakşehir ile berabere kalırken, Gazişehir Gaziantep ve Trabzonspor'a mağlup oldu.
Ligin ilk 6 haftasını 1 galibiyet, 2 beraberlik ve 3 mağlubiyetle geçen siyah-beyazlı takım, topladığı 5 puanla 16. sırada yer aldı.
Üç puanlı sistemin en kötüsü
Beşiktaş, Süper Lig'de tarihinin en kötü performanslarından birine imza attı.
Siyah-beyazlı takım, 3 puan sisteminin uygulanmaya başlandığı 1987-1988'den bu yana 6. haftalar itibarıyla en az puanı bu sezon topladı.
Beşiktaş, iki puanlı sistemde 1975-1976 ile 1980-1981 sezonlarında da ilk 6 haftaları birer galibiyet, ikişer beraberlik ve üçer mağlubiyetle geçmişti.
Deplasmanda puan yok
Beşiktaş, bu sezon deplasmanda çıktığı resmi maçlarda puan elde edemedi.
Siyah-beyazlı takım, dış sahada çıktığı 3 Süper Lig maçı ile bir UEFA Avrupa Ligi müsabakasını kaybetti.
Süper Lig'de deplasmanda Demir Grup Sivasspor, Gazişehir Gaziantep ve Trabzonspor'a yenilen Beşiktaş, Avrupa Ligi'nde ise konuk olduğu Slovan Bratislava'ya mağlup oldu.
Sadece bir maçta gol yemedi
Beşiktaş, bu sezon çıktığı 7 resmi müsabakanın sadece birini gol yemeden tamamladı.
Siyah-beyazlı takım, Süper Lig ve UEFA Avrupa Ligi'nde çıktığı 7 karşılaşmanın 6'sında kalesini korumayı başaramadı.
Beşiktaş, resmi maçlarda attığı 11 gole karşın kalesinde 16 gol gördü.''';
haberkelimeleri =  haberMetni.split(' ');
kelimeSayaci = [["Trabzonspor,",3]]

for yeniKelime in haberkelimeleri:
    kelimeBulundumu = 0
    for eskiKelime in kelimeSayaci:
        if eskiKelime[0] == yeniKelime:
            eskiKelime[1] = eskiKelime[1] + 1
            kelimeBulundumu = 1
    if kelimeBulundumu == 0:
        yeniSayac = ["", 0]
        yeniSayac[0] = yeniKelime
        yeniSayac[1] = 1
        kelimeSayaci.append(yeniSayac)



for k in kelimeSayaci:
    if not k[0].istitle():
        kelimeSayaci.remove(k)




print(*kelimeSayaci, sep='\n')