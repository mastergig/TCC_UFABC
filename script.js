var prompts = [
    {id:"4.1.1",capitulo:"4.1.1	Prompt normal",sessao:"Estudio Fotográfico com Formulário de E-mail",prompt:txtHtml(`Gere uma pagina da web de um estudio de fotografia, com um formulário de e-mail para que o cliente entre em contato conosco.`)},
    {id:"4.1.3",capitulo:"4.1.2	Prompt Zero-Shot",sessao:"Estudio Fotográfico com Formulário de E-mail",prompt:txtHtml(`Gere o código de uma página web institucional no formato single-page para um estúdio de fotografia. A página deve conter uma barra de navegação fixa no topo, uma galeria de fotos em grade flexível (Flexbox/Grid), uma seção 'Sobre Nós' e um formulário de contato para enviar e-mail. Forneça apenas o código HTML5 e CSS integrado dentro da tag.`)},
    {id:"4.1.4",capitulo:"4.1.3	Prompt Encadeado por Etapas",sessao:"Estudio Fotográfico com Formulário de E-mail",prompt:txtHtml(`Atue como um programador web. Primeiro, apresente a estrutura HTML5 da página principal de um estúdio de fotografia, contendo cabeçalho com ícone de carrinho de compras, grade de produtos em destaque, um formulário de contato para enviar e-mail e rodapé. Em seguida, forneça o CSS para estilizar os cartões de produtos com sombras e animações, mantendo a resposta estritamente limitada ao código funcional.`)},
    {id:"4.3.1",capitulo:"4.2.1	Prompt normal",sessao:"Loja de Roupas com Carrinho de Compras",prompt:txtHtml(`Crie uma página web de loja de roupas com opção de carrinho funcional.`)},
    {id:"4.3.2",capitulo:"4.2.2	Prompt estruturado pelos pilares",sessao:"Loja de Roupas com Carrinho de Compras",prompt:txtHtml(`Papel: Engenheiro de Software Front-End especializado em e-commerce. 
Tarefa: Criar uma página de loja de roupas virtuais com funcionalidade completa de carrinho de compras.
Contexto: Uma marca de moda urbana que precisa de uma interface dinâmica para exibição e seleção de produtos.
Formato: HTML5, CSS3 e JavaScript nativo (Vanilla JS) em um único bloco de código.
Restrições: O carrinho deve permitir adicionar produtos, alterar quantidades, calcular o valor total em tempo real e remover itens. Não utilize bibliotecas externas (como React ou jQuery).`)},
    {id:"4.3.4",capitulo:"4.2.3	Prompt Encadeado por Etapas",sessao:"Loja de Roupas com Carrinho de Compras",prompt:txtHtml(`Passo 1: Monte o layout HTML/CSS da vitrine de roupas, exibindo uma grade de produtos com imagem fictícia, título, preço e botão "Adicionar ao Carrinho".
Passo 2: Desenvolva o código JavaScript necessário para gerenciar o estado do carrinho (adicionar item, calcular total e atualizar contador no cabeçalho).
Passo 3: Integre uma barra lateral deslizante (drawer) para exibir o conteúdo do carrinho sempre que o usuário clicar no ícone correspondente.`)},
    {id:"4.5.1",capitulo:"4.3.1	Prompt normal",sessao:"Blog de Viagens",prompt:txtHtml(`Crie um Blog de viagens com diversos artigos sobre pontos turísticos brasileiros.`)},
    {id:"4.5.2",capitulo:"4.3.2	Prompt estruturado pelos pilares",sessao:"Blog de Viagens",prompt:txtHtml(`Papel: Arquiteto de Conteúdo e Desenvolvedor Web.
Tarefa: Criar um layout de blog de viagens focado em destinos turísticos do Brasil.
Contexto: Plataforma editorial voltada a promover o turismo nacional nas regiões Nordeste, Amazônia, Sudeste e Sul.
Formato: HTML5 semântico e CSS Flexbox/Grid.
Restrições: Incluir barra de busca por estado/região, cartões de artigos com imagem destacada, tempo estimado de leitura, autor e uma caixa lateral (sidebar) com destinos mais visitados.`)},
    {id:"4.5.4",capitulo:"4.3.3	Prompt Encadeado por Etapas",sessao:"Blog de Viagens",prompt:txtHtml(`Passo 1: Desenhe o cabeçalho e o painel principal do blog de viagens com um campo de pesquisa e artigos em destaque.
Passo 2: Monte a grade de cartões de artigos contendo dados sobre pontos turísticos brasileiros (ex: Fernando de Noronha, Bonito, Chapada Diamantina).
Passo 3: Aplique estilos CSS responsivos para garantir uma excelente experiência de leitura em telas de smartphones.`)},
    {id:"4.6.1",capitulo:"4.4.1	Prompt normal",sessao:"Cinema",prompt:txtHtml(`Crie uma pagina web para um Cinema local onde o usuário pode ver os horários disponíveis e agendar uma sessão.`)},
    {id:"4.6.2",capitulo:"4.4.2	Prompt estruturado pelos pilares",sessao:"Cinema",prompt:txtHtml(`Papel: Desenvolvedor Front-End especializado em portais de entretenimento e bilheteria.
Tarefa: Criar a interface de um cinema local com exibição de filmes em cartaz, horários e formulário de reserva de ingressos.
Contexto: Um cinema de bairro que necessita de um sistema simples para os clientes consultarem horários e agendarem sessões.
Formato: HTML, CSS e JavaScript integrados.
Restrições: Exibir filmes com classificação indicativa, sinopse curta, seletores de horários disponíveis (ex: 15h, 18h, 21h) e janela modal de confirmação de agendamento.`)},
    {id:"4.6.3",capitulo:"4.4.3	Prompt Zero-Shot",sessao:"Cinema",prompt:txtHtml(`Escreva o código HTML, CSS e JavaScript de uma página para um cinema local. A página deve permitir visualizar os filmes em cartaz, escolher o horário da sessão e abrir um formulário para agendar o ingresso.`)},
    {id:"4.9.1",capitulo:"4.5.1	Prompt normal",sessao:"Noticias Locais",prompt:txtHtml(`Construir uma página da web responsiva de Notícias locais que continue utilizável com zoom, em telas pequenas e com o texto ampliado, sem cortes ou rolagem horizontal desnecessária.`)},
    {id:"4.9.2",capitulo:"4.5.2	Prompt estruturado pelos pilares",sessao:"Noticias Locais",prompt:txtHtml(`Papel: Especialista em Acessibilidade Web (WCAG 2.1 AA) e Desenvolvedor Front-End Responsivo.
Tarefa: Construir um portal de notícias locais com layout fluido, totalmente acessível e adaptável a telas pequenas e ampliações de texto.
Contexto: Jornal comunitário voltado a leitores diversos, incluindo pessoas idosas ou com baixa visão que utilizam zoom do navegador ou navegação por teclado.
Formato: HTML5 semântico com CSS moderno utilizando unidades relativas ('rem', 'em', '%', 'vw'). 
Restrições: Garantir conformidade com as diretrizes WCAG 2.1 AA: o texto deve continuar totalmente legível com zoom de até 200% sem gerar rolagem horizontal ou corte de palavras; incluir rótulos ARIA, contraste mínimo de 4.5:1 e suporte completo à tecla TAB.`)},
    {id:"4.9.3",capitulo:"4.5.3	Prompt One-Shot",sessao:"Noticias Locais",prompt:txtHtml(`Exemplo de Estrutura Acessível:
<article> <h2>Obras no Centro Urbano</h2> <p>Texto da notícia com unidades relativas...</p> </article>
Instrução: Utilizando o exemplo de marcação acessível acima, construa a página completa de um portal de notícias locais que se mantenha responsivo e totalmente funcional ao aplicar zoom ou acessar via dispositivos móveis de tela pequena, sem apresentar barra de rolagem horizontal.`)}
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

            html += "<a target=_blank href='Prompts/"+prompts[i].id+"."+AIs[j].html+".html' alt='Página gerada pelo "+AIs[j].Name+"'>"+AIs[j].Name+"</a>";

            html += "<ul>";
            html += "<li><a href='Prompts/"+prompts[i].id+"."+AIs[j].html+"_axeDev Tools.csv' target=_blank alt='Relatório de Acessibilidade axeDev Tools referente à "+AIs[j].Name+"'>relatório axeDev Tools</a></li>";
            html += "<li><a href='Prompts/"+prompts[i].id+"."+AIs[j].html+"_lighthouse.pdf' target=_blank alt='Relatório de Acessibilidade Google LightHouse referente à "+AIs[j].Name+"'>relatório Google LightHouse</a></li>";
            html += "<li><a href='Prompts/"+prompts[i].id+"."+AIs[j].html+"_ASES.pdf' target=_blank alt='Relatório de Acessibilidade ASES referente à "+AIs[j].Name+"'>relatório ASES</a></li>";
            html += "<li><a href='https://wave.webaim.org/report#/https://mastergig.github.io/TCC_UFABC/Prompts/"+prompts[i].id+"."+AIs[j].html+".html' target=_blank alt='Relatório de Acessibilidade WAVE referente à "+AIs[j].Name+"'>relatório WAVE</a></li>";
            html += "</ul>";
            
            html += "</li>";
        }
        html += "</ul>";
        html += "</li>";
    }
    document.getElementById("prompts").innerHTML = html;
}