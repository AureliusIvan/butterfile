# File Morph (Django File Converter)
This is a simple Django project that allows users to upload a file and convert \
it to a different format. The project uses Celery to handle the file conversion task asynchronously.

## Installation
1. Clone the repository
2. Create a virtual environment and activate it or you can easily use the makefile by running `make env`
3. Install the dependencies using `pip install -r requirements.txt`
4. Run the Django server using `python manage.py runserver` or `make dev`
5. cd into client and run `npm install` to install the dependencies
6. Run the client using `npm start`
7. Access the application at `http://localhost:5173/`
8. Enjoy!

## Usage
1. Upload a file
2. Select the desired output format
3. Click the "Convert" button
4. Wait for the conversion to complete
5. Download the converted file