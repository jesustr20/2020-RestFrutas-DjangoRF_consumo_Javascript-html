# Generated by Django 3.0.8 on 2020-07-16 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Frutas',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('tipo', models.CharField(max_length=20)),
                ('cantidad', models.IntegerField()),
            ],
        ),
    ]
