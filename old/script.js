var prompts = [
    {id:"4.1.1",capitulo:"4.1.1	Prompt normal",sessao:"Estudio Fotográfico com Formulário de E-mail",prompt:txtHtml(`Gere uma pagina da web de um estudio de fotografia, com um formulário de e-mail para que o cliente entre em contato conosco.`)},
    {id:"4.1.2",capitulo:"4.1.2	Prompt estruturado pelos pilares",sessao:"Estudio Fotográfico com Formulário de E-mail",prompt:txtHtml(`Papel: Você é um desenvolvedor front-end sênior especialista em landing pages de alta conversão. 
Tarefa: Crie o código completo para uma página de contato com um formulario de envio de e-mail. 
Contexto: A empresa oferece soluções de fotografia para pequenas empresas. O visual deve ser moderno, dinâmico e futurista. Formato: Retorne o código em um único bloco contendo HTML5 e estilização CSS integrada no cabeçalho. 
Restrições: Utilize um esquema de cores escuro (dark mode com tons de azul e neon), inclua botões com efeitos visuais ao passar o mouse (hover) e um formulário de captura rápida. Não adicione explicações textuais fora do bloco de código.`)},
    {id:"4.1.3",capitulo:"4.1.3	Prompt Zero-Shot",sessao:"Estudio Fotográfico com Formulário de E-mail",prompt:txtHtml(`Gere o código de uma página web institucional no formato single-page para um estúdio de fotografia. A página deve conter uma barra de navegação fixa no topo, uma galeria de fotos em grade flexível (Flexbox/Grid), uma seção 'Sobre Nós' e um formulário de contato para enviar e-mail. Forneça apenas o código HTML5 e CSS integrado dentro da tag.`)},
    {id:"4.1.4",capitulo:"4.1.4	Prompt Encadeado por Etapas",sessao:"Estudio Fotográfico com Formulário de E-mail",prompt:txtHtml(`Atue como um programador web. Primeiro, apresente a estrutura HTML5 da página principal de um estúdio de fotografia, contendo cabeçalho com ícone de carrinho de compras, grade de produtos em destaque, um formulário de contato para enviar e-mail e rodapé. Em seguida, forneça o CSS para estilizar os cartões de produtos com sombras e animações, mantendo a resposta estritamente limitada ao código funcional.`)},
    {id:"4.2.1",capitulo:"4.2.1	Prompt normal",sessao:"PetShop com Formulário de Agendamento de Consulta",prompt:txtHtml(`Criar um site de um PetShop especializado em castração de animais e um formulário para agendamento de consulta.`)},
    {id:"4.2.2",capitulo:"4.2.2	Prompt estruturado pelos pilares",sessao:"PetShop com Formulário de Agendamento de Consulta",prompt:txtHtml(`Papel: Desenvolvedor Front-End especializado em sites para clínicas veterinárias.
Tarefa: Criar o código de uma landing page para um PetShop com foco em castração animal e formulário de agendamento.
Contexto: A clínica busca conscientizar tutores sobre a posse responsável e facilitar a marcação de consultas pré-operatórias.
Formato: Código único em HTML5 semântico com CSS integrado na tag <style>
Restrições: Incluir cabeçalho informativo, seções sobre benefícios da castração, tabela de orientações e um formulário com validação básica (nome do tutor, espécie do pet, idade e data desejada). Paleta de cores em tons de azul e verde suave.`)},
    {id:"4.2.3",capitulo:"4.2.3	Prompt Few-Shot",sessao:"PetShop com Formulário de Agendamento de Consulta",prompt:txtHtml(`Exemplo 1 (Agendamento Banho e Tosa):
Entrada: Formulário simples de petshop.
Saída Esperada: <form><input type="text" placeholder="Nome do Pet"><select><option>Banho</option></select><button>Agendar</button></form>
Exemplo 2 (Agendamento Vacinação):
Entrada: Formulário de clínica veterinária.
Saída Esperada: <form><input type="text" placeholder="Nome do Tutor"><input type="date"><button>Confirmar Vacina</button></form>
Instrução: Com base nos exemplos acima, gere o código HTML/CSS completo de um formulário de agendamento especializado em consultas de castração animal, incluindo seleção de espécie (Cão/Gato), peso aproximado e data de preferência.`)},
    {id:"4.2.4",capitulo:"4.2.4	Prompt Encadeado por Etapas",sessao:"PetShop com Formulário de Agendamento de Consulta",prompt:txtHtml(`Passo 1: Crie a estrutura HTML5 da landing page do PetShop, contendo o cabeçalho, a seção principal sobre conscientização da castração e uma grade informativa com cuidados pós-operatórios.
Passo 2: Adicione à estrutura anterior um formulário de agendamento online completo com campos para dados do tutor e do animal.
Passo 3: Aplique o CSS responsivo para organizar a página com um design acolhedor e legível em dispositivos móveis.`)},
    {id:"4.3.1",capitulo:"4.3.1	Prompt normal",sessao:"Loja de Roupas com Carrinho de Compras",prompt:txtHtml(`Crie uma página web de loja de roupas com opção de carrinho funcional.`)},
    {id:"4.3.2",capitulo:"4.3.2	Prompt estruturado pelos pilares",sessao:"Loja de Roupas com Carrinho de Compras",prompt:txtHtml(`Papel: Engenheiro de Software Front-End especializado em e-commerce. 
Tarefa: Criar uma página de loja de roupas virtuais com funcionalidade completa de carrinho de compras.
Contexto: Uma marca de moda urbana que precisa de uma interface dinâmica para exibição e seleção de produtos.
Formato: HTML5, CSS3 e JavaScript nativo (Vanilla JS) em um único bloco de código.
Restrições: O carrinho deve permitir adicionar produtos, alterar quantidades, calcular o valor total em tempo real e remover itens. Não utilize bibliotecas externas (como React ou jQuery).`)},
    {id:"4.3.3",capitulo:"4.3.3	Prompt Zero-Shot",sessao:"Loja de Roupas com Carrinho de Compras",prompt:txtHtml(`Desenvolva o código completo (HTML, CSS e JavaScript) de uma loja de roupas online com um carrinho de compras funcional. O sistema deve permitir que o usuário adicione roupas ao carrinho, veja a soma atualizada dos preços e remova itens conforme necessário.`)},
    {id:"4.3.4",capitulo:"4.3.4	Prompt Encadeado por Etapas",sessao:"Loja de Roupas com Carrinho de Compras",prompt:txtHtml(`Passo 1: Monte o layout HTML/CSS da vitrine de roupas, exibindo uma grade de produtos com imagem fictícia, título, preço e botão "Adicionar ao Carrinho".
Passo 2: Desenvolva o código JavaScript necessário para gerenciar o estado do carrinho (adicionar item, calcular total e atualizar contador no cabeçalho).
Passo 3: Integre uma barra lateral deslizante (drawer) para exibir o conteúdo do carrinho sempre que o usuário clicar no ícone correspondente.`)},
    {id:"4.4.1",capitulo:"4.4.1	Prompt normal",sessao:"Menu de Restaurante",prompt:txtHtml(`Crie um menu online de restaurante com diversas opções organizados por tipo de refeição (café, executivo, a la carte, bebidas, etc).`)},
    {id:"4.4.2",capitulo:"4.4.2	Prompt estruturado pelos pilares",sessao:"Menu de Restaurante",prompt:txtHtml(`Papel: Designer de Interface e Desenvolvedor Web para o setor gastronômico.
Tarefa: Construir um menu interativo de restaurante organizado por categorias de refeição.
Contexto: Um bistrô moderno que oferece refeições ao longo de todo o dia e precisa de uma navegação fluida por abas.
Formato: Arquivo estruturado em HTML, CSS e JavaScript.
Restrições: O menu deve ser dividido nas abas: Café da Manhã, Almoço Executivo, À la Carte, Bebidas e Sobremesas. A alternância entre as categorias deve ocorrer sem o recarregamento da página.`)},
    {id:"4.4.3",capitulo:"4.4.3	Prompt One-Shot",sessao:"Menu de Restaurante",prompt:txtHtml(`Exemplo de Estrutura de Item:
<div> <h3>Ovos Benedict</h3> <p>Ovos poché sobre muffin inglês com molho holandês.</p> <span>R$ 32,00</span> </div>
Instrução: Utilizando o padrão do exemplo acima, crie a página completa de um menu de restaurante organizado em seções (Café da Manhã, Executivo, À la Carte e Bebidas), aplicando estilização CSS elegante.`)},
    {id:"4.4.4",capitulo:"4.4.4	Prompt Encadeado por Etapas",sessao:"Menu de Restaurante",prompt:txtHtml(`Passo 1: Estruture o HTML5 contendo os itens do cardápio agrupados por seções semânticas (preço, descrição e marcação de alérgenos).
Passo 2: Crie a barra de navegação superior com botões de filtro para cada tipo de refeição.
Passo 3: Escreva o script em JavaScript para ocultar/exibir as seções correspondentes ao clicar nos filtros de categoria.`)},
    {id:"4.5.1",capitulo:"4.5.1	Prompt normal",sessao:"Blog de Viagens",prompt:txtHtml(`Crie um Blog de viagens com diversos artigos sobre pontos turísticos brasileiros.`)},
    {id:"4.5.2",capitulo:"4.5.2	Prompt estruturado pelos pilares",sessao:"Blog de Viagens",prompt:txtHtml(`Papel: Arquiteto de Conteúdo e Desenvolvedor Web.
Tarefa: Criar um layout de blog de viagens focado em destinos turísticos do Brasil.
Contexto: Plataforma editorial voltada a promover o turismo nacional nas regiões Nordeste, Amazônia, Sudeste e Sul.
Formato: HTML5 semântico e CSS Flexbox/Grid.
Restrições: Incluir barra de busca por estado/região, cartões de artigos com imagem destacada, tempo estimado de leitura, autor e uma caixa lateral (sidebar) com destinos mais visitados.`)},
    {id:"4.5.3",capitulo:"4.5.3	Prompt Few-Shot",sessao:"Blog de Viagens",prompt:txtHtml(`Exemplo 1 (Post Nordeste):
Entrada: Artigo sobre os Lençóis Maranhenses.
Saída: Cartão com foto, tag "Nordeste", título, resumo e botão "Ler Guia".
Exemplo 2 (Exemplo Sudeste):
Entrada: Artigo sobre Paraty e Costa Verde.
Saída: Cartão com foto, tag "Sudeste", título, resumo e botão "Ler Guia".
Instrução: Crie o layout completo de um blog de viagens que organize artigos sobre pontos turísticos brasileiros seguindo a mesma estrutura visual e de marcas exibida nos exemplos.`)},
    {id:"4.5.4",capitulo:"4.5.4	Prompt Encadeado por Etapas",sessao:"Blog de Viagens",prompt:txtHtml(`Passo 1: Desenhe o cabeçalho e o painel principal do blog de viagens com um campo de pesquisa e artigos em destaque.
Passo 2: Monte a grade de cartões de artigos contendo dados sobre pontos turísticos brasileiros (ex: Fernando de Noronha, Bonito, Chapada Diamantina).
Passo 3: Aplique estilos CSS responsivos para garantir uma excelente experiência de leitura em telas de smartphones.`)},
    {id:"4.6.1",capitulo:"4.6.1	Prompt normal",sessao:"Cinema",prompt:txtHtml(`Crie uma pagina web para um Cinema local onde o usuário pode ver os horários disponíveis e agendar uma sessão.`)},
    {id:"4.6.2",capitulo:"4.6.2	Prompt estruturado pelos pilares",sessao:"Cinema",prompt:txtHtml(`Papel: Desenvolvedor Front-End especializado em portais de entretenimento e bilheteria.
Tarefa: Criar a interface de um cinema local com exibição de filmes em cartaz, horários e formulário de reserva de ingressos.
Contexto: Um cinema de bairro que necessita de um sistema simples para os clientes consultarem horários e agendarem sessões.
Formato: HTML, CSS e JavaScript integrados.
Restrições: Exibir filmes com classificação indicativa, sinopse curta, seletores de horários disponíveis (ex: 15h, 18h, 21h) e janela modal de confirmação de agendamento.`)},
    {id:"4.6.3",capitulo:"4.6.3	Prompt Zero-Shot",sessao:"Cinema",prompt:txtHtml(`Escreva o código HTML, CSS e JavaScript de uma página para um cinema local. A página deve permitir visualizar os filmes em cartaz, escolher o horário da sessão e abrir um formulário para agendar o ingresso.`)},
    {id:"4.6.4",capitulo:"4.6.4	Prompt Encadeado por Etapas",sessao:"Cinema",prompt:txtHtml(`Passo 1: Crie o catálogo visual dos filmes em cartaz com cartazes ilustrativos e horários disponíveis para cada sala.
Passo 2: Implemente o mecanismo JavaScript que permite ao usuário clicar em um horário e abrir uma janela de seleção de quantidade de ingressos.
Passo 3: Monte a modal de confirmação do agendamento exibindo o resumo do pedido e formulário com nome e e-mail.`)},
    {id:"4.7.1",capitulo:"4.7.1	Prompt normal",sessao:"Academia com formulário de inscrição",prompt:txtHtml(`Crie uma página de uma Academia com um formulário de inscrição.`)},
    {id:"4.7.2",capitulo:"4.7.2	Prompt estruturado pelos pilares",sessao:"Academia com formulário de inscrição",prompt:txtHtml(`Papel: Especialista em Landing Pages para o segmento Fitness.
Tarefa: Construir uma página institucional para academia de ginástica com tabela comparativa de planos e formulário de matrícula.
Contexto: Academia focada em musculação, treino funcional e natação buscando novos alunos.
Formato: HTML5 e CSS3 com design responsivo.
Restrições: Incluir seção de modalidades, tabela comparativa (Planos Mensal, Semestral e Anual) e formulário de pré-inscrição destacando o plano escolhido. Cores dinâmicas e de alto impacto visual.`)},
    {id:"4.7.3",capitulo:"4.7.3	Prompt One-Shot",sessao:"Academia com formulário de inscrição",prompt:txtHtml(`Exemplo de Card de Plano:
<div> <h3>Plano VIP</h3> <p>R$ 119/mês</p> <ul><li>Acesso total</li><li>Musculação + Natação</li></ul>  </div>
Instrução: Utilizando o estilo do exemplo fornecido, elabore a página completa de uma academia de ginástica contendo a tabela de planos e o formulário de inscrição final.`)},
    {id:"4.7.4",capitulo:"4.7.4	Prompt Encadeado por Etapas",sessao:"Academia com formulário de inscrição",prompt:txtHtml(`Passo 1: Estruture a landing page contendo a seção de apresentação da academia, diferenciais técnicos e galeria de modalidades.
Passo 2: Construa o bloco comparativo de preços e benefícios para cada plano de assinatura.
Passo 3: Crie o formulário de matrícula na parte inferior da página, com campos para dados pessoais e seleção da unidade de preferência.`)},
    {id:"4.8.1",capitulo:"4.8.1	Prompt normal",sessao:"Agência de Turismo com Reserva",prompt:txtHtml(`Crie uma página de Agência de turismo onde o usuário possa reservar voos e hotéis.`)},
    {id:"4.8.2",capitulo:"4.8.2	Prompt estruturado pelos pilares",sessao:"Agência de Turismo com Reserva",prompt:txtHtml(`Papel: Engenheiro de Interface UI/UX para Plataformas de Viagem e Turismo.
Tarefa: Desenvolver o portal web de uma agência de turismo com sistema de busca e reserva unificada de voos e hospedagens.
Contexto: Agência de viagens que atende clientes corporativos e de lazer exigindo uma busca simplificada por pacotes.
Formato: HTML5, CSS (Flexbox) e JavaScript.
Restrições: A barra de pequisa deve conter abas alternáveis entre "Voos", "Hotéis" e "Pacotes", com seletores de origem, destino, datas e número de passageiros/hóspedes.`)},
    {id:"4.8.3",capitulo:"4.8.3	Prompt Few-Shot",sessao:"Agência de Turismo com Reserva",prompt:txtHtml(`Exemplo 1 (Reserva Voo):
Entrada: Busca São Paulo - Rio de Janeiro.
Saída: Cartão exibindo companhia aérea, horário de saída/chegada, preço e botão "Selecionar Voo".
Exemplo 2 (Reserva Hotel):
Entrada: Busca Hotel em Salvador.
Saída: Cartão exibindo nome do resort, classificação por estrelas, preço por diária e botão "Reservar Quarto".
Instrução: Crie o código de um portal de agência de turismo que incorpore tanto a busca de voos quanto a de hotéis utilizando a estrutura apresentada nos exemplos.`)},
    {id:"4.8.4",capitulo:"4.8.4	Prompt Encadeado por Etapas",sessao:"Agência de Turismo com Reserva",prompt:txtHtml(`Passo 1: Crie a barra de busca multifuncional no topo da página com abas de alternância entre busca de passagem aérea e hospedagem.
Passo 2: Monte a área de exibição com os resultados fictícios de voos e hotéis encontrados para o destino selecionado.
Passo 3: Adicione o painel lateral de resumo do pacote com a soma dos valores e o formulário final de reserva.`)},
    {id:"4.9.1",capitulo:"4.9.1 Prompt normal",sessao:"Noticias Locais",prompt:txtHtml(`Construir uma página da web responsiva de Notícias locais que continue utilizável com zoom, em telas pequenas e com o texto ampliado, sem cortes ou rolagem horizontal desnecessária.`)},
    {id:"4.9.2",capitulo:"4.9.2 Prompt estruturado pelos pilares",sessao:"Noticias Locais",prompt:txtHtml(`Papel: Especialista em Acessibilidade Web (WCAG 2.1 AA) e Desenvolvedor Front-End Responsivo.
Tarefa: Construir um portal de notícias locais com layout fluido, totalmente acessível e adaptável a telas pequenas e ampliações de texto.
Contexto: Jornal comunitário voltado a leitores diversos, incluindo pessoas idosas ou com baixa visão que utilizam zoom do navegador ou navegação por teclado.
Formato: HTML5 semântico com CSS moderno utilizando unidades relativas ('rem', 'em', '%', 'vw'). 
Restrições: Garantir conformidade com as diretrizes WCAG 2.1 AA: o texto deve continuar totalmente legível com zoom de até 200% sem gerar rolagem horizontal ou corte de palavras; incluir rótulos ARIA, contraste mínimo de 4.5:1 e suporte completo à tecla TAB.`)},
    {id:"4.9.3",capitulo:"4.9.3 Prompt One-Shot",sessao:"Noticias Locais",prompt:txtHtml(`Exemplo de Estrutura Acessível:
<article> <h2>Obras no Centro Urbano</h2> <p>Texto da notícia com unidades relativas...</p> </article>
Instrução: Utilizando o exemplo de marcação acessível acima, construa a página completa de um portal de notícias locais que se mantenha responsivo e totalmente funcional ao aplicar zoom ou acessar via dispositivos móveis de tela pequena, sem apresentar barra de rolagem horizontal.`)},
    {id:"4.9.4",capitulo:"4.9.4 Prompt Encadeado por Etapas",sessao:"Noticias Locais",prompt:txtHtml(`Passo 1: Estruture o HTML5 semântico do portal de notícias utilizando as marcas corretas ('<header>', '<nav>', '<main>', '<article>', '<aside>', '<footer>') e atributos ARIA.
Passo 2: Escreva o CSS responsivo aplicando unidades relativas ('rem'/'em') em vez de tamanhos fixos em pixels ('px') para impedir a quebra de layout durante a ampliação por zoom.
Passo 3: Implemente e teste os seletores de ajuste direto de tamanho de fonte e contraste, garantindo que a navegação por teclado (foco visível) funcione perfeitamente.</footer></aside></article></main></nav></header>`)}
];

var AIs = [
    {Name:"ChatGPT", html:"chatGPT"},
    {Name:"Claude", html:"Claude"},
    {Name:"Microsoft Copilot", html:"Copilot"},
    {Name:"Gemini", html:"Gemini"}
];

function txtHtml(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\r\n|\r|\n/g, "<br>");
}


function writePrompts()
{
    var html = "";
    var sessao = "";
    for (let i = 0; i < prompts.length; i++) {
        if(sessao != prompts[i].sessao)
        {
            sessao = prompts[i].sessao;
            html += "<h3>"+prompts[i].sessao+"</h3>";
        }
        html += "<li>";
        html += "<p>"+prompts[i].capitulo+"</p>";
        html += "<p>"+prompts[i].prompt+"</p>";
        html += "<ul>";
        for (let j = 0; j < AIs.length; j++) {
            html += "<li>";

            html += "<a target=_blank href='../Prompts/"+prompts[i].id+"."+AIs[j].html+".html' alt='Página gerada pelo "+AIs[j].Name+"'>"+AIs[j].Name+"</a>";

            html += "<ul>";
            html += "<li><a href='../Prompts/"+prompts[i].id+"."+AIs[j].html+"_axeDev Tools.csv' target=_blank alt='Relatório de Acessibilidade axeDev Tools referente à "+AIs[j].Name+"'>relatório axeDev Tools</a></li>";
            html += "<li><a href='../Prompts/"+prompts[i].id+"."+AIs[j].html+"_lighthouse.pdf' target=_blank alt='Relatório de Acessibilidade Google LightHouse referente à "+AIs[j].Name+"'>relatório Google LightHouse</a></li>";
            html += "<li><a href='../Prompts/"+prompts[i].id+"."+AIs[j].html+"_ASES.pdf' target=_blank alt='Relatório de Acessibilidade ASES referente à "+AIs[j].Name+"'>relatório ASES</a></li>";
            html += "<li><a href='https://wave.webaim.org/report#/https://mastergig.github.io/TCC_UFABC/Prompts/"+prompts[i].id+"."+AIs[j].html+".html' target=_blank alt='Relatório de Acessibilidade WAVE referente à "+AIs[j].Name+"'>relatório WAVE</a></li>";
            html += "</ul>";
            
            html += "</li>";
        }
        html += "</ul>";
        html += "</li>";
    }
    document.getElementById("prompts").innerHTML = html;
}