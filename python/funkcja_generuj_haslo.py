from funkcja_wygeneruj_losowe_liczby import wygeneruj_losowe_liczby
def wygeneruj_haslo(liczba_znakow):
    znaki=['s','5','g','^','y','t']
    losowe_liczby = wygeneruj_losowe_liczby(liczba_znakow) 
    losowe_znaki = []
    for element in losowe_liczby:
        losowy_znak = znaki[element]
        losowe_znaki.append(losowy_znak)
    return(''.join(losowe_znaki))


print(wygeneruj_haslo(10))
print(wygeneruj_haslo(1))
print(wygeneruj_haslo(8))
print(wygeneruj_haslo(-1))
print(wygeneruj_haslo(24))
print(wygeneruj_haslo(0))
