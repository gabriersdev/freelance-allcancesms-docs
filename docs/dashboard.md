<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Dashboard

<AsideArticle/>

Nosso dashboard oferece uma visão completa e detalhada das suas campanhas, permitindo monitoramento em tempo real, com atualizações a cada minuto, e tomada de decisões estratégicas com base nas informações.

## O que você pode acompanhar no nosso dashboard?

- Status das campanhas: a quantidade de campanhas que estão sendo processadas e a quantidade das que foram enviadas.
- Itens na caixa de entrada: as mensagens que foram recebidas.
- Campanhas dos últimos 10 dias, separadas por serviço.
- A mensagem e as métricas das últimas 5 campanhas.

## Status das campanhas e caixa de entrada

Informa a quantidade de campanhas que estão sendo processadas, as que foram enviadas e a quantidade de itens na caixa de entrada.
![Captura de tela da seção status dos serviços](/img/tutorial/dashboard-status.png)

## Gráfico de campanhas - últimos 10 dias

É possível expandir ou diminuir o gráfico, dar zoom e baixar os dados do gráfico.
![Gráfico de campanhas](/img/tutorial/info-campaigns.png)

## Últimas 5 campanhas

Você consegue visualizar a mensagem e o relatório da campanha.
![Captura de tela da seção de últimas 5 campanhas](/img/tutorial/list-5-campaigns.png)

## Atualização automática

O dashboard também possui a função de atualização automática a cada X minutos. Para definir, basta clicar em "Sem atualização" e escolher uma das opções de intervalo de tempo.

![Captura de tela do botão e modal de atualização](/img/tutorial/time-update.png)
