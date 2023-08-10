#!/usr/bin/env bash
echo "Running composer"
# composer global require hirak/prestissimo
composer install --no-dev --working-dir=/var/www/html

# echo "Update composer"
# composer update --no-scripts

echo "Update composer"
npm run build 

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force