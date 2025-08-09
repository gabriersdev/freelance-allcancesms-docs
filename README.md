# Allcance SMS - Documentação do Painel

## Visão Geral

Este repositório contém a documentação oficial do painel da Allcance SMS. O objetivo é fornecer informações detalhadas sobre funcionalidades, configuração e uso da plataforma. A documentação está disponível clicando no link disponível nas informações do repositório.

## Tecnologias Utilizadas

- **VitePress**: Gerador de sites estáticos otimizado para documentação.
- **Markdown**: Formato de escrita para documentação estruturada.
- **GitHub Pages**: Hospedagem para a documentação online.

## Estrutura do Repositório

```
/docs
  |-- .vitepress/        # Configurações do VitePress
  |-- public/            # Arquivos estáticos (imagens, ícones, etc.)
  |-- index.md           # Página inicial
  |-- XXXX.md            # Demais arquivos
```

## Como Rodar Localmente

1. Clone este repositório:

   ```sh
   git clone https://github.com/allcance/doc.git
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd doc
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   npm run docs:dev
   ```

5. Acesse `http://localhost:5173` (porta 5173 é a padrão, se ela estiver o projeto ficará disponível em outra) no navegador.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua contribuição:

   ```sh
   git checkout -b minha-contribuicao
   ```

3. Faça as alterações e envie um commit:

   ```sh
   git commit -m "Melhoria na documentação"
   ```

4. Envie um pull request para análise.

## Deploy no GitHub Pages

Para publicar a documentação:

```sh
npm run docs:build
```

Configure o workflow para deploy no GitHub Pages

---
© 2025 Allcance SMS. Todos os direitos reservados.
