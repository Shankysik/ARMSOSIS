from django.contrib import admin
from .models import Departments, Staff, Hardware, Type_hardware, Group_hardware, Statuses,Components,Components_type, Operation_history

admin.site.register(Departments)
admin.site.register(Staff)
admin.site.register(Hardware)
admin.site.register(Type_hardware)
admin.site.register(Group_hardware)
admin.site.register(Statuses)


@admin.register(Components)
class ComponentsAdmin(admin.ModelAdmin):
    list_display = ('serial_number', 'name_of_component')


admin.site.register(Components_type)

@admin.register(Operation_history)
class ComponentsAdmin(admin.ModelAdmin):
    list_display = ('сhange_date', 'hardware', 'сomponent', 'operation', 'worker')
