# Generated by Django 3.2.2 on 2021-05-27 08:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20210527_1851'),
    ]

    operations = [
        migrations.RenameField(
            model_name='staff',
            old_name='users',
            new_name='user',
        ),
    ]