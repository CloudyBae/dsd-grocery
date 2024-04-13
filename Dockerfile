FROM python:3.12.3-alpine3.19
LABEL maintainer="yoon"

ENV PYTHONUNBUFFERED 1

COPY ./zbackend/requirements.txt /tmp/requirements.txt
COPY ./zbackend /app
WORKDIR /app
EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    adduser \
    --disabled-password \
    --no-create-home \
    django-user

ENV PATH="/py/bin:$PATH"

USER django-user
