# RobotDragon

> O dragão-robô de companhia que você escolhe entre as lendas do filme "Como treinar o seu dragão". 

## Integrantes

- Manuela do Prado Garcia


## Sobre o produto

**RobotDragon** é uma marca fictícia de **dragões-robôs colecionáveis** inspirados nos dragões da franquia *Como Treinar o Seu Dragão*. 
A proposta é simples: o cliente **escolhe a espécie** que quiser, recebe um robô de companhia com carenagem temática e usa um app para "treinar" o dragão — missões, truques e um sistema de vínculo.

- **Público:** fãs da franquia, colecionadores de brinquedos tecnológicos e famílias com crianças.
- **Proposta de valor:** não é um brinquedo qualquer, é um vínculo. Cada unidade é feita na espécie
  escolhida, com efeito de sopro (plasma, gelo, ácido, lava), som e comportamento próprios.

A landing page apresenta o produto e conduz o visitante até um **Pagina inicial**: entrar na
**lista de espera** da pré-venda (simulada, sem backend).

---

## Jornada de construção

### Ideia inicial

A ideia partiu de uma pergunta simples: *"qual produto fictício daria vontade de um fã comprar?"*.
Como o eu gosto muito do filme "Como treinar o seu dragão" decidi envolver os dragões dos filmes, consideramos algumas alternativas:

1. Um **jogo/quiz** que diz qual dragão combina com você — divertido, mas não era um *produto*.
2. Um **manual digital** dos dragões — informativo, porém pouco "vendável".
3. Um **dragão-robô colecionável** com catálogo selecionável — juntava o apelo nostálgico dos filmes com algo que dá para "comprar", escolher e treinar.

Ficamos com a terceira opção porque ela permitia transformar o elemento mais legal da franquia
(os próprios dragões) no **coração da página**: um catálogo interativo onde o usuário explora cada
espécie.

### Pesquisa e referências

- **Fontes de conteúdo:** pesquisamos as habilidades e as histórias de cada dragão para retratá-los
  com fidelidade aos filmes e séries (sopro de plasma do Fúria da Noite, gás + faísca do Zipper
  Horrendo, gelo e domínio de alfa do Bewilderbeast, etc.).
- **Imagens:** usamos imagens reais dos dragões hospedadas no wiki da franquia
  (*How to Train Your Dragon Wiki*, na Fandom), em vez de figuras genéricas, para manter a
  identidade visual.
- **Referências de estilo:** páginas de produtos "tech" e de colecionáveis, com bastante contraste,
  tipografia condensada para títulos e blocos de "ficha técnica".
- **Paleta:** extraída das capas dos filmes — **preto, marrom, branco, vermelho e amarelo** 
### Ferramentas utilizadas

- **React** + **TypeScript** + **Vite**
- **CSS Modules** (CSS modularizado) + variáveis CSS para o tema
- **OpenCode** (agente de IA no terminal) como apoio principal de desenvolvimento
- Navegador para testar imagens e layout

### Uso de IA

- **Modelo utilizado: DeepSeek V4 Flash Free e Nemotron 3 Ultra Free.
- Nemotron 3 Iltra Free: Para Fazer toda a estrutura inicial, porem no visual(corres, imagens...), ele não estava sendo muito util
-  DeepSeek V4 Flash Free: Para fazer todo o restando do projeto
- **Para quê:** estruturação do projeto em FSD, criação dos componentes, montagem do conteúdo dos
  dragões (habilidades/lenda) e os modelos.
- **Onde não foi satisfatório:** as descrições dos dragões exigiram revisão manual para garantir
  fidelidade às obras; alguns textos gerados foram ajustados à mão.
- **Sugestões mantidas / alteradas / descartadas:**
  - *Mantidas:* arquitetura FSD, CSS Modules, modal de detalhes ao clicar no dragão, uso de imagens
    reais do wiki.
  - *Alteradas:* a paleta foi refinada para ficar mais próxima das cores das capas.
  - *Descartadas:* ideias de gráficos/efeitos pesados.

### Evolução da solução

- **Primeira versão mental:** um catálogo simples de dragões robos com textos.
- **Versão final:** uma landing page completa com hero, catálogo interativo com modal de detalhes (habilidades + história + ficha técnica), diferenciais, "como funciona", avaliações, planos de pré-venda, FAQ, rodapé e formulário de lista de espera (simulado).
- Mudanças de rumo: aumentamos o catálogo para **16 dragões**, trocamos ícones por **SVG próprios**
  (para não usar emojis) e ajustamos o CTA principal para a lista de espera, que é o único "conversion
  point" da página.

### Resultado final

Avaliamos o resultado completo para um protótipo navegável: a página conta a proposta, deixa
o usuário explorar os dragões com imagens de verdade e converte em um CTA coerente. Se tivéssemos mais tempo, faríamos: um modo "comparar dragões" e 100%
acessível em todos os detalhes.

---

## Arquitetura

O projeto usa **FSD (Feature-Sliced Design)**. As camadas, de baixo para cima:

```
src/
  app/        # bootstrap da aplicação (main.tsx, App.tsx) e estilos globais/tema
  pages/      # home — monta os widgets na ordem da landing page
  widgets/    # blocos de UI independentes: header, hero, dragon-catalog, benefits,
              # how-it-works, testimonials, pricing, waitlist, faq, footer
  features/   # interações do usuário: select-dragon (modal), join-waitlist (formulário)
  entities/   # modelos de domínio: dragon (dados + card), testimonial (dados + card)
  shared/     # reutilizável e agnóstico: ui/ (Button, Modal, Badge...), lib, config
```

Regra de dependência: uma camada só importa das camadas abaixo dela. 

## Recursos da página

- Identidade visual própria (paleta das capas dos filmes + tipografia display).
- Hero com proposta e CTA principal.
- **Catálogo interativo de 16 dragões** — ao clicar, abre um **modal** com nome, espécie, classe, raridade, montaria, filme de estreia, **habilidades** e **história/lenda**, além de uma ficha técnica com barras de atributos.
- Diferenciais, "como funciona" em 4 passos, avaliações fictícias, planos de pré-venda e FAQ.
- **Formulario simulado:** formulário de lista de espera (valida e-mail e mostra confirmação) + navegação por scroll entre seções.


# Evolução da Landing Page com MCP

## Aspecto analisado
Foram priorizadas a acessibilidade da navegação e a adaptação da interface para telas pequenas na landing page RobotDragon.

## Modificações realizadas
- Adicionado o atalho “Pular para o conteúdo principal”, visível ao navegar com o teclado.
- Melhorada a semântica do menu móvel com `nav`, `aria-controls` e identificação da navegação.
- Aprimorado o formulário da lista de espera com `required`, `autoComplete`, associação da mensagem de erro ao campo e indicação visual de erro.
- Ajustados estilos para telas estreitas, incluindo o botão de envio do formulário.
- Mantido o indicador de foco visível para navegação por teclado e o suporte a preferência por movimento reduzido já existente.

## MCP utilizado
Ferramentas de navegador integradas à sessão, incluindo `openBrowserPage` e `runPlaywrightCode` para executar interações Playwright na página local.

## Resultados observados
- O campo de e-mail foi identificado pelo nome acessível “Seu e-mail” e apresentou `type="email"`, `required`, `autocomplete="email"` e `aria-invalid="false"` no estado inicial.
- Ao enviar um endereço malformado (`malformado`), o campo passou para `aria-invalid="true"` e foi exibida a mensagem “Digite um e-mail válido para entrar na lista.” O campo referenciou a mensagem por `aria-describedby="email-error"`, correspondente ao `id` do alerta.
- Ao editar o campo após o erro, a mensagem foi removida e `aria-invalid` voltou a `"false"`; ao enviar novamente um endereço malformado, o erro apareceu outra vez.
- Com `teste@example.com`, o formulário exibiu o estado de sucesso “Você está na lista!” e incluiu o endereço na confirmação.

## Limites e problemas observados
- A validação foi feita no formulário da página local. Não foram verificados viewports específicos de desktop ou celular, o menu móvel, os links de navegação nem o atalho para pular ao conteúdo.
- O Playwright aguardou a estabilidade do botão e não concluiu o clique normal dentro do tempo limite; a sequência foi completada com clique forçado. Isso é uma ressalva da interação automatizada, não uma falha funcional comprovada do formulário.

## Avaliação da contribuição
As ferramentas permitiram testar as transições reais do formulário no navegador, conferir a mensagem de erro e confirmar sua associação acessível ao campo, além de observar o estado de sucesso. A execução também mostrou os limites do que foi validado: não há evidência nesta sessão para afirmar resultados de testes responsivos ou de navegação.
