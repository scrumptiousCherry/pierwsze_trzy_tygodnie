def max_z_trzech(a,b,c):
    try:
        a = int(a)
        b = int(b)
        c = int(c)
    except ValueError:
        return None
    if a >= b:
        if a >= c:
            return a
        else: 
            return c
    else:
        if b >= c:
            return b
        else:
            return c    
print(max_z_trzech(1,2,3))
print(max_z_trzech(3,2,1))
print(max_z_trzech(1,1,1))
print(max_z_trzech(0, -1, -1))
print(max_z_trzech('a', 'b', 'c'))

