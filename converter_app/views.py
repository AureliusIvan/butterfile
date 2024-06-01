# from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from dotenv import load_dotenv
import os
from converter_app.services.pdf_converter.pdf_converter import PdfConverter


def index(request):
    load_dotenv()
    project_name = os.getenv('PROJECT_NAME')
    template = loader.get_template('index.html')
    return HttpResponse(template.render({'project_name': project_name}, request))


# make sure the method is POST
def pdf(request):
    """
    Converts a PDF file to images
    """
    if request.method != 'POST':
        return JsonResponse({
            'message': 'Invalid request method, supported method is POST'
        })

    converter = PdfConverter()
    response = converter.convert_to_jpg('converter_app/services/pdf_converter/sample.pdf')
    return JsonResponse({
        'message': 'Conversion successful',
        'data': response
    })

