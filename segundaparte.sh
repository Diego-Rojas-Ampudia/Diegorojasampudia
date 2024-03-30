#!/bin/bash
#####AUTOMATIZACION_ETA

export PATH="$PATH:/home/cpta/Versoes/eta/datain/scripts/gfs2gr0.25"
RUTA_1="/home/cpta/Versoes/eta/datain/scripts/gfs2gr0.25"
#FECHA

fechaIni=`date +20%y%m%d`
YYMMDD=`date +%y%m%d`
YY=`date +%Y`
MM=`date +%m`
DD=`date +%d`
HI="00"

######EJECUTANDO SEGUNDA PARTE
cd $RUTA_1
HORA="6"
cp "Get+process.sh" "Get+process2.sh"
fileInt="Get+process.sh"
file1Int="get_GFS_ETAwrk_Parallel.ksh"
file2Int="gfs2_deco.sh"
file3Int="get_GFS_wgetParallel.ksh"
fileOut="Get+process2.sh"
file1Out="get_GFS_ETAwrk_Parallel2.ksh"
file2Out="gfs2_deco2.sh"
file3Out="get_GFS_wgetParallel2.ksh"
sed -e '21s/InitBC=[0-9]*/InitBC='$HORA'/' $fileInt > $fileOut
sed -e '24s/InitBC=[0-9]*/InitBC='$HORA'/' $file1Int > $file1Out
sed -e '19s/export InitBC=[0-9]*/export InitBC='$HORA'/' $file2Int > $file2Out
sed -e '24s/InitBC=[0-9]*/InitBC='$HORA'/' $file3Int > $file3Out

Get+process.sh "$HI" 0 48 "$fechaIni"

echo "uwu"

#export PATH="$PATH:/home/cpta/Versoes/Eta_install/Eta2kmlima/scripts/"
RUTA2="/home/cpta/Versoes/Eta_install/Eta2kmLima/scripts"

# Ruta del archivo que deseas modificar (ajusta la ruta según tus necesidades)
archivo_a_modificar="/home/cpta/Versoes/Eta_install/Eta2kmLima/scripts/ConfigRun_Cntrl"

# Verifica si el archivo original existe
if [ -f "$archivo_a_modificar" ]; then
  # Realiza cambios automáticos en el archivo original
  
  sed -i "174c\lnetcdf=true" "$archivo_a_modificar"
  sed -i "183c\cdoPath=/usr/bin" "$archivo_a_modificar"
  #sed -i "184c\cdoPath=/home/diego/miniconda3/envs/meteoro/bin/" "$archivo_a_modificar"

  echo "Los cambios han sido realizados en el archivo original."
  cd $RUTA2
  start.sh "$HI" Cntrl "$fechaIni"
else
  echo "El archivo original no existe en la ubicación especificada."
fi



