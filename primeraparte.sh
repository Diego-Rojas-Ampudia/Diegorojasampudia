#!/bin/bash

export PATH="$PATH:/home/cpta/Versoes/eta/v1.4.2/install"

# Ruta del archivo que deseas copiar (ajusta la ruta según tus necesidades)
archivo_original="/home/cpta/Versoes/eta/v1.4.2/install/set_parmeta_Template"

# Ruta de la carpeta donde deseas guardar la copia (ajusta la ruta según tus necesidades)
carpeta_destino="/home/cpta/Versoes/eta/v1.4.2/install"

# Nombre para la copia del archivo (ajusta el nombre según tus necesidades)
nombre_copia="set_parmeta_Eta2kmLima"

# Valores a reemplazar en el archivo

valor_original1="Lon=-54.5"
nuevo_valor1="Lon=-77.112"

valor_original2="Lat=-19.5"
nuevo_valor2="Lat=-12.025"

valor_original3="IM=143"
nuevo_valor3="IM=143"

valor_original4="JM=249"
nuevo_valor4="JM=285"

#valor_original5="Res=40"
#nuevo_valor5="Res=5"

#valor_original5="Fct=6"
#nuevo_valor5="Fct=6"
 
# Verifica si el archivo original existe
if [ -f "$archivo_original" ]; then
# Copia el archivo y cambia su nombre en la carpeta de destino
  cp "$archivo_original" "$carpeta_destino/$nombre_copia"
  echo "El archivo ha sido copiado y renombrado en la carpeta de destino."

  # Realiza cambios automáticos en el archivo copiado
  sed -i "s/$valor_original1/$nuevo_valor1/g" "$carpeta_destino/$nombre_copia"
  sed -i "s/$valor_original2/$nuevo_valor2/g" "$carpeta_destino/$nombre_copia"
  sed -i "s/$valor_original3/$nuevo_valor3/g" "$carpeta_destino/$nombre_copia"
  sed -i "s/$valor_original4/$nuevo_valor4/g" "$carpeta_destino/$nombre_copia"
  sed -i "29c\Res=2" "$carpeta_destino/$nombre_copia"
  sed -i "33c\Fct=48" "$carpeta_destino/$nombre_copia"

  # Abre el archivo copiado con Gedit
  #gedit "$carpeta_destino/$nombre_copia"
  
  # Ejecuta el comando buildall solo para la parte de "Eta5km"
  cd /home/cpta/Versoes/eta/v1.4.2/install
  echo "Se dirigio a la ruta"
  buildall Eta2kmLima << EOF
4
1
n
n
n
n
n
n
2
3
1
EOF
  
else 
  echo "El archivo original no existe en la ruta especificada."
fi
 
