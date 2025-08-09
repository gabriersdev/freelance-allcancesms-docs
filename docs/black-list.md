<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Lista Negra

Gerenciar a comunicação com seus clientes é essencial para uma estratégia de SMS eficaz. Às vezes, é necessário bloquear números para evitar envios indesejados, atender pedidos de descadastramento ou garantir conformidade com regulamentações.

Neste tutorial, você aprenderá a utilizar o recurso de Lista Negra da nossa plataforma de SMS, bloqueando números específicos para que não recebam mais mensagens. Vamos ver como adicionar, gerenciar e remover números da lista.

<AsideArticle/>

## O que é a lista negra?

É uma lista de números que não receberão disparos das suas campanhas.

## Como adicionar números à lista?

- No painel, clique em "Lista Negra" no menu lateral.
  ![Captura de tela do painel](/img/tutorial/panel-black-list.png)
- Na página, clique em "Adicionar números".
- Um popup será aberto. Você pode adicionar números de duas formas: via upload de arquivo `.txt` ou `.csv`, ou manualmente.

### Adicionando números via upload de arquivos

Os arquivos devem conter os números e os motivos para a adição:
- Arquivo CSV:
  ```
  telefone;motivo
  31999998888;Solicitação do cliente
  ```
- Arquivo TXT:
  ```
  31999998888; Solicitação do cliente
  31999997777; Falta de respeito
  ```

![Captura de tela da lista de uploads](/img/tutorial/black-list-upload-file.png)

- Marque "Upload de arquivo TXT ou CSV" e clique em "Procurar" ou "Escolher arquivo".
- Selecione o arquivo e confirme.
- Clique em "Salvar". Se tudo estiver correto, os números serão exibidos na lista.

### Adicionando números manualmente

Você também pode adicionar números digitando ou colando no popup:
![Captura de tela do popup de adicionar números](/img/tutorial/black-list-text.png)

- Marque "Digitar ou colar" e insira os números seguidos de ponto e vírgula `;` e o motivo.
- Clique em "Salvar". Os números serão exibidos na lista.

## Excluindo um ou mais números

Para excluir um número, clique no ícone de lixeira ao lado e confirme.
![Captura de tela da página de lista de números da lista negra](/img/tutorial/btn-trash-item-black-list.png)

Para excluir vários números, selecione-os marcando as caixas e clique em "Excluir marcados".
![Botão "Excluir marcados"](/img/tutorial/btn-delete-all.png)

## Localizando um número

Clique em "Filtrar Dados" e digite o número desejado no popup.
![Botão "Filtrar dados"](/img/tutorial/filter-data.png)

![Pop-up de pesquisa de número de telefone](/img/tutorial/filter-data-box.png)

Clique em "Filtrar" e aguarde a busca ser concluída. Quando o botão voltar ao normal, clique fora do popup para ver os resultados.

![Resultado da busca usando o filtro de números](/img/tutorial/list-results-filter-bl.png)

## Adicionando número através das respostas dos destinatários

Você pode adicionar números à lista negra a partir do relatório de campanhas. Siga estes passos:

- Localize uma campanha.
- Clique em "Relatório" da campanha.
  ![Botão "Relatório" da campanha em destaque](/img/tutorial/btn-retail.png)
- Na aba "Respostas", clique no botão que adiciona o número à lista negra. Uma confirmação de sucesso será exibida.

  ![Popup de sucesso ao adicionar um número à lista negra](/img/tutorial/success-add-bl.png)

Você pode [remover esse número](#excluindo-um-ou-mais-numeros) a qualquer momento pela página de lista negra.
