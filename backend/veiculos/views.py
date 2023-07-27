import os
from django.conf import settings
from django.http import HttpResponse, Http404, HttpResponseBadRequest
from rest_framework import generics
from .models import Veiculo
from .serializers import VeiculoSerializer
from rest_framework.permissions import IsAuthenticated
from PIL import Image
from rest_framework.response import Response

class VeiculoListCreateView(generics.ListCreateAPIView):
    queryset = Veiculo.objects.all().order_by('valor')
    serializer_class = VeiculoSerializer
    permission_classes = [IsAuthenticated]

class VeiculoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Veiculo.objects.all()
    serializer_class = VeiculoSerializer
    permission_classes = [IsAuthenticated]

class VeiculoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Veiculo.objects.all()
    serializer_class = VeiculoSerializer
    permission_classes = [IsAuthenticated]

    def put(self, request, *args, **kwargs):
        veiculo = self.get_object()
        foto = request.data.get('foto', None)

        if foto:
            # Verifica se o arquivo enviado é uma imagem válida
            try:
                img = Image.open(foto)
                img.verify()  # Verifica se o arquivo é uma imagem válida
            except Exception as e:
                return Response({'foto': ['Fazer upload de uma imagem válida. O arquivo enviado não é um arquivo de imagem ou está corrompido.']}, status=status.HTTP_400_BAD_REQUEST)

            # Caso a foto tenha sido enviada e seja uma imagem válida, atualize a foto do veículo
            veiculo.foto = foto

        veiculo.marca = request.data.get('marca', veiculo.marca)
        veiculo.modelo = request.data.get('modelo', veiculo.modelo)
        veiculo.valor = request.data.get('valor', veiculo.valor)
        veiculo.save()

        serializer = VeiculoSerializer(veiculo)
        return Response(serializer.data)

def serve_imagem(request, filename):
    imagem_path = os.path.join(settings.STATICFILES_DIRS[0], filename)
    if os.path.exists(imagem_path):
        with open(imagem_path, 'rb') as f:
            return HttpResponse(f.read(), content_type='image/jpeg')
    else:
        raise Http404