# ReactViteTypescriptApp

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Script was used: 

`npx create-nx-workspace@latest react-vite-typescript-app --preset=react-standalone`

## Development server

Run `nx serve react-vite-typescript-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `npx nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


# Тестовое задание React

## Создайте приложение с использованием:
1. react
2. Любой стейт менеджер по желанию или без него
3. axios/ky/react query/rtk
4. Сборщик по желанию(vite приоритетный)
5. Архитектура на выбор
6. Библиотека компонентов - любая или без нее

## Приложение должно:
Запросом доставать список данных из любого открытого источника(ex https://api.punkapi.com/v2/beers https://api.punkapi.com/v2/beers?page=2&per_page=80, ...) -> формировать карточки (если используете стейт-менеджер - сохранять в нем) -> подгружать новый список с использованием логики бесконечного скролла (самописный или из библиотеки компонентов по выбору)

## Дизайн произвольный 

## Оценка задания строится на:
1. Построении файловой структуры, Архитектура проекта
2. Декомпозиция компонентов
3. Работа с АПИ
4. Работа внутри компонента(жизненные циклы, хуки)

Преимущество, но необязательно - типизация с помощью TS

После завершения проект завернуть в git и выложить в открытом репозитории в github/gitlab
