# Generated by Django 3.2.2 on 2021-06-02 08:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_auto_20210530_1720'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='staff',
            name='position',
        ),
        migrations.DeleteModel(
            name='Positions',
        ),
    ]