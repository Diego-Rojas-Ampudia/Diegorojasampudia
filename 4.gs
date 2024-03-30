
'open C:/Users/Diego/Desktop/WRFPLOT/ARWout_wrfout_d01_2023-03-11_00_00_00.ctl'
'set display color white'
'set clab masked'
'set mpdset hires'

'c'
'set grads off'
'set t 2'

'set lon 260 289'
'set lat -15 4'

'set gxout shaded'
'color 1006 1018 2'
#'colormaps -flipped -l 1000 1020 4 -map b2r'
'd slp'

'set lev 950'
'set gxout vector'
'set ccolor 15'
'd skip(u,8,8);v'

'cbarn 0.8 1'
'draw title Analisis de presion a nivel del mar y Viento (m/s) - 950 hPa \Data analisis: 2023-03-11 00UTC'

** siempre poner reset antes de correr **