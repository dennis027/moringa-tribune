from django import forms
from .models import Article
class NewsLetterForm(forms.Form):
    your_name = forms.CharField(label='First Name',max_length=30)
    email = forms.EmailField(label='Email')

class NewArticleForm(forms.Form):
    class Meta:
        model= Article
        exclude = {'editor','pub_date'}
        widget = {
            'tags':forms.CheckboxSelectMultiple(),
        }
