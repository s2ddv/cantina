from django.shortcuts import render

from rest_framework import generics
from .models import Categoria, Produto 
from .serializers import CategoriaSerializer, ProdutoSerializer

class CategoriaDetail(generics.RetrieveDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaList(generics.ListCreateAPIView): 
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ProdutoList(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

class ProdutoDetail(generics.RetrieveDestroyAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer