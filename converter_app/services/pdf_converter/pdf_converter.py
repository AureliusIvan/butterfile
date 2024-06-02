from pdf2image import convert_from_path
from converter_app.services.converter.converter import Converter


class PdfConverter(Converter):
    """
    A class to convert PDF files into many other formats
    available formats are:
    - jpg
    - png
    """

    def __init__(self, name, file):
        super().__init__(name, file, 'pdf')

    def _pdf_to_images(self):
        """
        Converts a PDF file to images
        """
        # convert pdf to images
        print(self.file_path)
        image = convert_from_path("media/"
                                  + self.file_path,
                                  500)
        image[0].save("media/"
                      + self.name + ".jpg", "JPEG")

        return "media/" + self.name + ".jpg"

    def convert(self, target):
        """
        Converts a PDF file to images
        """
        # convert pdf to images
        if target == 'jpg':
            return self._pdf_to_images()
        else:
            raise ValueError('Invalid target format')

    def submit(self):
        pass
