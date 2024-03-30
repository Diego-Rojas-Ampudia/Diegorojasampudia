
'open C:/Users/Diego/Desktop/WRFPLOT/ARWout_wrfout_d01_2023-03-11_00_00_00.ctl'
'set display color white'
'set clab masked'
'set mpdset hires'

'c'
'set grads off'
'set t 1'

'set lon 260 289'
'set lat -15 4'

'set lev 950'
'set gxout shaded'
'color 2 12 1 -kind white->white->orange->darkred'

'd sqrt(u*u+v*v)'

'set gxout stream'
'set strmden -2'
'set ccolor 15'
'd skip(u,1,1);v'

'cbarn 1'
'draw title Analisis de streamlines y Viento (m/s) - 950 hPa \Data analisis: 2023-03-11 00UTC'




