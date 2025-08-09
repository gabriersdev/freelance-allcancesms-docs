<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Obtendo métricas importantes com o relatório de campanha

<AsideArticle/>

Acompanhar os resultados de uma campanha é essencial para entender o engajamento do público e ajustar estratégias. Com esses dados, é possível otimizar a comunicação, aumentar a taxa de conversão e melhorar o retorno sobre o investimento. Nossa funcionalidade de relatório de campanha fornece dados importantes para os seus disparos.

## O que é?

O relatório de campanhas é uma ferramenta disponível para as campanhas criadas no mês. Através dele, você obtém:

- O percentual de entrega das mensagens.
- A quantidade de números válidos (para os quais a mensagem foi enviada).
- A quantidade de respostas e números enviados.
- As respostas e a relação de interação com os links monitorados.

## Gerando um relatório

O relatório pode ser gerado na lista de campanhas (acesse através do menu lateral "Campanha" e clique em "Lista"). Com as campanhas na tela, escolha uma para gerar o relatório.

- Na campanha escolhida, clique em "Relatório".
- Um gráfico de pizza com as métricas de entrega aparecerá na tela. Ele exibe informações importantes como data e horário do início, envio e fim do disparo; quantidade de números de destino, números válidos, números para os quais a mensagem foi enviada e quantidade de respostas.
  ![Captura de tela do gráfico de pizza](/img/tutorial/pizza-data.png)
- Ao clicar no botão "Gerar relatório", um arquivo no formato .xlsx (para Excel) será gerado e baixado. No arquivo, são listados dados como data de envio, data de entrega, número de telefone, status do envio, mensagem, operadora, entre outros:

  | Data de Envio       | Data de Entrega     | Número      | Status           | Descrição                    | Mensagem                                  | Operadora | Tipo  |
    |---------------------|---------------------|-------------|------------------|------------------------------|-------------------------------------------|-----------|-------|
  | 14/02/2025 17:54:40 | 14/02/2025 17:55:35 | 31999998888 | Entregue Celular | Message delivered to handset | Mensagem... <https://allcancesms.com.br/> | VIVO      | Móvel |

- Clicando no botão "Mensagens", você obtém um [extrato das mensagens enviadas](#extrato-de-mensagens), [extrato de rastreamento de cliques](#tracker-rastreamento-de-cliques) e [interações](#respostas-as-mensagens) detalhadas. Continue lendo.

## Extrato de mensagens

> [!NOTE]
> Para acessar esta parte do relatório, vá ao menu lateral, clique em "Campanha" e depois em "Lista". Filtre as campanhas, localize a desejada e clique no botão "Relatório". Em seguida, clique no botão "Mensagens".

![Captura de tela do painel, com o modal de relatório aberto](/img/tutorial/send-extract.png)

As mensagens enviadas serão listadas, juntamente com o status de cada uma e o número de telefone do destinatário.

## Respostas às mensagens

> [!NOTE]
> Para acessar esta parte do relatório, vá ao menu lateral, clique em "Campanha" e depois em "Lista". Filtre as campanhas, localize a desejada e clique no botão "Relatório". Em seguida, clique no botão "Mensagens".

As mensagens enviadas podem receber respostas, independente do canal utilizado (SMS ou WhatsApp). Com a funcionalidade de respostas, você pode criar um canal de comunicação direto com o cliente.

Para visualizar as respostas, clique na aba "Respostas".

![Captura de tela do modal, com a aba de "Respostas" aberta](/img/tutorial/replies.png)

As interações serão listadas. O painel permite responder diretamente pelo WhatsApp ou adicionar o número à lista negra. O status da resposta também será exibido: "Pendente" enquanto o botão para responder pelo WhatsApp não for clicado, e "Respondido" quando for.

![Captura de tela com campanha com o status de "respondido"](/img/tutorial/replies-returned.png)

## Tracker - rastreamento de cliques

Conheça a funcionalidade de rastreamento de links [clicando aqui](/trackers-links). Para ver o tutorial de como gerar o relatório de cliques dos links rastreados, [clique aqui](/trackers-links#onde-eu-vejo-o-desempenho-e-os-cliques-no-link-rastreado).

