from django.db import models

class Veiculo(models.Model):
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    foto = models.ImageField(upload_to='veiculos/static/')
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    ano = models.IntegerField(default=0000)
    odometro = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return f"{self.marca} {self.modelo} - {self.ano}"


