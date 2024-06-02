from abc import ABC, abstractmethod
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile


class Converter(ABC):
    file: None
    file_path: str
    extension: str
    name: str

    def __init__(self, name=None, file=None, extension=None):
        self.name = name
        self.file = file
        self.extension = extension

    def save(self):
        if self.file is None:
            raise ValueError('File is required')
        if self.name is None:
            raise ValueError('Name is required')
        if self.extension is None:
            raise ValueError('Extension is required')
        self.file_path = default_storage.save(f'converter_app/services/pdf_converter/{self.name}.{self.extension}',
                                              ContentFile(self.file.read()))
        return self.file_path

    @abstractmethod
    def submit(self):
        pass
