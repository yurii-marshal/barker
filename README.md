# Баркер #

Для исходников для проекта создайте в папке 
src/front
src/back
src/mobile

###Для запуска API###
С корневой папки выполнить команды в консоле
docker build -t ma-ko/barkerapi src/back/Barker/Barker/
docker run -p 5000:80 -it ma-ko/barkerapi 
