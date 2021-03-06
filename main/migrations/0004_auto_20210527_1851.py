# Generated by Django 3.2.2 on 2021-05-27 07:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0003_auto_20210527_1736'),
    ]

    operations = [
        migrations.AddField(
            model_name='staff',
            name='users',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='staff',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='staff',
            name='e_mail',
        ),
        migrations.RemoveField(
            model_name='staff',
            name='name',
        ),
    ]
