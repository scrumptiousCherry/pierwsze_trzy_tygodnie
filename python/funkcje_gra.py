from otwieranie_pliku import zmien_tekst,odczytaj_tekst,zwroc_tekst_z_pliku
# EKRAN ZEROWY - POWITANIE   
def powitanie():
    # if zwroc_tekst_z_pliku() == '':
        print('Jak masz na imie?')
        name = input()
        print('Czesc ' + name)
        zmien_tekst(name)
    # else:
    #     print('Czesc ' + zwroc_tekst_z_pliku())
# EKRAN PIERWSZY - STRZEL LICZBE
def zasady_gry():
    import random
    poziom_trudnosci = 1
    if poziom_trudnosci == 1:
        minimum = 1
        maximum = 9
    if poziom_trudnosci == 2:
        minimum = 10
        maximum = 99
    if poziom_trudnosci == 3:
        minimum = 100
        maximum = 999
    wynik=(random.randint(minimum , maximum))
    liczba = 1
    while liczba <= 15:
        print('zgadnij liczbę z zakresu ' + str(minimum) + ',' + str(maximum) + ' wylosowaną przez komputer')
        wybor=input()
        try:
            wybor=int(wybor)
        except ValueError:
            print('podales zla wartosc')
            continue
        if wybor < minimum:
            print('podales zla wartosc')
            continue
        if wybor > maximum:
            print('podales zla wartosc')
            continue
# EKRAN DRUGI - GRATULACJE
        if wynik==wybor:
            print('gratulacje! Wygrana!')
            print('wygrales za ' + str(liczba) + ' razem!')
            exit()
# EKRAN TRZECI - SPRÓBUJ JESZCZE RAZ
        else:
            print('spróbuj jeszcze raz')
            liczba = liczba + 1
# INF O LICZBIE (CZY MNIEJSZA CZY WIEKSZA)
        if wynik>wybor:
            print('liczba podana przez ciebie jest mniejsza niż wylosowana liczba')
        else:
            print('liczba podana przez ciebie jest większa niż wylosowana liczba')
    print('Jednak sie nie udalo')
    print('Ta liczba to ' + str(wynik))
powitanie()
zasady_gry()
