# Generated by Django 5.0.4 on 2024-04-19 10:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_alter_favoriterecipe_image_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="plannedrecipe",
            name="recipe",
        ),
    ]
