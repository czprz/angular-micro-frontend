cd angular-libs
ng build --configuration production

Copy-Item -Path dist/broker -Destination ../angular-menu/node_modules/@czprz/broker
Copy-Item -Path dist/broker -Destination ../angular-shell/node_modules/@czprz/broker

cd ..
cd angular-menu
ng build --configuration production

cd ..
cd angular-overview
ng build --configuration production

cd ..
cd angular-toolbar
ng build --configuration production

cd ..
cd angular-shell
ng build --configuration production