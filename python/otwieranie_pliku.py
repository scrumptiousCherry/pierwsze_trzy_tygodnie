def odczytaj_tekst():
    plik = open('wiki.txt')
    try:
        tekst = plik.read()
    finally:
        plik.close()
    print(tekst)
    nowa_zmienna = tekst
    print(nowa_zmienna)

def zmien_tekst(inna_zmienna):
    cel = open('wiki.txt', 'w')
    cel.write(inna_zmienna)
    cel.close()

def zwroc_tekst_z_pliku():
    plik = open('wiki.txt')
    try:
        tekst = plik.read()
    finally:
        plik.close()
    return tekst


# odczytaj_tekst()
# zmien_tekst("nowy tekst ktory chcemy zapisac")
# odczytaj_tekst()
# zmien_tekst("1")
# odczytaj_tekst()
# zmien_tekst("2")
# zmien_tekst("3")
# odczytaj_tekst()

