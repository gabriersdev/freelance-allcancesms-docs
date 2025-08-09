<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Rastreadores

<AsideArticle/>

## Como funciona?

Com os rastreadores, é possível criar campanhas de maneira mais prática, enviando uma ou mais mensagens de uma só vez para um ou vários números de telefone. Também é possível programar esses envios para ocorrerem em intervalos específicos de tempo.

## Criando um ou vários rastreadores

No menu lateral, clique em "Rastreadores" e, em seguida, em "Enviar comandos". Na página de rastreadores, clique no botão "Novo".

![Tela de Rastreadores](/img/tutorial/tela-rastreador.png)

### Criando a partir de um arquivo Excel

- Clique no botão "Importar arquivo".
- Em seguida, clique em "Baixe aqui o modelo de arquivo".

  ![Captura de tela](/img/tutorial/btn-baixe-modelo.png)

- Abra o arquivo baixado para editá-lo.
- No arquivo modelo, existem 3 rastreadores e para cada um, 4 mensagens (A1 à A4, B1 à B4, C1 à C4).

  |Grupo| | | | | 
    |-|-|-|-|-|
  |Rastreador 1|A1|A2|A3|A4|
  |Rastreador 2|B1|B2|B3|B4|
  |Rastreador 3|C1|C2|C3|C4|

  - Na primeira coluna, o nome do rastreador é definido. O primeiro chamará "Rastreador 1", o segundo "Rastreador 2" e o último "Rastreador 3".
  - A partir da segunda coluna, são definidas as mensagens para cada rastreador.

- Altere as mensagens e os nomes dos rastreadores conforme necessário.

  | Grupo          |                            |                            |                            | 
    |----------------|----------------------------|----------------------------|----------------------------|
  | Rastreador 1   | Mensagem 1 do rastreador 1 | Mensagem 2 do rastreador 1 | Mensagem 3 do rastreador 1 |
  | Rastreador 2   | Mensagem 1 do rastreador 2 | Mensagem 2 do rastreador 2 | Mensagem 3 do rastreador 2 |
  | Rastreador 3   | Mensagem 1 do rastreador 3 | Mensagem 2 do rastreador 3 | Mensagem 3 do rastreador 3 |

- De volta ao painel, clique em "Procurar" e selecione o arquivo com a planilha. Em seguida, clique em "Salvar".
- Se tudo correr bem, a mensagem de sucesso na importação aparecerá:

  ![Captura de tela](/img/tutorial/grupo-criado-sucesso.png)

- Pronto! Os rastreadores foram criados!

### Criando manualmente

- Na página de rastreadores, clique no botão "Novo".
- ![Captura de tela](/img/tutorial/tela-rastreador.png)
- No formulário, crie um nome para identificar o rastreador.
- Depois, defina as mensagens. Você pode adicionar mais mensagens clicando no botão "Adicionar" ou removê-las com o ícone de lixeira.

  ![Captura de tela](/img/tutorial/form-definir-msg.png)

- Após definir as mensagens, clique no botão "Salvar".
- Se tudo correr bem, a mensagem de sucesso na importação aparecerá!
- Pronto! O rastreador foi criado.

## Criando uma rotina de disparos

- Na página de rastreadores, escolha um rastreador para criar a rotina.
- Clique no primeiro botão, com ícone de dois triângulos.

  ![Captura de tela](/img/tutorial/rastreadores-btn-1.png)

- Um popup será aberto. É através dele que a rotina será criada. Lembre-se de que os disparos são feitos por meio da criação de uma campanha. Portanto, aqui você estará criando uma campanha.

  ![Captura de tela](/img/tutorial/modal-criar-rotina.png)

- O campo "Nome da campanha" já vem com uma sugestão do sistema. Você pode alterá-lo, se desejar.
- Para adicionar números de telefone à campanha, escolha entre puxar os números de um grupo salvo, fazer upload de um arquivo ou digitar e colar. Selecione a opção desejada, marque o seletor e preencha os dados ou faça upload do arquivo.
- Depois, escolha se o disparo será feito imediatamente ou em um horário agendado. Se for agendar, informe o dia e a hora do disparo.
- Na última parte do popup, há um resumo da campanha: o serviço disponível para essa forma de envio é o [SMS Transacional](/sms-campaigns#sms-transacional); a quantidade de números que receberão a mensagem e a data do disparo.
- Revise as informações e clique em "Salvar" para criar a campanha.

  ![Captura de tela](/img/tutorial/sucesso-rotina-criada.png)

- Se tudo correr bem, a mensagem de sucesso aparecerá. Para saber como conferir a campanha criada, [clique aqui](/search-campaigns).

## Ver, adicionar, excluir e editar mensagens

O Painel oferece opções para manipular os rastreadores. Você pode visualizar, adicionar, excluir e editar as mensagens, [criar uma rotina](#criando-uma-rotina-de-disparos) e excluir um rastreador.

- Na página de rastreadores, escolha um rastreador.
- Clique no segundo botão de ação, de cor cinza-claro, com o ícone de lista.

  ![Captura de tela](/img/tutorial/btn-edicao-rastreador.png)

- Um popup será aberto com as mensagens deste rastreador.

  ![Captura de tela](/img/tutorial/modal-editar-rotina.png)

- Para editar uma mensagem, basta alterar seu conteúdo.
- Para excluir, clique no botão com ícone de lixeira.
- Para adicionar uma nova mensagem, clique no botão "Adicionar" e preencha o campo com o conteúdo da mensagem.
- Após fazer as alterações, clique em "Salvar" no final do popup.

## Alterar o nome do rastreador

- Na página de rastreadores, escolha um rastreador.
- Clique no segundo botão de ação, de cor cinza-claro, com o ícone de lista.

  ![Captura de tela](/img/tutorial/btn-edicao-rastreador.png)

- Um popup será aberto com as mensagens e informações do rastreador.

  ![Captura de tela](/img/tutorial/modal-editar-rotina.png)

- Para editar o nome, basta alterá-lo no campo "Grupo". Depois, clique em "Salvar" para confirmar a alteração.

## Excluir um rastreador

- Na página de rastreadores, escolha um rastreador.
- Clique no terceiro botão de ação, vermelho, com o ícone de lixeira.
- Um popup será aberto. Basta confirmar a exclusão clicando em "Sim":

  ![Captura de tela](/img/tutorial/confirmacao-exclusao-grupo.png)

- Se tudo der certo, uma mensagem de sucesso aparecerá e o rastreador não será mais exibido na lista de rastreadores.
