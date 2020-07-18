"""
ASGI config for frutas project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/asgi/
"""

#import os
from dotenv import load_dotenv
from pathlib import Path

from django.core.asgi import get_asgi_application

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)
#os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'frutas.settings')

application = get_asgi_application()
