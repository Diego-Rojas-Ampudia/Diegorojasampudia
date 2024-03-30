RELACION DE MEZCLA
'set lev'level 
'define tc= t-273'
'define es=6.11*pow(10,(7.5*tc/(237.5+tc)))'
'define ea=es*rh/100'
'define mixr=622*ea/('level'-ea)'
'set gxout shaded'
'd smth9(mixr)'

'set gxout contour'
'set clab off'
'set cthick 5'
'set cmin 4'