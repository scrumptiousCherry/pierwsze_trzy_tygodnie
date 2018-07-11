print('jak masz na imię?')
name=input()
print('cześć '+name)
# name='Wiki'
import random
wynik=(random.randint(1,10))
print('losujemy liczbę z zakresu 1-10, a ty musisz ją zgadnąć')
print('strzel liczbę')




wybor=input()
wybor=int(wybor)
if wynik==wybor:
    print('gratulacje ' +name+ ' Wygrana!')
    exit()
else:
    print('spróbuj jeszcze raz')
if wynik>wybor:
    print('liczba podana przez ciebie jest mniejsza niż wylosowana liczba')
else:
    print('liczba podana przez ciebie jest większa niż wylosowana liczba')
print('podaj liczbę jeszcze raz')




wybor=input()
wybor=int(wybor)
if wynik==wybor:
    print('gratulacje ' +name+ '! Wygrana!')
    exit()
else:
    print('spróbuj jeszcze raz')
if wynik>wybor:
    print('liczba podana przez ciebie jest mniejsza niż wylosowana liczba')
else:
    print('liczba podana przez ciebie jest większa niż wylosowana liczba')
print('podaj liczbę jeszcze raz')



    
wybor=input()
wybor=int(wybor)
if wynik==wybor:
    print('gratulacje ' +name+ ' Wygrana!')
    exit()
else:
    print('spróbuj jeszcze raz')
if wynik>wybor:
    print('liczba podana przez ciebie jest mniejsza niż wylosowana liczba')
else:
    print('liczba podana przez ciebie jest większa niż wylosowana liczba')
print('wylosowana liczba to ' + str(wynik))
