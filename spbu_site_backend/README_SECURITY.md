# 🔒 Система безопасности SPBU Site

## 🚀 Быстрый старт

### Установка системы безопасности

```bash
# Установка зависимостей безопасности
pip install -r requirements.txt

# Установка pre-commit hooks
pre-commit install

# Проверка безопасности
python security_check.py
```

### Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```bash
# Критические настройки безопасности
SECRET_KEY=your-super-secret-key-here
DEBUG=False
ALLOWED_HOSTS=your-domain.com,www.your-domain.com

# Настройки базы данных
DB_NAME=spbu_site_db
DB_USER=postgres
DB_PASSWORD=secure-password
DB_HOST=localhost
DB_PORT=5432

# Настройки безопасности
SECURE_SSL_REDIRECT=True
SECURE_HSTS_SECONDS=31536000
```

## 🛡️ Компоненты безопасности

### 1. Централизованная система безопасности

**Файл**: `spbu_site/security.py`

- **SecurityConfig**: Критические настройки безопасности
- **SecurityMiddleware**: Middleware для обработки запросов
- **SecurityDecorator**: Декораторы для защиты views
- **SecurityValidator**: Валидация и санитизация данных
- **SecurityMonitor**: Мониторинг и логирование безопасности

### 2. Безопасные mixins

**Файл**: `spbu_site/security_mixins.py`

- **SecureModelMixin**: Автоматическая санитизация моделей
- **SecureUserMixin**: Безопасные пользователи
- **SecureViewMixin**: Безопасные views

### 3. Безопасные сериализаторы

**Файл**: `spbu_site/secure_serializers.py`

- **SecureTokenObtainPairSerializer**: Безопасное получение токенов
- **SecureModelSerializer**: Базовый безопасный сериализатор
- **SecureUserSerializer**: Безопасный сериализатор пользователей
- **SecureFileUploadSerializer**: Безопасная загрузка файлов

## 🔍 Автоматические проверки

### Pre-commit hooks

Автоматически запускаются перед каждым коммитом:

```bash
# Установка
pre-commit install

# Ручной запуск
pre-commit run --all-files
```

**Проверки включают**:

- ✅ Trailing whitespace
- ✅ End of file fixer
- ✅ YAML validation
- ✅ Large files check
- ✅ Merge conflicts check
- ✅ Security check
- ✅ Django deployment check
- ✅ Code quality (bandit)
- ✅ Code formatting (black)
- ✅ Import sorting (isort)
- ✅ Type checking (mypy)

### Скрипт проверки безопасности

```bash
python security_check.py
```

**Проверяет**:

- 🔍 Переменные окружения
- 🔍 Настройки Django
- 🔍 Зависимости на уязвимости
- 🔍 Качество кода
- 🔍 Права доступа к файлам
- 🔍 Заголовки безопасности

## 📊 Мониторинг безопасности

### Логи безопасности

Логи сохраняются в `logs/security.log`:

```bash
# Просмотр логов безопасности
tail -f logs/security.log

# Поиск нарушений
grep "SECURITY_ALERT" logs/security.log
```

### Алерты

Критические нарушения автоматически генерируют алерты:

- 🚨 SQL инъекции
- 🚨 XSS попытки
- 🚨 CSRF нарушения
- 🚨 Подозрительная активность

## 🛠️ Использование для разработчиков

### 1. Безопасные модели

```python
from spbu_site.security_mixins import SecureModelMixin

class MyModel(SecureModelMixin, models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    # Автоматическая санитизация и валидация
```

### 2. Безопасные сериализаторы

```python
from spbu_site.secure_serializers import SecureModelSerializer

class MySerializer(SecureModelSerializer):
    class Meta:
        model = MyModel
        fields = '__all__'
```

### 3. Декораторы безопасности

```python
from spbu_site.security import SecurityDecorator

@SecurityDecorator.require_https
@SecurityDecorator.require_csrf
def my_view(request):
    # Защищенный view
    pass
```

### 4. Логирование безопасности

```python
from spbu_site.security import security_monitor

# Логирование события
security_monitor.log_violation(
    'CUSTOM_EVENT',
    'Description of the event',
    request
)
```

## 🔧 Настройка

### Критические настройки безопасности

Эти настройки **НЕ ДОЛЖНЫ** изменяться разработчиками:

```python
CRITICAL_SECURITY_SETTINGS = {
    'SECURE_SSL_REDIRECT': True,
    'SECURE_HSTS_SECONDS': 31536000,
    'SECURE_HSTS_INCLUDE_SUBDOMAINS': True,
    'SECURE_HSTS_PRELOAD': True,
    'SECURE_CONTENT_TYPE_NOSNIFF': True,
    'SECURE_BROWSER_XSS_FILTER': True,
    'SECURE_REFERRER_POLICY': 'strict-origin-when-cross-origin',
    'X_FRAME_OPTIONS': 'DENY',
    'SESSION_COOKIE_SECURE': True,
    'CSRF_COOKIE_SECURE': True,
    'SESSION_COOKIE_HTTPONLY': True,
    'CSRF_COOKIE_HTTPONLY': True,
    'SESSION_COOKIE_SAMESITE': 'Strict',
    'CSRF_COOKIE_SAMESITE': 'Strict',
}
```

### Content Security Policy

```python
CSP_DEFAULT_SRC = ("'self'",)
CSP_SCRIPT_SRC = ("'self'", "'unsafe-inline'", "'unsafe-eval'")
CSP_STYLE_SRC = ("'self'", "'unsafe-inline'")
CSP_IMG_SRC = ("'self'", "data:", "https:")
CSP_FONT_SRC = ("'self'", "https:")
CSP_CONNECT_SRC = ("'self'",)
CSP_FRAME_SRC = ("'none'",)
CSP_OBJECT_SRC = ("'none'",)
```

## 🚨 Обработка инцидентов

### 1. Обнаружение нарушения

```bash
# Проверка логов безопасности
tail -f logs/security.log

# Поиск критических нарушений
grep "SECURITY_ALERT" logs/security.log

# Проверка алертов
grep "CRITICAL" logs/security.log
```

### 2. Ответные меры

- 🔒 Блокировка подозрительных IP
- 🔄 Сброс сессий пользователей
- 🔑 Обновление токенов
- 🔍 Анализ и исправление уязвимостей

### 3. Восстановление

- 💾 Резервное копирование данных
- 🔄 Восстановление из резервной копии
- 🔒 Обновление системы безопасности
- ✅ Тестирование восстановления

## 📈 Метрики безопасности

### Автоматические отчеты

```bash
# Генерация отчета безопасности
python security_check.py --report

# Проверка зависимостей
safety check --json

# Анализ кода
bandit -r spbu_site -f json -o bandit-report.json
```

### Ключевые метрики

- 🔍 Количество нарушений безопасности
- 🚨 Критические алерты
- 📊 Попытки атак
- ✅ Успешные блокировки

## 🔄 Обновления безопасности

### Регулярные обновления

1. **Зависимости**: Еженедельно проверяйте уязвимости
2. **Django**: Обновляйте при выходе новых версий
3. **Система безопасности**: Регулярно обновляйте правила

### Процесс обновления

```bash
# 1. Создание резервной копии
python manage.py dumpdata > backup.json

# 2. Обновление зависимостей
pip install -r requirements.txt --upgrade

# 3. Запуск тестов безопасности
python security_check.py

# 4. Проверка функциональности
python manage.py test

# 5. Развертывание обновлений
python manage.py migrate
```

## 📞 Поддержка

### Контакты

При обнаружении уязвимостей безопасности:

1. 🚨 Немедленно сообщите команде разработки
2. 🔒 Не публикуйте информацию публично
3. 📝 Предоставьте детальное описание уязвимости
4. 🔄 Следуйте процессу ответных мер

### Документация

- 📖 [Полная документация безопасности](SECURITY.md)
- 🔧 [Руководство по настройке](SECURITY.md#настройки-безопасности)
- 🛠️ [Руководство разработчика](SECURITY.md#рекомендации-для-разработчиков)
- 🚨 [Обработка инцидентов](SECURITY.md#обработка-инцидентов)

## ✅ Статус безопасности

![Security Status](https://img.shields.io/badge/security-status-secure-green)
![Last Check](https://img.shields.io/badge/last%20check-2024--01--01-blue)
![Vulnerabilities](https://img.shields.io/badge/vulnerabilities-0-green)

---

**⚠️ Важно**: Система безопасности разработана для обеспечения максимальной защиты от кибератак. Все изменения в системе безопасности должны проходить обязательную проверку и тестирование.
