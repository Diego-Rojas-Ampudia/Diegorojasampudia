
'open C:/Users/Diego/Desktop/WRFPLOT/ARWout_wrfout_d01_2023-03-11_00_00_00.ctl'
'set display color white'
'set clab masked'
'set mpdset hires'
'c'
'set grads off'
'set t 2'

'set lon 260 289'
'set lat -15 4'
'set lev 500'

'set gxout shaded'
'color -10 10 2'
'd hcurl(u,v)*1e5'

'set gxout stream'
'set strmden -2'
'set ccolor 15'
'd skip(u,1,1);v'

'cbarn 0.9 1'
'draw title Analisis de streamlines y Vorticidad relativa (1e-5) - 500 hPa \Data analisis: 2023-03-11 00UTC'

** siempre poner reset antes de correr **