from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name = 'main'),
    path('users', views.users, name = 'users'),
    path('obor', views.obor, name='obor'),
    path('compl', views.compl, name='compl'),
    path('test', views.test, name='test'),
    path('create_obor', views.create_obor, name='create_obor'),
    path('crete_worker', views.create_worker, name='create_worker'),
    path('obor/<int:pk>', views.OborUpdateView.as_view(), name='obor-detale'),
    path('obor/<int:Obor_id>/delete', views.deleteObor, name='deleteObor'),
    path('users/<int:pk>', views.UserUpdateView.as_view(), name='user-detale'),
    path('users/<int:User_id>/delete', views.deleteUser, name='deleteUser'),
    path('compl/<int:pk>', views.ComplUpdateView.as_view(), name='compl-detale'),
    path('compl/<int:Compl_id>/delete', views.deleteCompl, name='deleteCompl'),
    path('history', views.history, name='history')

]