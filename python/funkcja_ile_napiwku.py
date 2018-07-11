def ile_napiwku(kwota):
    try:
        kwota = int(kwota)
    except ValueError:
        return None
    if kwota >= 30:
        if (kwota * 12 / 100) > 100:
            return 100
        else:
            return (kwota * 12 / 100)
    else:
        return 0

print(ile_napiwku(0))
print(ile_napiwku(100))
print(ile_napiwku(30))
print(ile_napiwku(29))
print(ile_napiwku(1000))
print(ile_napiwku(2000))
print(ile_napiwku(-100))
print(ile_napiwku('a'))

