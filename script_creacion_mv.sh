read -p "Nombre de la máquina: " nombre
read -p "Tamaño del disco (Ejemplo 30G): " tamanio
read -p "RAM (Ejemplo 4096): " ram
read -p "Cantidad de CPUs: " cpus
read -p "Ruta de la ISO: " ruta_iso
read -p "Nombre de la red: " red
read -p "Variante del SO: " variante
read -p "Usuario MySQL: " usuario
read -sp "Contraseña MySQL: " pass
read -p "Nombre BD: " bd

qemu-img create -f qcow2 /var/lib/libvirt/images/$nombre.qcow2 $tamanio
virt-install --name $nombre --ram $ram --vcpus $cpus --disk path=/var/lib/libvirt/images/$nombre.qcow2 --cdrom $ruta_iso --network network=$red --os-variant $variante --graphics vnc,listen=0.0.0.0 --video qxl
mysql -h localhost -u $usuario -p$pass -e "INSERT INTO ${bd}.types (id,name) VALUES(0, '${nombre}')"