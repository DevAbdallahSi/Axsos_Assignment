from django.shortcuts import render ,redirect
from . import models

# book page setup
def index (request):
    contex={
        'book_list':models.get_all_books()
    }
    return render (request, 'index.html',contex)

def add_new_book(request):
    if request.method == 'POST':
        models.add_new_book(request.POST)
        return redirect('/')
    else:
        return redirect('/')
# book and thier authors >>>>>>>>>>
def books_and_thir_author(request,id):
    context={
        'book':models.get_book_by(id),
        'author_list':models.get_autors_by_its_book(id),
        'authors':models.get_all_authors(),
        'id':id
    }
    return render (request, 'Book_with_id.html',context)

# ///////////////////////////////////////////////////////////////////////////////////////////
#  author page setup >>>>>>>>>>>>>>>
def show_author_page(request):
    contex={
        'author_list':models.get_all_authors()

    }
    return render(request, 'Authors.html',contex)

def add_new_author(request):
    if request.method == 'POST':
        models.add_new_author(request.POST)
        return redirect('/author_page')
    else:
        return redirect('/author_page')
    
# >>>>>>>>>>>>>>>>>>>>>>  author_and_thir_books setup  <<<<<<<<<<<
def author_and_thir_books(request,id):
    context={
        'author':models.get_author_by_id(id),  
        'books':models.get_all_books(),
        'books_list':models.get_books_by_its_author(id)
    }
    return render(request, 'autho_with_id.html',context)

# >>>>>>>>>>>>>>>>>>>>> print_the_selected_author <<<<<<<<<<<<<<<
def print_the_selected_author(request,id):
    models.add_auther_to_book(request.POST,id)
    return redirect(f'/book_authors/{id}')

def books_of_author(request, id):
    context = {
        'author_books': models.get_author_by_id(id),
        'books_list': models.get_book_by_its_authors(id),
        'books': models.get_all_books()  # for the dropdown
    }
    return render(request, 'Autho_with_id.html', context)

def add_new_book_to_author(request,id):
    if request.method == "POST":
        models.add_books_to_author(request.POST,id)
        return redirect(f'/author_books/{id}')