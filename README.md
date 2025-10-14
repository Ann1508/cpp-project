# cpp-progect

Учебный проект для лабораторной работы: React + Vite + TailwindCSS + Docker.

## Что внутри
- React + Vite (шаблон)
- TailwindCSS (через PostCSS)
- Простая структура: `components`, `pages`, `utils`, `assets`
- Dockerfile + docker-compose для сборки и запуска в контейнере
- Возможность запускать локально (`npm run dev`) и в Docker (см. ниже)

## Установка и запуск локально
1. Установить зависимости:
   ```bash
   npm install
   ```
2. Запустить dev-сервер:
   ```bash
   npm run dev
   ```
   Открой http://localhost:5173

3. Собрать production-версию:
   ```bash
   npm run build
   ```
   Статическая сборка окажется в папке `dist`.

## Запуск через Docker
1. Собрать и запустить контейнер через docker-compose:
   ```bash
   docker compose up --build
   ```
2. Открой http://localhost:8080

## Примечания
- Tailwind уже настроен (файлы `tailwind.config.cjs`, `postcss.config.cjs`, директивы в `src/index.css`).
- Навигация простая — без маршрутизации (по заданию).
