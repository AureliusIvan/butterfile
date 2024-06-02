# this is urls file for converter_app app
from django.urls import path
from converter_app.services.image_converter.image_converter import ImageConverter
from converter_app.services.pdf_converter.pdf_converter import PdfConverter
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('convert/pdf/jpg', views.pdf, name='pdf_to_jpg'),
]
