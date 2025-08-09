<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Automatizando respostas

Configure respostas automáticas para agilizar atendimentos e melhorar a interação. Defina termos e palavras-chave para ativar respostas personalizadas e crie fluxos automatizados para confirmar recebimentos, fornecer informações ou coletar dados sem intervenção manual.

<AsideArticle/>

## Conectando uma conta de WhatsApp

- No menu lateral, clique em "Auto resposta".
- A página de auto respostas, com as abas "Conexão" e "Serviços", aparecerá. Clique em "Conexão".
- Um QR Code será gerado para o sistema responder via WhatsApp.

  ![Captura de tela](/img/tutorial/auto-respostas-qr.png)

- Abra o WhatsApp no seu telefone, clique nos três pontinhos na aba "Conversas", depois em "Dispositivos conectados".
- Clique em "Conectar dispositivo" e escaneie o QR Code.
- Se a conexão for bem-sucedida, a mensagem abaixo será exibida no painel.

  ![Captura de tela](/img/tutorial/conectado.png)

  > [!NOTE]
  > Você pode desconectar a qualquer momento clicando em "Desconectar" na página de auto respostas.

## Definindo os gatilhos e respostas

- Na aba "Serviços", clique em "Adicionar serviço".
- No popup, defina o gatilho, a forma de resposta e a mensagem.

  ![Captura de tela](/img/tutorial/modal-add-servico.png)

- Escolha o serviço de origem do gatilho.
- Selecione a saída (como será respondido).
- No campo "Gatilhos", insira as palavras-chave a serem monitoradas.
- Escreva a mensagem de resposta. Se a saída for WhatsApp, é possível personalizar o nome, foto e recado. SMS não permite essas opções.

  ![Captura de tela](/img/tutorial/mensagem-gatilho.png)

- Formate a mensagem com **negrito**, <s>tachado</s> e emojis!
    - Para negrito, clique no botão "B" e escreva o texto entre asteriscos `*Texto aqui*`.
    - Para tachado, clique no botão "S" e escreva o texto entre `~Texto aqui~`.
    - Para adicionar emojis, clique na carinha 🙂 e escolha os emojis no popup.

      > [!NOTE]
      > Emojis não serão enviados por SMS, apenas por WhatsApp.

      ![Captura de tela](/img/tutorial/mensagem-emoji.png)

- Clique em "Salvar". Se tudo estiver correto, uma mensagem de sucesso aparecerá, e o gatilho será listado.

  ![Captura de tela](/img/tutorial/servico-adicionado.png)

  ![Captura de tela](/img/tutorial/lista-servicos.png)

## Editando um gatilho

Para editar um gatilho, clique em "Editar" na lista de serviços. Alterar configurações, gatilho ou mensagem e clique em "Salvar". Uma mensagem de sucesso será exibida.

![Captura de tela](/img/tutorial/popup-edicao-gatilho.png)

## Excluindo um gatilho

Para excluir um gatilho, clique em "Excluir" na lista de serviços e confirme a exclusão no popup.
