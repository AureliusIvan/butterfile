from django.http import JsonResponse
from pdf2image import convert_from_path
import os


class PdfConverter:
    """
    A class to convert PDF files into many other formats
    """

    def _move_file(self, file_path, new_path):
        """
        Moves a file from one location to another
        :param file_path: The path to the file to move
        :param new_path: The new path for the file
        :return: The new path of the file
        """
        os.rename(file_path, new_path)
        return new_path

    @staticmethod
    def convert_to_jpg(pdf_path):
        """
        Converts a PDF file to images
        :param pdf_path: The path to the PDF file
        :return: A list of images
        """
        return JsonResponse({
            'message': 'Conversion successful',
            'data': convert_from_path(pdf_path)
        })
