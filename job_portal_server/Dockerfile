FROM python:3
WORKDIR /code-server
COPY . /code-server
RUN apt-get update 
RUN apt-get install python3-dev default-libmysqlclient-dev build-essential -y
RUN pip install mysqlclient
RUN pip install Django
RUN pip install djangorestframework
CMD ["python" , "manage.py" , "runserver", "0.0.0.0:8000", "--noreload"]