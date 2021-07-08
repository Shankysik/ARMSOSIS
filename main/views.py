from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse

from .models import Staff, Hardware, Group_hardware, Components, Operation_history
from django.contrib.auth.models import User
from .forms import HardwareForm, StaffForm, ComponentForm
from django.views.generic import UpdateView, DeleteView


# Create your views here.


def deleteObor(request, Obor_id):
    Obor = Hardware.objects.get(pk=Obor_id)
    operation = Operation_history(worker=request.user.get_full_name(), hardware=Obor.invent_number,status=Obor.status,
                                                 hard_type=Obor.type.name, operation='Оборудование удалено')

    operation.save()

    Obor.delete()
    return HttpResponseRedirect('/obor')


def deleteUser(request, User_id):
    User = Staff.objects.get(pk=User_id)
    User.delete()
    return HttpResponseRedirect('/users')


def deleteCompl(request, Compl_id):
    Compl = Components.objects.get(pk=Compl_id)
    operation = Operation_history(worker=request.user.get_full_name(), сomponent=Compl.serial_number, hardware=Compl.Hardware_id.invent_number,
                                   operation='Комплектующая удалена')

    operation.save()
    Compl.delete()
    return HttpResponseRedirect('/compl')


# class OborDeleteView(DeleteView):
#     model = Hardware
#     template_name = 'main/delete_view.html'
#     success_url = '/obor/'


class OborUpdateView(UpdateView):
    model = Hardware
    template_name = 'main/details_view.html'

    form_class = HardwareForm
     # def sqe(self, request, *args, **kwargs):
    #     perem1 = Hardware.objects.get(id=kwargs['pk'])
    #
    #     operation = Operation_history.objects.create(worker=request.user.get_full_name(), hardware=perem1.invent_number, hard_type=perem1.type.name,status=perem1.status, operation = 'Оборудование изменено')
    #     operation.save()
    #     return HttpResponseRedirect('/obor')
    #
    # def get_initial(self):
    #     self.initial = {'Date_purchase': '1999-05-04'}
    #     return
    # initial= ['Date_purchase'] = '1999-05-04'


class UserUpdateView(UpdateView):
    model = Staff
    template_name = 'main/details_view_users.html'

    form_class = StaffForm


class ComplUpdateView(UpdateView):
    model = Components
    template_name = 'main/details_view_compl.html'

    form_class = ComponentForm
    


def index(request):
    return render(request, 'main/index.html')


def users(request):
    # if request.user.is_authenticated is False:
    error = ''
    if request.method == 'POST':
        form = StaffForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('users'))
        else:
            error = 'Форма заполнена неверно'
    usr = Staff.objects.all()
    form = StaffForm()
    conte = {'Usr': usr, 'form': form, 'error': error}

    return render(request, 'main/users.html', conte)


def test(request):
    return render(request, 'main/base.html')


def obor(request):
    error = ''
    if request.method == 'POST':
        form = HardwareForm(request.POST)
        if form.is_valid():
            form.save()

            # perem1 = Hardware.objects.get(invent_number=request.POST['invent_number'])
            #
            # operation = Operation_history.objects.create(worker=request.user.get_full_name(),
            #                                              hardware=perem1.invent_number, hard_type=perem1.type.name, status=perem1.status,
            #                                              operation='Оборудование создано')
            # operation.save()
            # return HttpResponseRedirect(reverse('obor'))
        else:
            error = 'Форма заполнена неверно'
    form = HardwareForm()
    hardware = Hardware.objects.all()
    hardw = {'Hardw': hardware, 'group': Group_hardware.objects.all(), 'form': form, 'error': error}

    return render(request, 'main/obor.html', hardw)


def compl(request):
    error = ''
    if request.method == 'POST':
        form = ComponentForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('compl'))
        else:
            error = 'Форма заполнена неверно'
    components = Components.objects.all()
    form = ComponentForm()
    detales = {'сompl': components, 'error': error, 'form': form}
    return render(request, 'main/compl.html', detales)


def create_obor(request):
    form = HardwareForm()

    data = {
        'form': form
    }

    return render(request, 'main/create_obor.html', data)


def create_worker(request):
    if request.method == "POST":
        form = HardwareForm(request.POST)
    form = HardwareForm()

    data = {
        'form': form
    }
    return render(request, 'main/create_worker.html', data)


def history(request):
    hist = Operation_history.objects.all()
    data = {
        'hist': hist
    }
    return render(request, 'main/history.html', data)
