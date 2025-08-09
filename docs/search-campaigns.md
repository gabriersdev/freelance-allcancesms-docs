<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from "./components/AsideArticle.vue";
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Localizando uma campanha

<AsideArticle/>

## Passo 1: Acessando a lista de campanhas

> [!NOTE]
> Através dessa ferramenta, é possível visualizar apenas campanhas dos últimos 30 dias. Para localizar campanhas anteriores, use o relatório.

Nosso painel permite obter métricas avançadas de performance e engajamento dos seus disparos. Para acessar a lista de campanhas, clique em "Campanha" no menu lateral e depois em "Lista".

![Tela de campanha, com destaque para o menu lateral e a localização do botão Lista](/img/tutorial/campaigns-list.png)

## Passo 2: Filtrando campanhas

No canto superior direito, há o botão "Filtrar dados", que abre a poderosa ferramenta de filtros do nosso portal. **Você pode combinar os filtros ou usar apenas um deles**.

O primeiro campo de filtro é por nome do documento ou nome do cliente. Conforme você digita um termo, o painel sugere correspondências. Na imagem abaixo, você vê a correspondência para o nome "Gabriel", com o CPF do cliente seguido do nome.

![Captura de tela do popup de filtros](/img/tutorial/filter-name.png)

O próximo campo é o de status. Ao clicar, o painel oferece as opções de status que uma campanha pode ter. Os principais são:

- **Em andamento**: quando as mensagens estão sendo enviadas.
- **Cancelada**: você optou por cancelar a campanha.
- **Finalizado**: as mensagens foram enviadas com sucesso.
- **Agendada**: quando o disparo foi programado.
- **Editando**: você fez uma edição na campanha enquanto ela estava no status "Validando".
- **Validando**: a campanha foi criada e está sendo validada por nós.

![Captura de tela do popup de filtros com ênfase para o campo de status](/img/tutorial/filter-status.png)

O campo de **serviços** lista todos os nossos serviços de disparo de mensagens. Se o filtro por serviço for relevante para a sua busca, escolha um serviço. Caso contrário, deixe o primeiro item da lista, que está vazio.

Por fim, o campo de **período** é o mais importante, pois facilita a localização de campanhas pela data em que foram criadas. O primeiro campo é para a data de início e o segundo, para a data de fim da pesquisa.

![Captura de tela do popup de filtro por data](/img/tutorial/filter-date.png)

**Filtros definidos, é hora de pesquisar! Clique no botão "Filtrar".** Os resultados que corresponderem aos filtros serão exibidos:

![Captura de tela com os resultados obtidos com os filtros de pesquisa](/img/tutorial/filter-results.png)

## Próximos passos

[Veja o desempenho, respostas e o rastreio de links de uma campanha](/advanced-filters-campaings)  
[Tire um relatório de campanhas antigas](/search-campaigns)
