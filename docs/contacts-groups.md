<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Grupos de contato

Essa ferramenta permite criar e salvar grupos de contato para facilitar o processo de criação de campanhas e disparo de mensagens.

<AsideArticle/>

## O que é um grupo de contato?

É um conjunto de vários números de telefone que você usa para disparar mensagens. Um grupo de contato precisa ter pelo menos um número para existir.

## Como criar um grupo?

- No menu lateral do Painel, clique em "Contatos" e depois em "Grupos".
  ![Captura de tela do menu lateral, com destaque para o botão "Grupos"](/img/tutorial/contact-group.png)
- Na página, clique no botão "Adicionar grupo".
- No popup que abrir, defina o nome do grupo. Ele será usado para identificar o grupo no Painel.
  ![Captura de tela do popup](/img/tutorial/popup-new-group.png)

- Agora, adicione os números de telefone ao grupo. Eles podem ser adicionados de duas formas: via upload de arquivo `.xlsx`, `.xls` ou `.txt`.

  ### Adicionando números via upload de arquivos
    - No popup, marque "Upload de arquivo TXT ou CSV" e clique no botão "Procurar" ou "Escolher arquivo" (varia conforme o navegador).
      ![Captura de tela do popup com a importação via upload selecionada](/img/tutorial/upload-selected-group.png)
    - Selecione o arquivo para upload e confirme.
    - No popup, clique em "Salvar".
    - Se tudo correr bem, uma mensagem confirmará o sucesso no upload e o grupo será listado na página.

  ### Adicionando números manualmente
    - Você também pode incluir números digitando ou copiando e colando na caixa de texto do popup.
    - Marque "Digitar ou colar" e insira os números. Cada linha pode ter apenas um número de telefone. Conforme digita, a quantidade de números localizados aparecerá na parte inferior do popup.
      ![Captura de tela do popup de adicionar números](/img/tutorial/group-add-text.png)
    - Após inserir os números, clique em "Salvar".
    - Se tudo correr bem, uma mensagem confirmará o sucesso e o grupo será listado.

## Editando um grupo

Para editar um grupo de contato, clique no ícone de lápis amarelo no card do grupo, na página de grupos de contato.

![Captura de tela com destaque para o botão de edição](/img/tutorial/edit-group.png)

No popup de edição, na aba "Geral", é possível alterar o nome do grupo e adicionar novos números via upload ou manualmente. Após as alterações, clique em "Salvar".

![Popup de edição aberto na aba "Geral"](/img/tutorial/geral-popup-group.png)

Na aba "Números", você pode gerenciar os números já cadastrados no grupo. Para saber como [alterar ou remover números, clique aqui](#alterando-e-removendo-numeros).

### Adicionando números

#### Adicionando números via upload de arquivos
- No popup, marque "Upload de arquivo TXT ou CSV" e clique em "Procurar" ou "Escolher arquivo" (varia de navegador para navegador).
  ![Captura de tela do popup com a importação via upload selecionada](/img/tutorial/upload-selected-group.png)
- Selecione o arquivo e confirme.
- Clique em "Salvar" no popup.
- Se tudo ocorrer bem, uma mensagem confirmará o sucesso e o grupo será listado.

#### Adicionando números manualmente
- Marque "Digitar ou colar" e insira os números. Cada linha deve ter apenas um número. A quantidade de números localizados aparecerá na parte inferior do popup.
  ![Captura de tela do popup de adicionar números](/img/tutorial/group-add-text.png)
- Clique em "Salvar" quando terminar.
- Se tudo der certo, uma mensagem confirmará o sucesso e o grupo será listado.

## Alterando e removendo números

Na aba "Números" do popup de edição, você pode remover ou alterar números já cadastrados.

### Excluindo um ou vários números
- Para excluir um número, clique no ícone de lixeira ao lado do número e confirme a exclusão.

  ![Captura de tela com o botão de exclusão do número em destaque](/img/tutorial/delete-number-popup.png)

- Para excluir vários números, marque as caixas de seleção ao lado dos números e clique em "Excluir marcados", confirmando a exclusão.

  ![Captura de tela do popup de edição](/img/tutorial/select-multiple-numbers.png)

Clique em "Salvar" no final do popup para registrar as alterações.

## Alterando os números cadastrados

Na aba "Números" do popup de edição, você pode alterar números clicando sobre eles e definindo um novo número.

![Botão salvar em destaque](/img/tutorial/btn-cancel-edit-group.png)

Após a alteração, clique em "Salvar" para registrar.

## Apagando um ou vários grupos

![Captura com botão de exclusão em destaque](/img/tutorial/btn-trash-group.png)

Para excluir um grupo, clique no ícone de lixeira vermelha na página de grupos de contato e confirme a exclusão.

![Captura de tela do popup de confirmação de exclusão](/img/tutorial/confirm-group.png)

Para excluir vários grupos, marque as caixas de seleção ao lado de cada grupo e clique em "Excluir marcados", confirmando a exclusão.

![Captura de tela com destaque para o botão de excluir vários itens](/img/tutorial/btn-delete-all-groups.png)

![Captura de tela do popup de confirmação de exclusão](/img/tutorial/confirm-delete-all-group.png)

## Onde vou usar isso?

Na [criação de uma campanha](/create-campaign#passo-2-informar-os-destinatarios)!
