# wybrać co komputer wylosowal, 
# poprosić użytkownika żeby wpisal liczbe, 
# porownac ja z tym co wylosowal komputer, 
# wybrac czy wygrana czy przegrana


import random
wynik=(random.randint(0,2))
# 0 = 'k'
# 1 = 'p'
# 2 = 'n'
print('Hej, wpisz k, p lub n')
print(wynik)
wartosc_odczytana = input()
wartosci_akceptowane = ['k', 'p', 'n']
# liczba = int(input()) 
# sprawdzam czy wpisana przez uzytkownika wartosc to k lub p lub n
if wartosc_odczytana in wartosci_akceptowane:
    # sprawdzam czy komputer wybral to samo co ja
    # wartosc_tekstowa = ''
    if wynik == 0: 
        wartosc_tekstowa = 'k'
    if wynik == 1:
        wartosc_tekstowa = 'p'
    if wynik == 2:
        wartosc_tekstowa = 'n'
    if wartosc_tekstowa == wartosc_odczytana:
        print('udalo sie')
else:
    print('zle wpisales')



# if wynik == liczba:
#     print('gratulacje! ' + 'wybrana liczba to ' + str(wynik))
# else:
#     print('sprobuj jeszcze raz')
    
