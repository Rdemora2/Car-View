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