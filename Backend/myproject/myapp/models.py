
from django.db import models

class Book(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    published_date = models.DateField()
    isbn_number = models.CharField(max_length=13)
    book_image = models.ImageField(upload_to='book_covers/', null=True, blank=True)

    def __str__(self):
        return self.title
