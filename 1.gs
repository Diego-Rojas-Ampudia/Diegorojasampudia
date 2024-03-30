
'open C:/Users/Diego/Desktop/WRFPLOT/ARWout_wrfout_d01_2023-03-11_00_00_00.ctl'
'set display color white'
'set clab masked'
'set mpdset hires'
'set grads off'
'c'
'set lon 260 289'
'set lat -15 4'

* Definir la variable acumulada
'define pp_accum = rainnc'

* Loop para sumar los diferentes tiempos
'set t 2 24'
'd pp_accum = add(pp_accum, pp)'

* Visualizar la acumulación de precipitación
'set gxout shaded'
#'color 70 95 5 -kind white->white->ivory->lightgreen->mediumseagreen->green->darkgreen'
'd pp_accum'

#'cbarn 1.1 1'
#'draw title Acumulación de Precipitación (mm) - Superficie \Data analisis: 2023-03-11 00UTC'
