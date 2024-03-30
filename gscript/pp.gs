'sdfopen /home/escarlette/Versoes/Eta_install/out/etaPiura2km/netcdf/2023102700/C00/Eta02_C00_PREC_2023102700_acum24h.nc'

*i=1


'set t 1'
'q time'
linha = sublin(result,1)
tempo = subwrd(linha,3)
res=subwrd(result,3)
hor=substr(res,1,2)
di=substr(res,4,2)
me=substr(res,6,3)
an=substr(res,9,4)
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''

'q dims'
#(w/n+) (s/e-)
lat=sublin(result,3)
lats=subwrd(lat,6)
#say lats
latn=subwrd(lat,8)
latss=lats+0.5
latnn=latn-0.5
#say latss latnn
lon=sublin(result,2)
lonw=subwrd(lon,6)
lone=subwrd(lon,8)
lonww=lonw+0.5
lonee=lone-0.5

while (i<=24)

'set t 1'
'q time'
linha = sublin(result,1)
tempo = subwrd(linha,3)
res=subwrd(result,3)
hor=substr(res,1,2)
di=substr(res,4,2)
me=substr(res,6,3)
an=substr(res,9,4)
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''

'set t 'i'' 
*********************************************************
'q time'
linha = sublin(result,1)
tempo = subwrd(linha,3)
res=subwrd(result,3)
hora=substr(res,1,2)
dia=substr(res,4,2)
mes=substr(res,6,3)
ano=substr(res,9,4)
if mes=JAN;mes=ENE; endif
if mes=APR;mes=ABR;endif
if mes=AUG;mes=AGO;endif
if mes=DEC;mes=DIC;endif

'q dims'
#say result
long=sublin(result,2)
lmax=subwrd(long,8)
lmin=subwrd(long,6)
va=lmax-lmin
fe=''dia''mes''ano''


#say lonww lonee
'set parea 1.2 10.1 0.95 7.6'
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 1'
'set ylint 1'
'set lat 'latss' 'latnn''
'set lon 'lonww' 'lonee''
'set mpdset hires'
'c'

'set grads off'

******
'set vpage 0 11 0 8.5'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 1'
'set ylint 1'

'set gxout shaded'
'color2 0 10 1 -kind white->greenyellow->blue->blueviolet->darkorange->crimson'
'd prec*1000'
'cbarn'


*****
###


'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.35 Precipitacion (mm)'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 3.4 8.10 Eta 2Km: 'hor'UTC 'di''me''an''

'set string 1 c 10 0'
'draw string 7.5 8.10 Valido para: 'hora'UTC 'dia''mes''ano

i=i+1

'set line 1 1 3'
*'draw shp peru_dpto.shp'
'draw shp peru_prov.shp'


'!mkdir -p /home/escarlette/Versoes/Figuras/INICIA_'fec'/Prec/'
'gxprint /home/escarlette/Versoes/Figuras/INICIA_'fec'/Prec/Prec_'fe'_'hora'UTC.png x1024 y768'


if (i='24')
endif
endwhile



