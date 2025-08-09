<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Relatórios

<AsideArticle/>

## Relatório analítico

Este relatório permite obter dados sobre as mensagens disparadas. Com os filtros de pesquisa por número de telefone, mensagem e até mesmo por cliente, você consegue analisar o desempenho das campanhas.

- No menu lateral, clique em "Relatório" e depois em "Analítico"
- Na página que se abrir, preencha o formulário começando pela seleção do tipo de serviço (SMS, WhatsApp ou Torpedo)

  ![Captura de tela](/img/tutorial/tela-relatorio-an.png)

- Se desejar filtrar por nome do cliente, digite o nome do cliente e selecione um dos clientes listados
- No campo de status, também opcional, selecione o status da mensagem
- Clique no botão "Busca avançada" para definir outros parâmetros de busca
- Mais campos do formulário aparecerão. Vamos começar alterando o intervalo de tempo do período que queremos pesquisar. Por padrão, os dias são os mesmos. Clique nos campos de período e, no primeiro, defina uma data de início e, no segundo, a data de fim.

  ![Captura de tela](/img/tutorial/busca-avancada.png)

- O próximo campo permite buscar por número de telefone, e o seguinte, por mensagem. Você pode preenchê-los, se desejar.
- Com os parâmetros informados, clique em "Buscar" e os resultados serão listados. Se não houver resultados, a mensagem "Nenhum item encontrado na busca" será exibida

  ![Captura de tela](/img/tutorial/resultados-an.png)

## Relatório sintético

O relatório sintético é um extrato do uso dos nossos serviços: quantas mensagens foram solicitadas, quantas foram enviadas, quantas falharam, quantas receberam respostas, etc.

- No menu lateral, clique em "Relatório" e depois em "Sintético"

  ![Captura de tela](/img/tutorial/resultados-serv.png)

- Primeiro, selecione o tipo de serviço (SMS, WhatsApp ou Torpedo)
- Depois, escolha o cliente (opcional)
- No campo de período, selecione uma data de início e uma data de fim como intervalo de busca
- Por último, informe o valor total já investido (opcional)
- Clique em "Buscar" e os resultados serão listados, caso existam. Se não houver nenhum resultado, a mensagem "Nenhum item encontrado na busca" será exibida

  ![Captura de tela](/img/tutorial/resultados-por-serv.png)
