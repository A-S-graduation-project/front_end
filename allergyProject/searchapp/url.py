from django.urls import path
from . import views as searchviews

app_name = 'searchapp'

urlpatterns = [
    path('search/', searchviews.search, name='search'),
    path('detail/', searchviews.detail, name='detail')
]

