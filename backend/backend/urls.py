from django.urls import path, include
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from veiculos.views import VeiculoListCreateView, VeiculoDetailView, serve_imagem

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/veiculos/', VeiculoListCreateView.as_view(), name='veiculo_list_create'),
    path('api/veiculos/<int:pk>/', VeiculoDetailView.as_view(), name='veiculo_detail'),
    path('veiculos/static/<str:filename>/', serve_imagem, name='serve-imagem'),
]