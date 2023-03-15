
from rest_framework.serializers import HyperlinkedModelSerializer

from .models import User

#class AuthorModelSerializer(ModelSerializer):

    #class Meta:
       #model = Author
        #fields = "__all__"
        #fields = ("first_name",)
class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields  = ('username','first_name','last_name','email')