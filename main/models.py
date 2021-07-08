from django.contrib.admin import ModelAdmin
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib import admin
from datetime import datetime
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver

class Departments(models.Model):
    name = models.CharField('Название отдела', max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Отдел'
        verbose_name_plural = 'Отделы'


class Group_hardware(models.Model):
    name = models.CharField('Группа оборудования', max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Группа оборудования'
        verbose_name_plural = 'Группы оборудования'


class Type_hardware(models.Model):
    group_hardware = models.ForeignKey(Group_hardware, verbose_name='Группа оборудования', on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField('Тип оборудования', max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Тип оборудования'
        verbose_name_plural = 'Типы оборудования'


class Staff(models.Model):
    name = models.CharField('ФИО', max_length=250, null=True, blank=True)
    email = models.EmailField('E-mail', max_length=200, null=True)
    number = models.CharField('Номер телефона', max_length=12, null=True, blank=True)
    department = models.ForeignKey(Departments, on_delete=models.SET_NULL,verbose_name='Отдел', null=True, blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return '/users'

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'
        unique_together = [['name', 'number']]


class Statuses(models.Model):
    status = models.CharField('Статус', max_length=100, null=True, blank=True)

    def __str__(self):
        return self.status

    class Meta:
        verbose_name = 'Статус'
        verbose_name_plural = 'Статусы'


class Hardware(models.Model):
    model = models.CharField('Модель', max_length=200, null=True)
    Date_purchase = models.DateField('Дата начала эклуатации', default=timezone.now, null=True, blank=True)
    Date_end_warranty = models.DateField('Дата конца гарантии', default=timezone.now)
    status = models.ForeignKey(Statuses, verbose_name='Статус', on_delete=models.SET_NULL, null=True, blank=True)
    invent_number = models.CharField('Инвентарный номер', max_length=15, unique=True)
    worker = models.ForeignKey(Staff, verbose_name='Работник', on_delete=models.SET_NULL, null=True, blank=True)
    group = models.ForeignKey(Group_hardware, verbose_name='Группа оборудования', on_delete=models.SET_NULL, null=True, blank=True)
    type = models.ForeignKey(Type_hardware, verbose_name='Тип оборудования', on_delete=models.SET_NULL, null=True, blank=True)
    specifications_hardware = models.TextField('Технические характеристики оборудования', null=True, blank=True)



    def __str__(self):
        return self.invent_number

    def get_absolute_url(self):
        return '/obor'

    class Meta:
        verbose_name = 'Оборудование'
        verbose_name_plural = 'Оборудование'


class Components_type(models.Model):
    name = models.CharField('Тип комплектующей', max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Тип комплектующей'
        verbose_name_plural = 'Типы комплектующих'


class Components(models.Model):
    serial_number = models.CharField('Серийный номер', max_length=50, unique=True)
    name_of_component = models.CharField('Название комплектующей', max_length=200)
    Purchase_date = models.DateField('Дата покупки', default=timezone.now)
    Warranty_end_date = models.DateField('Дата конца гарантии', default=timezone.now)
    Hardware_id = models.ForeignKey(Hardware, verbose_name='Оборудование', on_delete=models.SET_NULL, null=True, blank=True)
    type = models.ForeignKey(Components_type, verbose_name='Тип комплектующей', on_delete=models.SET_NULL, null=True, blank=True)
    specifications_components = models.TextField('Технические характеристики комлектующей', null=True, blank=True)


    def __str__(self):
        return self.serial_number

    def get_absolute_url(self):
        return '/compl'

    class Meta:
        verbose_name = 'Комплектующая'
        verbose_name_plural = 'Комплектующие'





class Operation_history(models.Model):
    сhange_date = models.DateTimeField(default=datetime.now)
    hardware = models.CharField('Оборудование', null=True, max_length=200)
    hard_type = models.CharField('Тип оборудования', max_length=200)
    сomponent = models.CharField('Комплектующая', max_length=200, null=True, blank=True)
    status = models.ForeignKey(Statuses, verbose_name='Статус', on_delete=models.PROTECT, null=True, blank=True)
    operation = models.CharField('Операция', max_length=200)
    worker = models.CharField('Работник', max_length=200)

    def __str__(self):
        return self.operation

    class Meta:
        verbose_name = 'Операция'
        verbose_name_plural = 'История операций'

    @receiver(post_save, sender=Hardware)
    def change_obor(sender, instance, created, **kwargs):
        us = None
        for user in User.objects.all():
            if user.is_authenticated:
                us = user

        if created:
            perem1 = Hardware.objects.get(invent_number=instance.invent_number)
            operation = Operation_history.objects.create(worker=us.get_full_name(),
                                                         hardware=perem1.invent_number, hard_type=perem1.type.name,
                                                         status=perem1.status, operation='Оборудование добавлено')
            operation.save()
        else:

            perem1 = Hardware.objects.get(invent_number=instance.invent_number)
            operation = Operation_history.objects.create(worker=us.get_full_name(),
                                                         hardware=perem1.invent_number, hard_type=perem1.type.name,
                                                         status=perem1.status, operation='Оборудование изменено')
            operation.save()

    @receiver(post_save, sender=Components)
    def change_obor(sender, instance, created, **kwargs):
        us = None
        for user in User.objects.all():
            if user.is_authenticated:
                us = user

        if created:
            perem1 = Components.objects.get(serial_number=instance.serial_number)
            operation = Operation_history.objects.create(worker=us.get_full_name(), hardware=perem1.Hardware_id.invent_number,
                                                         сomponent=perem1.serial_number, operation='Комплектующая добавлена')
            operation.save()
        else:

            perem1 = Components.objects.get(serial_number=instance.serial_number)
            worker=us.get_full_name()
            component=perem1.serial_number
            operation = Operation_history.objects.create(worker=worker, hardware=perem1.Hardware_id.invent_number,
                                                         сomponent=component, operation='Комплектующая изменена')

            operation.save()