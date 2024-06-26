# Generated by Django 5.0.4 on 2024-04-21 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="DietaryPreference",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("preference_name", models.CharField(max_length=100)),
                ("is_selected", models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name="FavoriteRecipe",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("servings", models.IntegerField()),
                ("name", models.CharField(max_length=100)),
                ("image", models.CharField(max_length=255)),
                ("minutes", models.CharField(max_length=100)),
                ("likes", models.CharField(max_length=100)),
                ("recipe", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Ingredient",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                (
                    "image",
                    models.CharField(
                        default="https://placeholder.pics/svg/300/DEDEDE/555555/image",
                        max_length=255,
                    ),
                ),
                ("quantity", models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name="Macro",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("macro_type", models.CharField(max_length=50)),
                ("quantity", models.DecimalField(decimal_places=2, max_digits=10)),
                ("name", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="PlannedRecipe",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("date_for", models.DateField()),
                ("recipe", models.IntegerField()),
                ("name", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="ShoppingList",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("quantity", models.DecimalField(decimal_places=2, max_digits=10)),
                ("is_purchased", models.BooleanField(default=False)),
                ("name", models.CharField(max_length=100)),
                ("image", models.CharField(max_length=255)),
            ],
        ),
    ]
