# Generated by Django 5.1.4 on 2024-12-17 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0006_alter_book_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='id',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]