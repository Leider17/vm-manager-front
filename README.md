# PRUNUS 

Prunus es una plataforma construida en el frontend mediante el uso de Vue, y el backend construido con FastApi, que permite el manejo de ciclo de vida de máquinas virtuales, a partir del aprovisionamiento de máquinas virtuales base mediante su clonación y el acceso a las mismas a través de novnc y una interfaz web.


### Despliegue de la plataforma

**1. Realizar la conexión con el servidor mediante ssh**
~~~
ssh usuario@IPservidor
~~~


**2. Actualizar la lista de paquetes disponibles e instala las nuevas versiones de todos los paquetes****
~~~
apt update && apt upgrade -y
~~~


**3. Instalar utilidades**
~~~
apt install -y curl wget git vim htop
~~~


**4. Instalar paquetes necesarios para virtualización**
~~~
apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
~~~
~~~
apt install -y virtinst virt-manager virt-viewer
~~~


**5. Habilitar y ejecutar el servicio**
~~~
systemctl enable libvirtd
~~~
~~~
systemctl start libvirtd
~~~


**6. Instalación de servidor apache y activación de módulos de proxy y redirección**
~~~
apt install -y apache2
~~~
~~~
a2enmod rewrite
~~~
~~~
a2enmod proxy
~~~
~~~
a2enmod proxy_http
~~~
~~~
a2enmod proxy_wstunnel
~~~
~~~
systemctl enable apache2
~~~


**7. Instalación e inicio de serviciops de mysql y redis**
~~~
apt install -y mysql-server redis-server
~~~
~~~
systemctl enable mysql redis-server
~~~


**8. Acceso a MySQL, creación de la base de datos y tablas**
~~~
mysql -h localhost -u **tu_usuario** -p
~~~
~~~
CREATE DATABASE `**nombre que se quiere dar a la base de datos**` 
~~~
~~~
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
~~~
~~~
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_users_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
~~~
~~~
CREATE TABLE `vms` (
  `name` varchar(30) NOT NULL,
  `vnc_port` int NOT NULL,
  `state` varchar(30) NOT NULL,
  `user_id` int NOT NULL,
  `type_id` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `vms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `vms_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
~~~


**9. Instalación de python**
~~~
apt install -y python3 python3-pip python3-venv
~~~
~~~
pip3 install fastapi uvicorn gunicorn
~~~


**10. Instalación de Node js**
~~~
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
~~~
~~~
apt install -y nodejs
~~~


**11. Creación de carpeta para descargar ISO y manejo de permisos**
~~~
mkdir -p /var/lib/libvirt/iso
~~~
~~~
chown -R libvirt-qemu:libvirt-qemu /var/lib/libvirt/
~~~
~~~
chmod 755 /var/lib/libvirt/{images,iso}
~~~


**12. Creación de red interna y configuración de la misma**
~~~
virsh net-define /dev/stdin <<EOF
  <network>
   <name>vm-bridge</name>
  <forward mode='nat'/>
  <bridge name='virbr1' stp='on' delay='0'/> 
   <ip address='192.168.100.1' netmask='255.255.255.0'>
  <dhcp>
     <range start='192.168.100.2' end='192.168.100.254'/>
     </dhcp>
   </ip>
  </network>
  EOF
~~~
~~~
virsh net-start vm-bridge
~~~
~~~
virsh net-autostart vm-bridge
~~~


**13. Descarga de imagen ISO de máquinas base**
~~~
wget **enlace a imagen ISO**
~~~


**14. Creación de espacio en disco**
~~~
qemu-img create -f qcow2 /var/lib/libvirt/images/**nombre de la imagen **/.qcow2 30G
~~~


**15. Instalación de la ISO**
~~~
virt-install \
  --name **nombre de la máquina \
  --ram 4096 \
  --vcpus 4 \
  --disk path=**path de la imagen qwco2** \--cdrom **path a la imagen ISO** \
  --network network= **nombre de la red**\
  --os-variant **variante del sistema operativo** \
  --graphics vnc,listen=0.0.0.0 \
  --video qxl
~~~


**Para realizar la instalación de las máquinas virtuales de manera visual, es necesario acceder a estas de manera remota desde fuera del servidor, el presente ejemplo se da usando tigerVnc**
**16. Se hace necesario en primera instancia revisar el puerto vnc habilitado**
~~~
virsh vncdisplay **nombre de la máquina**
~~~


**17. Instalar tigervnc-viewer**
~~~
sudo apt install tigervnc-viewer
~~~


**18. Acceder a la  máquina virtual para instalar de manera gráfica el sistema operativo de las máquinas virtuales**
~~~
vncviewer **direccioon IP del servidor**:**puerto vnc habilitado en la máquina**
~~~


**19. Clonar el proyecto backend**
~~~
git clone https://github.com/Leider17/vm-manager-backend.git
~~~


**20. Crear un entorno virtual de python y acceder a este**
~~~
python3 -m venv venv
~~~
~~~
source venv/bin/activate
~~~


**21. Instalar librerias**
~~~
pip install -r requirements.txt
~~~


**22. configurar variables de entorno**
~~~
nano **path del proyecto backend (previamente clonado)**/.env
~~~
**Insertar dentro del archivo:**
~~~
DATABASE_URL="mysql://**usuario mysql**:**tu contraseña**@localhost:3306/**base de datos previamente creada**"
SECRET_KEY= "**secret key para manejar la autenticación**"
~~~

**23. Crear tipos en la base de datos**
~~~
mysql -h localhost -u **tu_usuario** -p
~~~
~~~
INSERT INTO `**nombre de la base de datos**`.types
(id, name)
VALUES(0, '**nombre del tipo a insertar (debe coincidir con el nombre asignado al nombre de la máquina)**');
~~~


**24. Clonar el proyecto frontend**
~~~
git clone hhttps://github.com/Leider17/vm-manager-front.git
~~~


**25. Instalarlibrerias**
~~~
npm i
~~~


**26. Configurar de variables de entorno**
~~~
nano **path del proyecto frontend (previamente clonado)**/.env
~~~
Insertar dentro del archivo:
~~~
VITE_API_URL="**url del sistema backend**"
~~~


**27. Añadir el usuario al grupo libvirt**
~~~
sudo usermod -a -G libvirt debian
~~~

**28. Crear de archivo de configuración para crear servicio**
~~~
sudo nano /etc/systemd/system/**nombre del servicio**.service
~~~

**Dentro del archivo se inserta lo siguiente, según corresponda la información** 
~~~
[Unit]
Description=Servicio Gunicorn para la Plataforma de VMs (FastAPI)
After=network.target

[Service]
User=debian
Group=debian 

WorkingDirectory=**ruta absoluta al proyecto backend**

Environment="LIBVIRT_DEFAULT_URI=qemu:///system"
# Ruta absoluta al binario 'gunicorn' dentro de tu entorno virtual (venv)
Environment="PATH=**ruta al proyecto backend**/venv/bin" 

Environment="PUBLIC_HOST=**IP del servidor**" 

ExecStart=**ruta al proyecto backend**/venv/bin/gunicorn app.main:app \
          --bind 0.0.0.0:8000 \
          --workers 4 \
          --worker-class uvicorn.workers.UvicornWorker \
          --log-level info \
	  --timeout 600   

Restart=always

RestartSec=3

[Install]
WantedBy=multi-user.target
~~~


**29. Cargar y activar el servicio**
~~~
sudo systemctl daemon-reload
~~~
~~~
sudo systemctl enable **nombre del servicio*
~~~
~~~
sudo systemctl start **nombre del servicio**
~~~


**30. Crear el archivo de configuración de apache2**
~~~
sudo nano /etc/apache2/sites-available/**nombre del proyecto**.conf
~~~

**Pegar dentro del archivo y modificar según corresponda:**
~~~
<VirtualHost *:80>
    ServerName **dominio web**
    DocumentRoot **directorio del proyecto front**
  
    <Directory **directorio del proyecto front**>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>


    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

</VirtualHost>
~~~


**31. Habilitar el sitio**
~~~
sudo a2ensite mi_proyecto.conf
~~~


**32. Deshabilitar el sitio por defecto**
~~~
sudo a2dissite 000-default.conf
~~~


**33. Reiniciar apache**
~~~
sudo systemctl restart apache2
~~~
