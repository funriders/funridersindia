from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

# Create your views here.
def index(request):
    return render(request, "index.html")

def contact(request):
    print("Request method:", request.method)

    if request.method == "POST":
        print("POST data received:", request.POST)

        form = ContactForm(request.POST)

        if form.is_valid():
            print("Form is valid")
            print("Cleaned data:", form.cleaned_data)

            form.save()
            print("Form saved to database")

            messages.success(request, "Thank you! We will contact you shortly.")
            return redirect('contact')
        else:
            print("Form is NOT valid")
            print("Form errors:", form.errors)

    else:
        print("GET request – loading empty form")
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})

def career(request):
    return render(request, "career.html")

def about(request):
    return render(request, "about.html")


