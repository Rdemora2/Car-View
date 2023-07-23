import os
from django.conf import settings
from django.http import HttpResponse, Http404
from rest_framework import generics
from .models import Veiculo
from .serializers import VeiculoSerializer
from rest_framework.permissions import IsAuthenticated

class VeiculoListCreateView(generics.ListCreateAPIView):
    queryset = Veiculo.objects.all().order_by('valor')
    serializer_class = VeiculoSerializer

class VeiculoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Veiculo.objects.all()
    serializer_class = VeiculoSerializer

def serve_imagem(request, filename):
    imagem_path = os.path.join(settings.STATICFILES_DIRS[0], filename)
    if os.path.exists(imagem_path):
        with open(imagem_path, 'rb') as f:
            return HttpResponse(f.read(), content_type='image/jpeg')
    else:
        raise Http404