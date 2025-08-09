<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from "./components/AsideArticle.vue";
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Como criar uma campanha?

<AsideArticle/>

## O que é uma campanha?

Uma campanha é uma estratégia para enviar mensagens para várias pessoas de maneira organizada, utilizando um tipo de
serviço.

## O que é necessário para criar uma campanha?

Para criar uma campanha, é preciso ter uma conta e possuir créditos para o disparo das mensagens. Caso você ainda não
possa uma conta, [veja nosso tutorial de como criar uma conta gratuitamente](/get-started).

Caso você não possua créditos
disponíveis, [clique aqui e adquira créditos](https://painel.allcancesms.com.br/app#!/administrador/faturas/new). Para
verificar a quantidade de créditos por serviço, [acesse o painel](https://painel.allcancesms.com.br/app) e
depois [clique em "Nova Campanha"](https://painel.allcancesms.com.br/app#!/campanha/new).

## Quais são as etapas de uma campanha?

Ela envolve quatro etapas:

1. **Escolher o tipo de serviço:** Aqui, você decide qual meio utilizar para enviar a mensagem. Pode ser SMS, WhatsApp
   ou torpedo. É importante que o serviço escolhido faça sentido para o seu objetivo.
2. **Definir os destinatários:** Nesse passo, você define quem vai receber a mensagem. Você pode enviar para um grupo
   específico de números que já esteja salvo, importar os números a partir de um arquivo, digitá-los ou colá-los
   manualmente.
3. **Criar a mensagem:** Aqui, você cria o conteúdo que será enviado. A mensagem deve ser clara e atrativa para engajar
   e chamar a atenção dos destinatários.
4. **Confirmação:** Você revisa os dados da campanha e confirma o envio da mensagem.

Vamos criar uma campanha? Siga o passo a passo!

## Passo 1: Escolher o tipo de serviço

- **Acesse o [nosso painel](https://painel.allcancesms.com.br/app).**
- **Procure pelo botão "Criar agora" ou "Criar Campanha" e clique nele.**

  No celular, o botão "Criar agora" aparece na tela de dashboard, no canto inferior:  
  ![Captura de tela de um smartphone, mostrando a tela de dashboard do Painel.](/img/tutorial/sm-dashboard.png)

  No computador, esse botão também aparece, e no menu à esquerda está o botão "Criar campanha":
  ![Captura de tela de um computador, mostrando o dashboard e o menu lateral.](/img/tutorial/dsk-dashboard.png)

- **Definindo o serviço e nomeando a campanha**

  Primeiro, dê um nome para a campanha que você está criando. Esse nome será usado para identificá-la posteriormente no
  painel e pode ter até 40 caracteres.

Com a campanha nomeada, é hora de escolher o tipo de serviço para o disparo das mensagens. Atualmente, temos oito
opções:

![Captura de tela da página de criação de campanha](/img/tutorial/select-service.png)

Os serviços disponíveis são:

- [SMS Transacional](/sms-campaigns.html#sms-transacional)
- [SMS OTP](/sms-campaigns.html#sms-otp)
- [SMS Blend](sms-campaigns.html#sms-blend)
- [SMS Massivo](sms-campaigns.html#sms-massivo)
- [SMS Bet Compartilhada](sms-campaigns.html#sms-bet-compartilhada)
- [WhatsApp](/whatsapp-campaigns)
- [Torpedo Interativo](/torpedo-campaings)

> [!TIP]
> Conheça a <a href="./trackers-links.html" target="_blank" style="color: var(--vp-custom-block-tip-text)">função de <b>
> rastreio de links</b></a> e acompanhe a taxa de cliques e comportamento dos seus destinatários, otimizando o seu
> negócio.

Cada serviço possui particularidades e aplicações específicas. Leia a descrição e verifique qual é o melhor para a sua
necessidade. Clicando sobre um dos serviços acima você pode ver um exemplo deles. Após selecionar um serviço, clique
em "Próximo".

## Passo 2: Informar os destinatários

![Captura de tela em que se informa os destinatários](/img/tutorial/select-sender.png)

Nesta etapa, você define quem receberá a mensagem. As opções são:

- Utilizar um grupo da agenda salvo previamente.
- Importar números a partir de um arquivo do tipo .txt, .xlsx ou .xls.
- Digitar ou colar os números manualmente.

Para selecionar uma dessas opções, clique no botão correspondente.

> [!IMPORTANT]
> Os números de telefone devem conter o DDD seguido de 8 ou 9 dígitos. Caso algum número esteja incorreto, um aviso será
> exibido na tela.  
> Exemplos de números corretos: ✅ 31999998888, ✅ 319999888 ✅ (31) 99999-8888  
> Números incorretos: ❌ 99998888, ❌ +31 9999-8888

Após informar os números, clique em "Próximo".

## Passo 3: Escrever a mensagem

> [!IMPORTANT]
> Se o serviço escolhido for **envio através do WhatsApp**, [clique aqui e saiba como escrever e formatar a mensagem](/whatsapp-campaigns#como-criar-uma-campanha). Já se o serviço for **Torpedo Interativo**, [clique aqui e veja como criar uma mensagem](/torpedo-campaings#como-criar-uma-mensagem-de-torpedo).

Nesta etapa, você escreve o texto que será enviado aos destinatários. A mensagem pode ter até 2000 caracteres (o limite
varia conforme o serviço escolhido). [Consulte a tarifação clicando aqui](/sms-campaigns#tarifacao).

Conforme você digita, no lado direito do formulário, uma pré-visualização da mensagem será exibida.

> [!TIP]
> Conheça a <a href="./trackers-links.html" target="_blank" style="color: var(--vp-custom-block-tip-text)">função de <b>
> rastreio de links</b></a> e acompanhe a taxa de cliques e comportamento dos seus destinatários, otimizando o seu
> negócio.

### Usando parâmetros na mensagem

Se a forma de adicionar os números de telefone dos destinatários foi através do upload de um arquivo do Excel, é
possível que você use a funcionalidade de parâmetros, criando uma mensagem mais personalizada.

Para que seja possível usar parâmetros para personalizar a mensagem, é preciso que na tabela tenha outra coluna além de "telefone", que é usada para localizar os números de telefone.

| nome	   | telefone     | 	cupom               |
|---------|--------------|----------------------|
| Gabriel | 	31999998888 | 	BEMVINDOGABRIEL     |
| Otávio  | 	31999997777 | 	BEMVINDOOTAVIO      |

Nesta tabela, além da coluna "telefone", temos "nome" e "cupom", então estes serão os parâmetros que o sistema me permitirá usar para personalizar a mensagem.

Para usar os parâmetros, clique no botão "Parâmetros" em cima da caixa de texto onde preenchemos a mensagem. Após clicar, vai aparecer uma lista com as colunas (parâmetros) que foram encontrados. Para inserir um deles na mensagem, é só clicar no nome da coluna.

![Captura de tela](/img/tutorial/parametros-acionado.png)

No nosso exemplo, se clicar no parâmetro "nome", vai ser inserido na caixa de mensagem `${nome}`. Se clicar em "cupom", `${cupom}`. Agora é só escrever a mensagem e manter esses textos `${[nomeDoParamentro]}` na mensagem para ela ficar no formato correto. Para acompanhar as alterações, fique de olho no preview que aparece do lado direito da tela, no celular.

![Captura de tela](/img/tutorial/mensagem-personalizada.png)

Observe que a nossa mensagem aparece no preview da forma como o destinatário vai receber, com o nome e cupom correspondente a ele.

--- 

Você pode optar por enviar a mensagem imediatamente ou programá-la para um horário específico. Caso escolha "Agendar",
defina a data e o horário.

![Captura de tela da etapa de "Mensagem" da funcionalidade criação de campanha do Painel.](/img/tutorial/message-config.png)

Após definir a mensagem e escolher quando ela será enviada, clique em "Próximo".

## Passo 4: Confirmação

Na última etapa, revise os dados da campanha. Certifique-se de que o tipo de serviço, a mensagem e a data/hora do
disparo estão corretos antes de confirmar.

![Captura de tela da etapa de "Confirmação" da funcionalidade criação de campanha do Painel.](/img/tutorial/confirm-campaign.png)

Se tudo estiver correto, clique em "Enviar campanha", leia o aviso sobre a cobrança de créditos e clique em "Aceito". *
*Pronto! A campanha está criada e a mensagem será enviada aos destinatários!**

Você pode acompanhar o envio através da funcionalidade de Lista de Campanhas (no menu lateral do Painel clique em "
Campanha", depois em "Lista") ou através do link <https://painel.allcancesms.com.br/app#!/campanha/list>

O primeiro status que deve aparecer é "Validando", onde o disparo é verificado e o envio preparado. Nesse status ainda é
possível [editar a mensagem](/edit-campaign-message).

![Captura de tela da campanha com status "Validando"](/img/tutorial/status-validando.png)

Depois, "Em andamento" - o disparo está sendo feito:

![Captura de tela da campanha com status "Em andamento"](/img/tutorial/status-andamento.png)

Por fim, "Finalizado":

![Captura de tela da campanha com status "Finalizado"](/img/tutorial/status-finished.png)

## Próximos passos

[Como editar a mensagem de uma campanha](/edit-campaign-message)  
[Localizando uma campanha](/search-campaigns)  
[Veja o desempenho, respostas e o rastreio de links de uma campanha](/advanced-filters-campaings)
