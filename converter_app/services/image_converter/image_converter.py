from django.http import JsonResponse


class ImageConverter:
    def __init__(self, image_path):
        self.image_path = image_path

    @staticmethod
    def convert(s):
        return JsonResponse({
            'message': 'Conversion successful',
            'data': str(s)
        })
