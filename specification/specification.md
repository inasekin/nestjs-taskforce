# Приложение Taskforce (серверная часть)
«TaskForce» — это онлайн площадка для поиска исполнителей на разовые задачи. Сайт функционирует как биржа объявлений, где заказчики — физические лица публикуют задания. Исполнители могут откликаться на эти задания, предлагая свои услуги и стоимость работ.

## Работа с Докером

Для хранения данных микросервисы используют БД - MongoDB и PostgreSQL.
Базы данных создаём в контейнерах Докера на основе готовых образов.
Вся необходимая для этого конфигурация, описана в файлах docker-compose.yml.

1) Перед работой с Докером, предварительно переходим в директорию с файлом docker-compose.yml:
   `cd taskforce/apps/<директория с микросервисом>`

2) Для создания контейнеров с БД, согласно конфигурации описанной в docker-compose.yml выполняем следующую команду:
   `docker-compose up -d`

3) Для удаления докер-контейнеров с БД выпоняем следующую команду:
   `docker-compose down`

## Выполнение команд

1) В корневой папке каждого микросервиса есть файл `project.json`, в котором описан ряд стандартных команд:
- *build* - создать билд проекта, скомпиллировать ts в js;
- *serve* - запустить созданный билд;
- *lint* - запустить проверку линтером (для указанного микросервиса), для всех файлов с расширением ts;
- *test* - запустить тесты (jest) для указанного микросервиса.

Перед вызовом команд, не забываем перейти в директорию taskforce:
`cd taskforce`

Сам вызов команд осуществляется следующим образом **nx run <имя_микросервиса>:<команда>**
Пример:
`nx run tasks:serve`

2) В для микросервиса tasks также доступны дополнительные команды используемые на этапе разработки, для выпонения операций с БД:
- *db-validate* - проверка схемы;
- *db-migrate* - запуск миграции;
- *db-reset* - удаление и очистка БД;
- *db-generate* - генерация Prisma Client;
- *db-fill* - заполнение БД данными.

Пример:
`nx run tasks:db-reset`
