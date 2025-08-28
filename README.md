# 🎓 СПбГУ в городе Ташкенте - Официальный сайт

> Официальный веб-сайт филиала Санкт-Петербургского государственного университета в городе Ташкенте

<div align="center">

## 🏷️ Статус проекта

[![human CODED](https://img.shields.io/badge/human-CODED-brightgreen?style=for-the-badge&logo=github)](https://github.com/features/copilot)
[![Status](https://img.shields.io/badge/Status-Production%20in%20Development-orange?style=for-the-badge&logo=construction)](https://github.com/stastashpulatov/spbu_site-1)
[![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge&logo=semantic-release)](https://github.com/stastashpulatov/spbu_site-1/releases)
[![Last Update](https://img.shields.io/badge/Last%20Update-August%202024-orange?style=for-the-badge&logo=calendar)](https://github.com/stastashpulatov/spbu_site-1/commits/main)

## 🛠️ Технологии

### Frontend

[![React](https://img.shields.io/badge/React-18.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Backend

[![Django](https://img.shields.io/badge/Django-4.2-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

### DevOps & Tools

[![Docker](https://img.shields.io/badge/Docker-20.10-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-1.24-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

### Лицензия

[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=open-source-initiative&logoColor=black)](LICENSE)

</div>

## 📋 Содержание

- [🚀 Быстрый старт](#-быстрый-старт)
- [✨ Особенности](#-особенности)
- [🏗️ Архитектура](#️-архитектура)
- [🛠️ Технологии](#️-технологии)
- [📁 Структура проекта](#-структура-проекта)
- [🔧 Установка и настройка](#-установка-и-настройка)
- [🌐 Развертывание](#-развертывание)
- [📱 Функциональность](#-функциональность)
- [🎨 Дизайн и UI/UX](#-дизайн-и-uiux)
- [🔒 Безопасность](#-безопасность)
- [🧪 Тестирование](#-тестирование)
- [📈 Производительность](#-производительность)
- [🤝 Вклад в проект](#-вклад-в-проект)
- [📄 Лицензия](#-лицензия)

## 🚀 Быстрый старт

### Предварительные требования

- **Node.js** 18.0+
- **Python** 3.9+
- **PostgreSQL** 13+
- **Redis** (опционально)

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/your-org/spbu-tashkent-website.git
cd spbu-tashkent-website

# Установка зависимостей фронтенда
cd spbu_site
npm install

# Установка зависимостей бэкенда
cd ../spbu_site_backend
pip install -r requirements.txt

# Настройка базы данных
python manage.py migrate
python manage.py createsuperuser

# Запуск в режиме разработки
npm run dev  # Фронтенд (localhost:5173)
python manage.py runserver  # Бэкенд (localhost:8000)
```

## ✨ Особенности

### 🌍 Многоязычность

- **3 языка**: Русский, Узбекский, Английский
- Динамическое переключение языков
- Локализованный контент и интерфейс

### 🎨 Современный дизайн

- **Адаптивный дизайн** для всех устройств
- **Темная/светлая тема** с автоматическим переключением
- **Плавные анимации** и переходы
- **Material Design** принципы

### 📱 Полная функциональность

- **Новости и события** с категоризацией
- **Образовательные программы** (бакалавриат/магистратура)
- **Расписание занятий** в реальном времени
- **Личный кабинет** для студентов
- **ТРКИ** (тестирование по русскому языку)
- **Библиотека** с электронными ресурсами

### 🔒 Безопасность

- **JWT аутентификация**
- **CSRF защита**
- **XSS защита**
- **Rate limiting**
- **Валидация данных**

## 🏗️ Архитектура

```
spbu_site-1/
├── spbu_site/                 # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/        # React компоненты
│   │   ├── contexts/          # React Context
│   │   ├── hooks/            # Custom hooks
│   │   ├── translations/     # Локализация
│   │   └── utils/            # Утилиты
│   └── public/               # Статические файлы
├── spbu_site_backend/        # Backend (Django)
│   ├── spbu_site/           # Django проект
│   ├── news/                # Приложение новостей
│   ├── schedule/            # Приложение расписания
│   ├── users/               # Пользователи
│   └── site_maintenance/    # Техническое обслуживание
└── docs/                    # Документация
```

## 🛠️ Технологии

### Frontend

- **React 18** - Современная библиотека для UI
- **TypeScript** - Типизированный JavaScript
- **Vite** - Быстрый сборщик
- **SCSS** - Продвинутые стили
- **React Router** - Маршрутизация
- **Context API** - Управление состоянием

### Backend

- **Django 4.2** - Веб-фреймворк
- **Django REST Framework** - API
- **PostgreSQL** - База данных
- **Redis** - Кэширование
- **Celery** - Фоновые задачи

### DevOps

- **Docker** - Контейнеризация
- **Nginx** - Веб-сервер
- **Gunicorn** - WSGI сервер
- **GitHub Actions** - CI/CD

## 📁 Структура проекта

### Frontend компоненты

```typescript
src/components/
├── main/                    # Основные компоненты
│   ├── Header.tsx          # Навигация и меню
│   └── StartPage.tsx       # Главная страница
├── pages/                  # Страницы приложения
│   ├── About.tsx          # О университете
│   ├── Contacts.tsx       # Контакты
│   ├── NewsPage.tsx       # Новости
│   └── ...                # Другие страницы
├── shared/                 # Общие компоненты
│   ├── NewsBar.tsx        # Лента новостей
│   └── ProgramPage.tsx    # Страница программы
└── common/                 # Базовые компоненты
    ├── LanguageSelector.tsx
    ├── ThemeToggle.tsx
    └── Loader.tsx
```

### Backend приложения

```python
spbu_site_backend/
├── news/                   # Новости и события
│   ├── models.py          # Модели данных
│   ├── views.py           # API endpoints
│   └── serializers.py     # Сериализация
├── schedule/              # Расписание занятий
├── users/                 # Пользователи и аутентификация
└── site_maintenance/      # Техническое обслуживание
```

## 🔧 Установка и настройка

### 1. Настройка окружения

```bash
# Создание виртуального окружения Python
python -m venv venv
source venv/bin/activate  # Linux/Mac
# или
venv\Scripts\activate     # Windows

# Установка зависимостей
pip install -r requirements.txt
```

### 2. Настройка базы данных

```bash
# Создание базы данных PostgreSQL
createdb spbu_tashkent

# Применение миграций
python manage.py migrate

# Создание суперпользователя
python manage.py createsuperuser
```

### 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@localhost/spbu_tashkent
REDIS_URL=redis://localhost:6379
ALLOWED_HOSTS=localhost,127.0.0.1
```

### 4. Запуск в режиме разработки

```bash
# Терминал 1: Backend
cd spbu_site_backend
python manage.py runserver

# Терминал 2: Frontend
cd spbu_site
npm run dev
```

## 🌐 Развертывание

### Docker развертывание

```bash
# Сборка и запуск контейнеров
docker-compose up -d

# Проверка статуса
docker-compose ps

# Просмотр логов
docker-compose logs -f
```

### Продакшн развертывание

```bash
# Сборка фронтенда
npm run build

# Сборка статических файлов Django
python manage.py collectstatic

# Запуск с Gunicorn
gunicorn spbu_site.wsgi:application --bind 0.0.0.0:8000
```

## 📱 Функциональность

### 🎓 Образовательные программы

- **Бакалавриат**:

  - Международный бизнес в цифровой экономике
  - Программирование и информационные технологии

- **Магистратура**:
  - Международное предпринимательство в цифровой экономике
  - Международное частное право
  - Современный Китай: экономика, политика, общество

### 📰 Новости и события

- Категоризация новостей
- Поиск и фильтрация
- RSS лента
- Уведомления

### 📅 Расписание занятий

- Онлайн расписание
- Уведомления об изменениях
- Экспорт в календарь
- Мобильная версия

### 🧪 ТРКИ (Тестирование по русскому языку)

- Информация о тестировании
- Подготовка к экзаменам
- Регистрация на тестирование
- Результаты

## 🎨 Дизайн и UI/UX

### Принципы дизайна

- **Минимализм** - Чистый и понятный интерфейс
- **Доступность** - Соответствие WCAG 2.1
- **Адаптивность** - Работа на всех устройствах
- **Консистентность** - Единый стиль по всему сайту

### Цветовая схема

```scss
// Основные цвета
$primary-color: #a94442; // Красный СПбГУ
$secondary-color: #e87681; // Светло-красный
$accent-color: #922d2b; // Темно-красный

// Нейтральные цвета
$text-primary: #333333;
$text-secondary: #666666;
$background-light: #fff8f8;
$background-dark: #1f1720;
```

### Типографика

- **Заголовки**: Inter, 700-800 weight
- **Основной текст**: Inter, 400-500 weight
- **Моноширинный**: JetBrains Mono (для кода)

## 🔒 Безопасность

### Меры безопасности

- ✅ **HTTPS** - Шифрование трафика
- ✅ **JWT токены** - Безопасная аутентификация
- ✅ **CSRF защита** - Защита от CSRF атак
- ✅ **XSS защита** - Санитизация данных
- ✅ **Rate limiting** - Ограничение запросов
- ✅ **Валидация** - Проверка входных данных
- ✅ **Логирование** - Аудит безопасности

### Рекомендации по безопасности

```bash
# Регулярное обновление зависимостей
npm audit fix
pip install --upgrade -r requirements.txt

# Проверка уязвимостей
npm audit
safety check
```

## 🧪 Тестирование

### Frontend тесты

```bash
# Запуск тестов
npm test

# Покрытие кода
npm run test:coverage

# E2E тесты
npm run test:e2e
```

### Backend тесты

```bash
# Запуск тестов Django
python manage.py test

# Покрытие кода
coverage run --source='.' manage.py test
coverage report
```

### Примеры тестов

```typescript
// Frontend тест
describe("Header Component", () => {
  it("should render navigation menu", () => {
    render(<Header />);
    expect(screen.getByText("Университет")).toBeInTheDocument();
  });
});
```

```python
# Backend тест
class NewsViewTest(TestCase):
    def test_news_list_view(self):
        response = self.client.get('/api/news/')
        self.assertEqual(response.status_code, 200)
```

## 📈 Производительность

### Оптимизация фронтенда

- **Code splitting** - Разделение кода
- **Lazy loading** - Ленивая загрузка
- **Image optimization** - Оптимизация изображений
- **Caching** - Кэширование статических файлов

### Оптимизация бэкенда

- **Database indexing** - Индексы БД
- **Query optimization** - Оптимизация запросов
- **Caching** - Redis кэширование
- **CDN** - Content Delivery Network

### Метрики производительности

```bash
# Анализ размера бандла
npm run build -- --analyze

# Lighthouse аудит
npm run lighthouse

# Мониторинг производительности
npm run perf
```

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие проекта!

### Как внести вклад

1. **Fork** репозитория
2. Создайте **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** изменения (`git commit -m 'Add amazing feature'`)
4. **Push** в branch (`git push origin feature/amazing-feature`)
5. Откройте **Pull Request**

### Стандарты кода

```bash
# Frontend
npm run lint          # ESLint проверка
npm run format        # Prettier форматирование
npm run type-check    # TypeScript проверка

# Backend
flake8 .              # PEP8 проверка
black .               # Форматирование кода
isort .               # Сортировка импортов
```

### Структура коммитов

```
feat: добавлена новая функциональность
fix: исправлена ошибка
docs: обновлена документация
style: изменения в форматировании
refactor: рефакторинг кода
test: добавлены тесты
chore: обновление зависимостей
```

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

---

<div align="center">

**Санкт-Петербургский государственный университет в городе Ташкенте**

_Основан в 2022 году_

[🌐 Официальный сайт](https://spbu.uz) | [📧 Контакты](mailto:info@spbu.uz) | [📱 Telegram](https://t.me/spbu_tashkent)

</div>
