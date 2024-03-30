'sdfopen /home/escarlette/Escritorio/salidas/imerg1.nc'


'set t 1'

#say lonww lonee
'set parea 1.2 10.1 0.95 7.6'
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 1'
'set ylint 1'
'set lon -83.1452 -78.3852'
'set lat -7.21138 -2.75138'
*'set mpdset hires'
'cc

'set grads off'

******
'set vpage 0 11 0 8.5'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 1'
'set ylint 1'

'set gxout shaded'
*'color2 0.1 3 0.3 -kind white->greenyellow->blue'
'd gpm_3imerghhe_0'
'cbarn'


*****
###


'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.35 Precipitacion (mm)'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 3.4 8.10 IMERG:'

'set string 1 c 10 0'



'set line 1 1 3'
*'draw shp peru_dpto.shp'
'draw shp peru_prov.shp'


'!mkdir -p /home/escarlette/Versoes/Figuras/IM_'fec'/PP/'
'gxprint /home/escarlette/Versoes/Figuras/IM'fec'/PP/PP_'fe'_'hora'UTC.png x1024 y768'






