from django.contrib import admin
from .models import Book

class BookAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'author', 'published_date']
    search_fields = ['id', 'title']

admin.site.register(Book, BookAdmin)
