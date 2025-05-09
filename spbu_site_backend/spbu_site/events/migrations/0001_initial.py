# Generated by Django 5.2 on 2025-04-23 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Название')),
                ('title_uz', models.CharField(max_length=200, verbose_name='Название на узбекском')),
                ('title_en', models.CharField(max_length=200, verbose_name='Название на английском')),
                ('description', models.TextField(verbose_name='Описание')),
                ('description_uz', models.TextField(verbose_name='Описание на узбекском')),
                ('description_en', models.TextField(verbose_name='Описание на английском')),
                ('date', models.DateTimeField(verbose_name='Дата проведения')),
                ('location', models.CharField(max_length=200, verbose_name='Место проведения')),
                ('location_uz', models.CharField(max_length=200, verbose_name='Место проведения на узбекском')),
                ('location_en', models.CharField(max_length=200, verbose_name='Место проведения на английском')),
                ('image', models.ImageField(blank=True, null=True, upload_to='events/', verbose_name='Изображение')),
                ('is_visible', models.BooleanField(default=True, verbose_name='Видимость')),
            ],
            options={
                'verbose_name': 'Событие',
                'verbose_name_plural': 'События',
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Заголовок')),
                ('title_uz', models.CharField(max_length=200, verbose_name='Заголовок на узбекском')),
                ('title_en', models.CharField(max_length=200, verbose_name='Заголовок на английском')),
                ('description', models.TextField(verbose_name='Описание')),
                ('description_uz', models.TextField(verbose_name='Описание на узбекском')),
                ('description_en', models.TextField(verbose_name='Описание на английском')),
                ('image', models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение')),
                ('publication_date', models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')),
                ('is_visible', models.BooleanField(default=True, verbose_name='Видимость')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
            },
        ),
    ]
