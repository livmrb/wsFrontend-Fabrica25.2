# wsFrontend-Fabrica25.2

Projeto frontend desenvolvido para o desafio da **Fábrica de Software 2025.2**, onde construí uma aplicação web para listar e exibir detalhes de Pokémons, com funcionalidades de busca, visualização em lista ou grade, favoritos e responsividade.


## Sobre o projeto

Esse projeto foi feito usando **Next.js** com **TypeScript** para criar uma experiência rápida e interativa.

Aqui você encontra uma lista de Pokémons, pode buscar por nome, alternar a forma de exibição, ver detalhes específicos de cada Pokémon e salvar seus favoritos. Além disso, o layout é responsivo para funcionar bem em celulares, tablets e desktops.


## Funcionalidades

### Requisitos Mínimos

- **Cabeçalho e Rodapé**: Sempre visíveis na parte superior e inferior da página.
- **Tela Inicial**: Lista os Pokémons com:
  - Nome (ex: Bulbasaur)
  - ID da Pokédex (ex: #001)
  - Imagem do Pokémon
- **Barra de Pesquisa**:
  - Campo de texto para buscar Pokémons pelo nome
  - Filtra a lista em tempo real enquanto digita, ou ao clicar em "Buscar" / apertar Enter

### Requisitos Intermediários

- **Alternar Visualização**: Botão para trocar entre:
  - Layout em grade (grid)
  - Layout em lista vertical
- **Página de Detalhes**:
  - Rota dinâmica `/detalhes/{id}`
  - Exibe informações detalhadas do Pokémon:
    - Nome
    - ID
    - Imagem
    - Tipo(s) (ex: "Grass", "Poison")
    - Peso
    - Experiência Base

### Requisitos Avançados

- **Responsividade**: Layout adaptado para celulares, tablets e desktops, garantindo boa usabilidade em todos os dispositivos.
- **Pokémons Favoritos**:
  - Usuário pode favoritar/desfavoritar Pokémons
  - Página `/favoritos` com a lista dos Pokémons marcados como favoritos

---

## Tecnologias Utilizadas

- **Next.js** — Framework React para SSR e rotas dinâmicas.
- **TypeScript** — Tipagem estática para código mais seguro e organizado.
- **CSS Modules** — Estilos modularizados por componente.
- **ESLint e Prettier** — Para manter o código limpo e consistente.
- **Vercel** — Plataforma para deploy e hospedagem online.

---

## Deploy

A aplicação está publicada na Vercel e pode ser acessada aqui:

[ws-frontend-fabrica25-2-khaki.vercel.app](https://ws-frontend-fabrica25-2-khaki.vercel.app)



