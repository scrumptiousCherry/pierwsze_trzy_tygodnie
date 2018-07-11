liczba = 1
while liczba <= 3:
   print('teraz wprowadź liczbę')
   odczytana_liczba = int(input())
   print('wpisałeś liczbę')
   print(odczytana_liczba)
   liczba = liczba + 1
   if odczytana_liczba == 5:
       print('wygrałeś!')
       break
   else:
       print('spróbuj jeszcze raz')
 
print(liczba)

# while True:
    # print('abc')
