# REST-API-MLOPEZ

Este proyecto implica el desarrollo de una REST-API en **Node.js** (utilizando **Express.js** como Framework y **MySQL** como base de datos).

Esta API posee las cuatro operaciones básicas del protocolo HTTP (*GET, POST, PUT, DELETE*)

La misma esta deplegada a través del sitio *RailwayApp* y realiza consultas a una BBDD de empleados donde se pueden ver los id, nombre y salario.

Se puede acceder a la totalidad de empleados desde la siugiente URL: https://rest-api-mlopez-production.up.railway.app/api/employees:

![screencapture-rest-api-mlopez-production-up-railway-app-api-employees-2022-10-13-18_22_08](https://user-images.githubusercontent.com/84106998/195713392-0b98221e-5f27-43d8-a21f-19bdc4d9e300.jpeg)

A su vez, se puede hacer consultas por id individual (ademas de actualizar datos de cada empleado o borrado del empleado) a través de la siguiente URL: https://rest-api-mlopez-production.up.railway.app/api/employees/:id

![screencapture-rest-api-mlopez-production-up-railway-app-api-employees-5-2022-10-13-18_24_56](https://user-images.githubusercontent.com/84106998/195713770-330e8380-67bc-4d97-883f-510e62645fb6.jpeg)

En caso de no encontrar el id indicada, la API arroja un mensaje de error: 

![screencapture-rest-api-mlopez-production-up-railway-app-api-employees-daaad-2022-10-13-18_36_16](https://user-images.githubusercontent.com/84106998/195715536-d37bb780-1265-4bd3-aa51-20e70bba085e.jpeg)
