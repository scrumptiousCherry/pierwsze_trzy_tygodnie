def czy_parzysta(liczba):
    if liczba == None:
        return False
    if liczba % 2 == 0:
        return True
    return False

def odczytaj_liczbe():
    print('poprosze o liczbe')
    cos_prostego = input()
    try:
        return int(cos_prostego)
    except ValueError:
        return None
    
def tekst_parzysta():
    cyfra = odczytaj_liczbe()
    parzysta = czy_parzysta(cyfra)
    if parzysta == True:
        print('ta liczba jest parzysta')
    else:
        print('ta liczba nie jest parzysta')
# print(parzysta)
tekst_parzysta()
# czy_parzysta('k')
# print(czy_parzysta(2))
# wynik = czy_parzysta(3)
# print(wynik)

# print(cyfra)
# try:
#     int('')
# except ValueError:
#     print('ej zle podales tekst')

