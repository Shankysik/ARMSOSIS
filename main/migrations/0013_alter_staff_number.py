# Generated by Django 3.2.2 on 2021-05-29 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_auto_20210528_1931'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staff',
            name='number',
            field=models.CharField(blank=True, max_length=11, null=True, verbose_name='Номер телефона'),
        ),
    ]
