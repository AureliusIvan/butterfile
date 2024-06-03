# create env
env:
	virtualenv env

# install requirements
install:
	@source env/bin/activate; pip3 install -r requirements.txt

# freeze requirements
freeze:
	pip3 freeze > requirements.txt

test:
	@source env/bin/activate; python3 manage.py test

dev:
	@source env/bin/activate; python3 manage.py runserver

collect static:
	@source env/bin/activate; python3 manage.py collectstatic
