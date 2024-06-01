# create env
env:
	virtualenv env

# install requirements
install:
	@source env/bin/activate; pip3 install -r requirements.txt

# freeze requirements
freeze:
	pip3 freeze > requirements.txt

dev:
	@source env/bin/activate; python3 manage.py runserver
