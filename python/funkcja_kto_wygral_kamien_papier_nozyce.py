def kto_wygral_kamien_papier_nozyce(odp_A, odp_B):
    odp_A = odp_A.lower()
    odp_B = odp_B.lower()
    pula_odp = ['kamien','papier','nozyczki']
    if odp_A in pula_odp and odp_B in pula_odp:
        if odp_A == 'kamien':
            if odp_B == 'kamien':
                print('remis')
            if odp_B == 'papier':
                print('papier')
            if odp_B == 'nozyczki':
                print('kamien')
        if odp_A == 'papier':
            if odp_B == 'kamien':
                print('papier')
            if odp_B == 'papier':
                print('remis')
            if odp_B == 'nozyczki':
                print('nozyczki') 
        if odp_A == 'nozyczki':
            if odp_B == 'kamien':
                print('kamien')
            if odp_B == 'papier':
                print('nozyczki')
            if odp_B == 'nozyczki':
                print('remis')
    else:
        print('blad')

kto_wygral_kamien_papier_nozyce('kamien','papier')
kto_wygral_kamien_papier_nozyce('kamien','kamien')
kto_wygral_kamien_papier_nozyce('papier','nozyczki')
kto_wygral_kamien_papier_nozyce('bla','bla')
kto_wygral_kamien_papier_nozyce('bla','kamien')
kto_wygral_kamien_papier_nozyce('kamien','nozyczki')
kto_wygral_kamien_papier_nozyce('Kamien','Papier')
kto_wygral_kamien_papier_nozyce('Kamien','bla')