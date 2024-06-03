# from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from dotenv import load_dotenv
import os
from converter_app.services.pdf_converter.pdf_converter import PdfConverter
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile


def _handle_uploaded_file(request):
    file = request.FILES['file']
    file_path = default_storage.save('converter_app/services/pdf_converter/sample.pdf', ContentFile(file.read()))
    return file_path


def index(request):
    return JsonResponse({
        'message': 'Welcome to the converter app',
        'data': [
            {
                'name': 'PDF Converter',
            },
            {
                'name': 'JPG Converter',
            },
            {
                'name': 'PNG Converter',
            }
        ]
    })


# make sure the method is POST
def pdf(request):
    """
    Converts a PDF file to images
    """
    if request.method != 'POST':
        return JsonResponse({
            'message': 'Invalid request method, supported method is POST'
        }, status=400)

    # if request has no key "file", return error
    if 'file' not in request.FILES:
        return JsonResponse({
            # show payload
            "request": request.POST,
            'message': 'Invalid request, file key is missing'
        }, status=400)

    if request.FILES['file'].name.split('.')[-1] != 'pdf':
        return JsonResponse({
            'message': 'Invalid file type, supported file type is PDF'
        }, status=400)

    # if request has key "type" and value "pdf", convert to pdf
    if request.POST['type'] == 'jpg':
        doc = PdfConverter(name=request.POST['name'], file=request.FILES['file'])
        doc.save()
        result_path = doc.convert('jpg')
        return JsonResponse({
            'message': 'Conversion successful',
            'path': result_path
        }, status=200)
    elif request.POST['type'] == 'png':
        doc = PdfConverter(name=request.POST['name'], file=request.FILES['file'])
        doc.save()
        result_path = doc.convert('png')
        return JsonResponse({
            'message': 'Conversion successful',
            'path': result_path
        }, status=200)
    else:
        return JsonResponse({
            'message': 'Invalid request type, supported type is PDF'
        }, status=400)
