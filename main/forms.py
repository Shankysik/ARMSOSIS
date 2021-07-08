from .models import Staff, Departments, Hardware, Components
from django.forms import ModelForm, TextInput, DateInput, Select, EmailField, IntegerField, NumberInput


class HardwareForm(ModelForm):

    class Meta:
        model = Hardware
        fields = ['model', 'Date_purchase', 'Date_end_warranty', 'invent_number', 'worker', 'group', 'type', 'status', 'specifications_hardware']

        widgets = {
            "Date_purchase": DateInput(attrs={
                'class': 'form-control',
                'type': 'date'
            }),
            "model": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Samsung C27F591FDI'
            }),
            "Date_end_warranty": DateInput(attrs={
                         'class': 'form-control',
                                  'type': 'date'
            }),
            "invent_number": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'МЦ0032043-В32122'
            }),
            "worker": Select(attrs={
                'class': 'form-control'
            }),
            "group": Select(attrs={
                'class': 'form-control'
            }),
            "type": Select(attrs={
                'class': 'form-control'

            }),
            "status": Select(attrs={
                'class': 'form-control'
            }),
            "specifications_hardware":TextInput(attrs={
                'class': 'form-control'

            })
        }


class StaffForm(ModelForm):
    class Meta:
        model = Staff
        fields = ['name', 'department', 'email', 'number']

        widgets = {
            "name": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Иванов Иван Иванович'
            }),
            "department": Select(attrs={
                'class': 'form-control'
            }),
            "email": TextInput(attrs={
                'class': 'form-control',
                'type': 'email'
            }),
            "number": NumberInput(attrs={
                'class': 'form-control',
                'type': 'tel'
            })
        }


class ComponentForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super(ComponentForm, self).__init__(*args, **kwargs)
        self.fields['Hardware_id'].queryset = Hardware.objects.filter(group='1')

    class Meta:
        model = Components
        fields = ['serial_number', 'name_of_component', 'Purchase_date', 'Warranty_end_date', 'Hardware_id', 'type', 'specifications_components']

        widgets ={
            "serial_number": TextInput(attrs={
                'class': 'form-control',
                'placeholder': '1307092AAC9A'
            }),
            "name_of_component": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Crusial M500'
            }),
            "Purchase_date": DateInput(attrs={
                         'class': 'form-control',
                                  'type': 'date'
            }),
            "Warranty_end_date": DateInput(attrs={
                         'class': 'form-control',
                                  'type': 'date'
            }),
            "Hardware_id": Select(attrs={
                'class': 'form-control'
            }),
            "specifications_components": TextInput(attrs={
                'class': 'form-control',

            }),
            "type": Select(attrs={
                'class': 'form-control'
            })
        }