# Podcast Manager

API RESTful em Node.js e TypeScript para listar e filtrar episódios de podcasts a partir de um arquivo JSON local. O projeto não usa frameworks HTTP: ele trabalha diretamente com o módulo nativo `http` do Node.

## Visão Geral

O servidor expõe duas rotas `GET`:

- Listar todos os episódios cadastrados
- Filtrar episódios pelo nome do podcast

Os dados ficam em [src/repositories/podcasts.json](src/repositories/podcasts.json) e são lidos diretamente pela aplicação.

## Tecnologias

- Node.js
- TypeScript
- Módulo `http` nativo
- `tsx` para execução em desenvolvimento
- `tsup` para build

## Estrutura

- [src/server.ts](src/server.ts): inicializa o servidor HTTP
- [src/app.ts](src/app.ts): centraliza o roteamento das requisições
- [src/controllers/](src/controllers/): camada de controller
- [src/services/](src/services/): regras de negócio para listagem e filtro
- [src/repositories/](src/repositories/): acesso aos dados em JSON
- [src/models/](src/models/): contratos de dados
- [src/routes/](src/routes/): definição das rotas
- [src/utils/](src/utils/): enums e constantes auxiliares

## Requisitos

- Node.js instalado
- pnpm instalado

## Instalação

```bash
pnpm install
```

## Como Executar

### Desenvolvimento

```bash
pnpm run dev
```

### Desenvolvimento com watch

```bash
pnpm run dev:watch
```

### Build

```bash
pnpm run dist
```

O build gera os arquivos em `dist/`.

## Rotas Disponíveis

### `GET /api/list`

Retorna todos os episódios disponíveis no arquivo JSON.

Exemplo de resposta:

```json
[
  {
    "podcastName": "GQ",
    "episode": "Kendrick Lamar & Rick Rubin Have an Epic Conversation",
    "videoId": "4lPD5PtqMiE",
    "categories": ["Music", "Hip-Hop", "Creative Process", "Talk Show"]
  }
]
```

### `GET /api/podcast?p=nome-do-podcast`

Filtra os episódios pelo campo `podcastName`.

Exemplo:

```bash
GET /api/podcast?p=GQ
```

Observação: o filtro faz comparação exata com o valor salvo em `podcastName`.

## Modelo de Dados

Cada item do arquivo JSON segue este formato:

```ts
{
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}
```

## Códigos de Resposta

A API responde com JSON e usa os seguintes status principais:

- `200`: quando há dados retornados
- `204`: quando não há resultados

## Configuração de Ambiente

O servidor lê a porta pela variável `PORT`.

Crie um arquivo `.env` na raiz do projeto com algo assim:

```env
PORT=3333
```
