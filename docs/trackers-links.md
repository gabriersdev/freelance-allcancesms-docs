<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from "./components/AsideArticle.vue";
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Rastreador de Links

<AsideArticle/>

## O que é e como funciona um rastreador de links?

A funcionalidade permite monitorar e registrar as interações dos usuários com os disparos de SMS, garantindo uma análise detalhada do engajamento. Para isso, a URL original é mascarada e redirecionada por meio do nosso domínio, proporcionando maior controle sobre os acessos e preservando a identidade dos links enviados.

Com essa solução, é possível acompanhar métricas essenciais, como taxa de cliques e comportamento dos destinatários, otimizando campanhas e estratégias de comunicação de forma precisa e segura.

## Como usar o rastreador de links?

A funcionalidade está disponível para as campanhas com o serviço de SMS OTP. Na etapa 3, em que a mensagem é definida, você inclui o link no corpo da mensagem e depois marca a caixa de seleção **"Rastrear links da mensagem"**.

![Captura de tela da etapa 3 - mensagem, com ênfase na seleção da opção "Rastrear links da mensagem"](/img/tutorial/tracker-link.png)

Para o destinatário, a mensagem aparece assim:

![Captura de tela de mensagem SMS](/img/tutorial/message-link.png)

## Onde eu vejo o desempenho e os clicks no link rastreado?

Você pode ver quais dos seus destinatários clicaram no link rastreado através do relatório da campanha. Para chegar até lá, siga os passos abaixo:

- No menu **Campanha**, clique em **Lista**.
- Localize a campanha.
- Clique no **botão Relatório**.
- No popup que irá se abrir, clique em **Mensagens**.
- Depois, clique na aba **Trackers**.
- Você verá uma lista com os destinatários que clicaram no link.

![Captura de tela do modal de relatório de campanha](/img/tutorial/relatorio-tracker.png)

Na coluna **Data**, você verá o dia e horário que o destinatário acessou o link; na coluna **Telefone**, o número de telefone para o qual a mensagem foi enviada; na coluna **Destino**, o link originalmente definido na mensagem; e, na última coluna, **Ação**, que tem um botão que ao ser clicado, redireciona para o WhatsApp do número do destinatário.
