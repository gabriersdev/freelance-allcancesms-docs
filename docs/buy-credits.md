<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Como comprar créditos?

<AsideArticle/>

## Criando uma fatura e adicionando itens

- No menu lateral, clique em "Compra de crédito" na seção "Administrador".
- No campo "Vencimento", defina uma data de vencimento para a fatura.
- Depois, adicione o tipo de serviço para o qual deseja comprar créditos: SMS, WhatsApp ou Torpedo interativo.
- Selecione o serviço específico que deseja.
- Informe a quantidade de créditos. Atenção: para cada serviço há uma quantidade mínima e máxima de créditos.
  ![Tabela com a quantidade mínima e máxima de créditos](/img/tutorial/table-count.png)
  Exemplo: Para o serviço de disparo por SMS OTP, o mínimo é 1177 créditos e o máximo é 4999. Para consultar a quantidade, basta clicar no campo de quantidade de créditos.

Você pode adicionar vários serviços à fatura e comprar tudo de uma vez. Lembre-se de que, quanto maior a quantidade, mais barato saem os disparos.
![Tabela com vários itens para faturar](/img/tutorial/table-items.png)

Após incluir todos os itens, clique em "Gerar fatura". Uma nova fatura será criada.
![Captura de tela da tela de sucesso ao criar uma fatura](/img/tutorial/new-bill.png)

Agora, é só pagar!

## Pagando a fatura

- Na página financeira, onde as faturas são listadas, clique em "Pagar".
  ![Captura de tela da tela de faturas, com destaque para o botão "Pagar"](/img/tutorial/all-bills.png)

- Você verá a fatura em detalhes, e um código Pix será gerado.
  ![Captura de tela da tela de pagamento](/img/tutorial/pay-bill.png)

- Use a câmera do celular para ler o QR Code ou copie e cole o código no seu aplicativo bancário.

  > [!IMPORTANT]
  > Você deve pagar a fatura até o vencimento.

Após o pagamento ser confirmado, os créditos serão adicionados à sua conta. Você pode verificar a quantidade de créditos por serviço, [acessando o painel](https://painel.allcancesms.com.br/app) e clicando em "Nova Campanha".

## Localizando faturas

Para encontrar uma fatura no painel:

- Clique em "Créditos" no menu lateral e depois em "Minhas compras".
- Use os campos de filtro para buscar as faturas por data de emissão, vencimento ou status (pendente, pago, vencido ou cancelado).
  ![Resultado da pesquisa por faturas com vencimento para o dia 21/02/2025](/img/tutorial/bill-filter-results.png)
- Pelo botão de "Ações", você pode abrir a fatura ou pagar, quando disponível.

## Próximos passos

[Crie uma campanha](/create-campaign)  
[Conheça a função de rastrear links](/trackers-links)
