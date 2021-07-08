# Generated by Django 3.2.2 on 2021-05-28 05:49

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_hardware_type_hardware'),
    ]

    operations = [
        migrations.RenameField(
            model_name='staff',
            old_name='departments',
            new_name='department',
        ),
        migrations.RemoveField(
            model_name='staff',
            name='user',
        ),
        migrations.AddField(
            model_name='hardware',
            name='Date_end_warranty',
            field=models.DateField(default=django.utils.timezone.now, verbose_name='Конец гарантии'),
        ),
        migrations.AddField(
            model_name='hardware',
            name='Date_purchase',
            field=models.DateField(default=django.utils.timezone.now, verbose_name='Дата покупки'),
        ),
        migrations.AddField(
            model_name='staff',
            name='email',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-mail'),
        ),
        migrations.AddField(
            model_name='staff',
            name='name',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='ФИО'),
        ),
        migrations.AlterField(
            model_name='hardware',
            name='model',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Модель'),
        ),
        migrations.AlterField(
            model_name='staff',
            name='number',
            field=models.CharField(blank=True, max_length=12, null=True, verbose_name='Номер телефона'),
        ),
    ]
