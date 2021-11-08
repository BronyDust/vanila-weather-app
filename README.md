# Приложение погоды

Учебный проект, в результате которого будет написано простое приложение погоды. Бандлеры, babel и вспомогательные языки использованы не будут.

## Рабочий процесс

Для именования веток используется методология [git flow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow). У контрибьюторов нет права завершать feature ветки без ревью от собственника репозитория. Вмешивание фич и фиксов происходит по средствам pull-request (согласно правилам методологии).

Определение всех кастомных элементов делается рядом с определением их классов. Подразумевается, что за создание экземпляров кастомных элементов будет отвечать скрипт, поэтому при импорте класса элемента будет вызван его define.

### Правило пулов

- feature делает pull в develop
- на основе develop создается release
- в release нельзя добавлять фичи, только исправления
- release делает pull в main
- hotfix можно сделать от main
- после завершения hotfix, его нужно распространить на все активные ветки develop, main и release.

## Задания

Наш план - создать работающее приложение для получения данных о погоде. Когда этот функционал будет создан - main получит тег v1.0

## Инструменты

Данные из [открытого API погоды](https://www.weatherapi.com/)
