# Pokédex Simples - Next.js + TypeScript

Uma aplicação Pokédx **simples e direta** desenvolvida para iniciantes, cumprindo todos os requisitos solicitados.

## 🎯 **Funcionalidades Implementadas**

### ✅ **Requisitos Básicos**
- **Header e Footer**: Navegação simples em todas as páginas
- **Lista de Pokémons**: Primeiros 20 Pokémons com nome, ID (#001, #002...) e imagem
- **Barra de Pesquisa**: 
  - Pesquisa em tempo real conforme digita
  - Funciona com Enter ou botão "Buscar"
  - Exemplo: digite "char" para encontrar Charmander e Charizard

### ✅ **Requisitos Intermediários**
- **Alternância de Visualização**: Botões para alternar entre Grade (⊞) e Lista (☰)
- **Página de Detalhes**: 
  - URL: `/detalhes/{id}` (ex: `/detalhes/1` para Bulbasaur)
  - Mostra: Nome, ID, Imagem, Tipos, Peso, Experiência Base
  - Botão "Voltar" e sistema de favoritos

### ✅ **Requisitos Avançados**
- **Responsividade**: Funciona em celular, tablet e desktop
- **Sistema de Favoritos**:
  - Clique no coração (🤍/❤️) para favoritar
  - Página `/favoritos` mostra todos os favoritos
  - Dados salvos no localStorage (persistem entre sessões)

## 🛠️ **Tecnologias (Simples)**

- **Next.js 14** (versão estável)
- **TypeScript** (tipagem básica)
- **Axios** (requisições HTTP)
- **CSS puro** (sem frameworks)
- **PokéAPI** (dados dos Pokémons)

## 📁 **Estrutura Simples**

```
src/
├── app/                    # Páginas do Next.js
│   ├── page.tsx           # Página inicial
│   ├── layout.tsx         # Layout com Header/Footer
│   ├── globals.css        # Estilos CSS
│   ├── detalhes/[id]/     # Página de detalhes
│   └── favoritos/         # Página de favoritos
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho
│   └── Footer.tsx         # Rodapé
├── lib/                   # Lógica de negócio
│   ├── api.ts            # Chamadas para PokéAPI
│   └── favoritos.ts      # Sistema de favoritos
└── types/                 # Tipos TypeScript
    └── pokemon.ts         # Interfaces dos Pokémons
```

## 🚀 **Como Executar**

1. **Extrair o projeto**:
   ```bash
   unzip pokedex-simples.zip
   cd pokedex-simples
   ```

2. **Instalar dependências**:
   ```bash
   npm install
   ```

3. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acessar no navegador**:
   - Abra: http://localhost:3000

## 📱 **Como Usar**

### **Página Inicial (`/`)**
- Veja a lista de 20 Pokémons
- Use a barra de pesquisa para filtrar
- Alterne entre Grade e Lista
- Clique no coração para favoritar
- Clique no Pokémon para ver detalhes

### **Página de Detalhes (`/detalhes/{id}`)**
- Veja informações completas do Pokémon
- Tipos (Grass, Poison, Fire, etc.)
- Peso em quilogramas
- Experiência base em XP
- Botão para favoritar/desfavoritar

### **Página de Favoritos (`/favoritos`)**
- Lista todos os Pokémons favoritados
- Mesmas opções de visualização
- Clique no ❤️ para remover dos favoritos

## 🎨 **Características Simples**

- **Código Limpo**: Fácil de entender para iniciantes
- **Comentários em Português**: Explicações claras
- **Sem Abstrações Complexas**: Lógica direta e simples
- **CSS Básico**: Estilos funcionais sem frameworks
- **Tratamento de Erros**: Mensagens claras para o usuário

## 🔧 **Diferenças da Versão Simplificada**

- Carrega apenas 20 Pokémons (mais rápido para teste)
- Código mais direto, menos abstrações
- Comentários explicativos em português
- Estrutura de pastas mais simples
- CSS inline + classes básicas
- Lógica de estado mais direta

## 📝 **Para Iniciantes**

Este projeto é ideal para quem está aprendendo:
- **React/Next.js**: Componentes funcionais e hooks básicos
- **TypeScript**: Tipagem simples e interfaces
- **CSS**: Flexbox, Grid e responsividade
- **APIs**: Consumo de dados externos
- **Estado**: useState e useEffect
- **Roteamento**: Next.js App Router

---

**Desenvolvido de forma simples e direta para facilitar o aprendizado! 🚀**
