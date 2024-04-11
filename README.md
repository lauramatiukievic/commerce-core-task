## How to setup project locally:

BACKEND PART:
!Copy .env.example to .env
Configure Database Path:
DB_DATABASE=C:\Users\domki\commercecoretask\backend\database\database.sqlite
Set Up Email Configuration:
MAIL_PAYMENT_ALERT=some@email.com

Running backend:
cd backend
composer update
php artisan migrate
php artisan serve

Running backend email job:
php artisan schedule:work 


FRONTEND PART:

!Copy .env.example to .env.local

Running frontend: 

cd frontend
nmp install
npm start

Running tests:
npm test