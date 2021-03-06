"""
WSGI config for frutas project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

#import os
from dotenv import load_dotenv
from pathlib import Path

from django.core.wsgi import get_wsgi_application

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)
#os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'frutas.settings')

application = get_wsgi_application()
