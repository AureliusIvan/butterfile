from django.db import models


class Document(models.Model):
    """
    Model for Document.\n
    Will store the uploaded file and the converted file.\n

    Attributes:
    docfile: FileField
    uploaded_at: DateTimeField
    converted: BooleanField
    converted_file: FileField
    converted_at: DateTimeField
    converted_by: CharField

    Methods:
    __str__: Returns the name of the file
    """
    docfile = models.FileField(upload_to='documents/%Y/%m/%d')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    converted = models.BooleanField(default=False)
    converted_file = models.FileField(upload_to='converted/%Y/%m/%d', blank=True, null=True)
    converted_at = models.DateTimeField(blank=True, null=True)
    converted_by = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.docfile.name
