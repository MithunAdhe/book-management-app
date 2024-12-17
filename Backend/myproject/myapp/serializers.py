from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    book_image = serializers.ImageField(required=False)

    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'published_date', 'isbn_number', 'book_image']