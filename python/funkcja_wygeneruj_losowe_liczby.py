def wygeneruj_losowe_liczby(liczba):
    liczby=[]
    for element in range(0,liczba):
        # losujemy liczbe
        # dodajemy do listy wylosowana liczbe
        from random import randint
        liczby.append(randint(0,5))
    return liczby