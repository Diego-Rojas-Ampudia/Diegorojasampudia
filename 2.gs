
'open C:/Users/Diego/Desktop/WRFPLOT/ARWout_wrfout_d01_2023-03-11_00_00_00.ctl'
'set display color white'
'set clab masked'
'set mpdset hires'

'c'
'set grads off'
'set t 1'

'set lon 260 289'
'set lat -15 4'

'set lev 850'
'set gxout shaded'
'color 70 95 5 -kind white->white->ivory->lightgreen->mediumseagreen->green->darkgreen'
'd rh'

'set gxout vector'
'set ccolor 2'
'd skip(u,10,10);v'

'cbarn 1.1 1'
'draw title Analisis de Humedad Relativa (%) y Viento (m/s) - 950 hPa \Data analisis: 2023-03-11 00UTC'




