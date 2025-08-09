<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Torpedo Interativo

<AsideArticle/>

## O que é?

O disparo de torpedos interativos é uma estratégia poderosa para engajar seu público de forma rápida e eficaz. Com essa funcionalidade, você pode enviar mensagens em forma de chamadas, permitindo interações diretas e instantâneas com os clientes. É possível criar fluxos e integrar com webhooks.

## Como as chamadas são feitas?

Utilizamos nossos números para ligar para o destinatário. Ele interage com o torpedo e a resposta pode ser monitorada no relatório.

## Como criar uma mensagem de torpedo a partir de um modelo anterior?

Se você tem dúvidas sobre como criar uma campanha, [siga o nosso tutorial](/create-campaign#como-criar-uma-campanha). Na terceira etapa, quando for escrever a mensagem, siga os passos abaixo.

É possível reutilizar a mensagem de uma campanha de torpedo anterior. Para isso, marque a caixa de seleção em frente à "Selecionar modelo" e, no campo que se abrir, selecione o torpedo anterior. O fluxo será recuperado e você poderá alterar o que desejar.

![Captura de tela](/img/tutorial/selecionar-modelo-anterior.png)

## Criando mensagem de torpedo do zero

Se você tem dúvidas sobre como criar uma campanha, [siga o nosso tutorial](/create-campaign#como-criar-uma-campanha). Na terceira etapa, quando for escrever a mensagem, siga os passos abaixo.

- Deixe desmarcada a caixa de seleção "Selecionar modelo".
- Clique no botão com o ícone de clipe, escrito "Áudio não entendi", e selecione um arquivo de áudio MP3. Este áudio será reproduzido quando o destinatário disser algo que o sistema não entender.

  ![Captura de tela](/img/tutorial/selecao-audio.png)

- Após o upload, o áudio será carregado e você poderá ouvi-lo. Se desejar alterá-lo, basta clicar novamente no botão com o ícone de clipe.

  ![Captura de tela](/img/tutorial/audio-1-escolhido.png)

### Fluxo do torpedo

- Vamos agora configurar o **fluxo do torpedo**. Primeiramente, escolha o áudio inicial, aquele que o destinatário ouvirá quando atender a ligação. Defina um nome (identificador) para ele e selecione o arquivo de áudio MP3, clicando no botão com ícone de clipe "Selecionar áudio" e fazendo o upload do arquivo. Caso tenha um endpoint, forneça o link do webhook e o 'callerid'. **Se não tiver, deixe esses campos vazios**.

  ![Captura de tela](/img/tutorial/audio-inicial-informado.png)

- Clique em "Nova interação" para definir o primeiro gatilho. Os áudios definidos nesta parte do fluxo serão tocados apenas quando um dos gatilhos for identificado.
- No campo "Gatilhos (separado por vírgula)", defina os termos que o usuário pode dizer quando houver interesse em uma compra:
