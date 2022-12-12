import axios from '@/services/axios'

export default {
    namespaced: true,
    state:{
        count:100,
        artigos:[
    {
        "source": {
            "id": null,
            "name": "Abola.pt"
        },
        "author": "Rafael Fernandes",
        "title": "Rúben Amorim anuncia baixa e revela dois titulares - A Bola",
        "description": "A BOLA, toda a informação desportiva. Acompanhe todas as notícias do seu clube ou modalidade preferida, para onde quer que vá.",
        "url": "https://www.abola.pt/nnh/2022-12-12/sporting-ruben-amorim-anuncia-baixa-e-revela-dois-titulares/968346",
        "urlToImage": "https://www.abola.pt/img/fotos/abola2015/SPORTING/2022-23/RubenAmorimTacadaLigaMaritimo3.jpg",
        "publishedAt": "2022-12-12T13:09:44Z",
        "content": "Rúben Amorim fez, esta segunda-feira, a antevisão à receção do Sporting ao Marítimo, agendada para terça-feira, às 20.45 horas, a contar para a terceira jornada do grupo B da Taça da Liga. O técnico … [+1246 chars]"
    },
    {
        "source": {
            "id": "globo",
            "name": "Globo"
        },
        "author": null,
        "title": "Faraó dos bitcoins: quadrilha de Glaidson dos Santos se aproximou de investigadores da Delegacia de Defraudações - Globo.com",
        "description": "Os criminosos inclusive estiveram várias vezes na Cidade da Polícia para negociar com os policiais. E, segundo o Ministério Público, conseguiram corromper cinco agentes e uma delegada.",
        "url": "https://g1.globo.com/fantastico/noticia/2022/12/12/farao-dos-bitcoins-quadrilha-de-glaidson-dos-santos-se-aproximou-de-investigadores-da-delegacia-de-defraudacoes.ghtml",
        "urlToImage": "https://s2.glbimg.com/SgwUnR9lNiFAg2vpgdP_VPZDlcg=/1200x/smart/filters:cover():strip_icc()/s02.video.glbimg.com/x720/11195393.jpg",
        "publishedAt": "2022-12-12T12:56:09Z",
        "content": "Para eliminar a concorrência, a quadrilha se aproximou de investigadores da Delegacia de Defraudações. Os criminosos inclusive estiveram várias vezes na Cidade da Polícia para negociar com os policia… [+3665 chars]"
    },
    {
        "source": {
            "id": "globo",
            "name": "Globo"
        },
        "author": null,
        "title": "Médico salva turista que sofreu infarto durante turbulência em voo na Argentina - Extra",
        "description": "O homem certo, no lugar certo, na hora certa. Um médico felizmente estava a bordo de um avião quando um dos passageiros passou mal ao atravessar momentos de...",
        "url": "https://extra.globo.com/noticias/mundo/medico-salva-turista-que-sofreu-infarto-durante-turbulencia-em-voo-na-argentina-25626163.html",
        "urlToImage": "https://extra.globo.com/incoming/25626162-b62-ee6/w533h800/medico-salvando.png",
        "publishedAt": "2022-12-12T12:54:00Z",
        "content": "O homem certo, no lugar certo, na hora certa. Um médico felizmente estava a bordo de um avião quando um dos passageiros passou mal ao atravessar momentos de turbulência. O caso ocorreu durante um voo… [+1795 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hiper.fm"
        },
        "author": "Inês Santos",
        "title": "Após ‘susto’ de saúde, João de Carvalho deixa alerta: “O trabalho não é a vida…” - Hiper Fm",
        "description": "João Carvalho teve uma \"paragem\" em palco e foi internado no hospital e hoje esteve no 'Casa Feliz' a falar sobre o episódio...",
        "url": "https://www.hiper.fm/apos-susto-de-saude-joao-de-carvalho-deixa-alerta-o-trabalho-nao-e-a-vida/",
        "urlToImage": "https://www.hiper.fm/wp-content/uploads/2022/12/joao-de-carvalho-1000x600.jpg",
        "publishedAt": "2022-12-12T12:39:13Z",
        "content": "O ator João de Carvalho, filho de Ruy de Carvalho, esteve nesta segunda-feira, 12 de dezembro, no programa ‘Casa Feliz’, à conversa com Diana Chaves e João Baião sobre o ‘susto’ que viveu recentement… [+1537 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sapobrasil.com.br"
        },
        "author": "AFP",
        "title": "Covid-19, uma doença que talvez nunca desapareça - SAPO Brasil",
        "description": "Há três anos, a covid-19 abalou o planeta. A pandemia não acabou, e pesquisadores alertam que devemos aprender com essa crise para lidar melhor com as próximas.",
        "url": "https://sapobrasil.com.br/atualidade/artigos/covid-19-uma-doenca-que-talvez-nunca-desapareca",
        "urlToImage": "https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=null&epic=ZWQ0zxhhWZ++7ku5ZCWR9NEpRFMcb0JCkBm1B2EJcX1D1djZwfxs7W7miovkzCFPrCNtmUV4ErPDj6ZJ6Nz1ez/b9BKAaLtEoy/Lch1f9/WMUA4=",
        "publishedAt": "2022-12-12T12:37:00Z",
        "content": "- A pandemia de covid vai acabar logo?\r\n\"Ainda não chegamos a esse ponto\", alertou a Organização Mundial da Saúde (OMS) no início de dezembro. \r\nEmbora pelo menos 90% da população mundial tenha algum… [+3267 chars]"
    },
    {
        "source": {
            "id": "globo",
            "name": "Globo"
        },
        "author": null,
        "title": "‘Diplomação de Lula marca início de uma fase de conciliação’, diz Camarotti - Globo.com",
        "description": "Governo eleito vive “último ato” antes da posse, no dia 1º de janeiro, apesar de já ter conversas de transição desde o anúncio do resultado da eleição.",
        "url": "https://g1.globo.com/bom-dia-brasil/noticia/2022/12/12/diplomacao-de-lula-marca-inicio-de-uma-fase-de-conciliacao-diz-camarotti.ghtml",
        "urlToImage": "https://s2.glbimg.com/n60nCroqhjYksTgMm7lcqaGU3zU=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/11195734.jpg",
        "publishedAt": "2022-12-12T12:35:28Z",
        "content": "Para Camarotti, o momento marca um tom de pacificação para o país, entre os governos atual e eleito. Lula deverá, em sua avaliação fazer um discurso de conciliação para o Brasil, de união entre as pe… [+131 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Editalconcursosbrasil.com.br"
        },
        "author": "Roldão Barros Jr.",
        "title": "Combustíveis fazem inflação ter alta de 0,41% em novembro - Edital Concursos Brasil",
        "description": "Entretanto, inflação acumulada nos últimos 12 meses chega a 5,90%, menor taxa em 21 meses.",
        "url": "https://editalconcursosbrasil.com.br/noticias/2022/12/combustiveis-fazem-inflacao-ter-alta-de-041-em-novembro/",
        "urlToImage": "https://editalconcursosbrasil.com.br/wp-content/uploads/2022/12/ipca-em-novembro.jpg",
        "publishedAt": "2022-12-12T12:24:00Z",
        "content": "O IPCA (Índice Nacional de Preços ao Consumidor Amplo) teve alta de 0,41% em novembro, segundo o IBGE (Instituto Brasileiro de Geografia e Estatística). O resultado do índice, que é considerado a inf… [+2435 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Opovo.com.br"
        },
        "author": "Levi Aguiar",
        "title": "Site do Governo do Ceará é invadido por hackers - O POVO",
        "description": "Site do Governo do Ceará é hackeado na manhã desta segunda, 12",
        "url": "https://www.opovo.com.br/noticias/ceara/2022/12/12/site-do-governo-do-ceara-e-invadido-por-hackers.html",
        "urlToImage": "https://www.opovo.com.br/_midias/jpg/2022/09/26/818x460/1_ataque_hackers-19798436.jpg",
        "publishedAt": "2022-12-12T11:38:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Sapo.pt"
        },
        "author": "MadreMedia",
        "title": "Proteção Civil alerta para chuva \"persistente e forte\" durante esta noite e madrugada de terça-feira - SAPO 24",
        "description": "Autoridade Nacional de Emergência e Proteção Civil alerta para possíveis inundações de bacias hidrográficas, pedindo às pessoas para não estacionar os seus veículos junto às margens. Vem aí chuva forte, particularmente na região de Lisboa e Vale do Tejo.",
        "url": "https://24.sapo.pt/atualidade/artigos/protecao-civil-alerta-para-chuva-persistente-e-forte-durante-esta-noite-e-madrugada-de-terca-feira",
        "urlToImage": "https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fsapo24.web.sapo.io%2Fassets%2Fimg%2F24-sapo%2Ffacebook-overlay.png&epic=MzUx8gNuZ1YWWpWh8Oo8OrdFbk9kTxJAKRtlc2zXHThSQV1DDrvzMXjRFzgpxOtg2VWQCj3DOpTROB0o9qwV2ilfw2ywOTm/uP8smWBHgCGV6L8=",
        "publishedAt": "2022-12-12T11:32:00Z",
        "content": "Durante o balanço operacional, André Fernandes, comandante da Autoridade Nacional de Emergência e Proteção Civil (ANEPC), informou que foram \"registadas 124 ocorrências, centralizadas em Braga, Aveir… [+1923 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Uol.com.br"
        },
        "author": "Marina Marini;",
        "title": "Alexandre Nero avalia mudança após se tornar pai: 'Vivia na esbórnia' - UOL",
        "description": "Alexandre Nero, 52 anos, acumula trabalhos na música, televisão, teatro e cinema. Alguns dos fatos mais marcantes da vida do artista, porém, aconteceram longe dos holofotes: os nascimentos de seus dois filhos, Noá e Inã.Em entrevista ao Extra, ele contou",
        "url": "https://www.uol.com.br/splash/noticias/2022/12/12/alexandre-nero-diz-que-vivia-na-esbornia.htm",
        "urlToImage": "https://conteudo.imguol.com.br/c/entretenimento/f2/2022/12/12/o-ator-alexandre-nero-1670843781882_v2_750x421.png",
        "publishedAt": "2022-12-12T11:18:42Z",
        "content": "Alexandre Nero, 52 anos, acumula trabalhos na música, televisão, teatro e cinema. Alguns dos fatos mais marcantes da vida do artista, porém, aconteceram longe dos holofotes: os nascimentos de seus do… [+1441 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Noticiasaominuto.com"
        },
        "author": "Miguel Dias",
        "title": "Próximo telemóvel da Huawei deverá ser lançado em março - Notícias ao Minuto",
        "description": "Há mais informações sobre as séries P60 e Mate 60.",
        "url": "https://www.noticiasaominuto.com/tech/2130779/proximo-telemovel-da-huawei-devera-ser-lancado-em-marco",
        "urlToImage": "https://media-manager.noticiasaominuto.com/1280/naom_6033c4bb64c4d.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoyMDQ4LCJjcm9wSGVpZ2h0IjoxMTUyLCJjcm9wWCI6MTEsImNyb3BZIjozMjh9LCJwb3J0cmFpdCI6eyJjcm9wV2lkdGgiOjkyNiwiY3JvcEhlaWdodCI6MTY0NiwiY3JvcFgiOjI5NSwiY3JvcFkiOjExfX0=",
        "publishedAt": "2022-12-12T11:16:00Z",
        "content": "Os últimos rumores sobre os planos da Huawei para o mercado mobile indicam que a próxima série de telemóveis - a Huawei P60 - será lançada em março de 2023. Mais ainda, as informações atuais indicam … [+934 chars]"
    },
    {
        "source": {
            "id": "globo",
            "name": "Globo"
        },
        "author": null,
        "title": "Economia brasileira deve crescer pouco em 2023; quais as consequências da estagnação? - Globo.com",
        "description": "Crescimento abaixo de 1% projetado pelo BC deve impactar geração de empregos, consumo das famílias e investimentos.",
        "url": "https://g1.globo.com/economia/noticia/2022/12/12/economia-brasileira-deve-crescer-pouco-em-2023-quais-as-consequencias-da-estagnacao.ghtml",
        "urlToImage": "https://s2.glbimg.com/M49qpbSUWksiUTUoVZzABy7TsKo=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/y/J/stzW4JRpqrPa7tTuL5mA/pexels-alexander-mils-2068975.jpg",
        "publishedAt": "2022-12-12T11:00:15Z",
        "content": "Nós já contamos o que está causando essa piora: efeito defasado dos juros altos, com consequente restrição ao crédito, baixo índice de investimento das empresas, preocupações com as contas do governo… [+3476 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sapo.pt"
        },
        "author": "Sportinforma",
        "title": "Árbitro do Marrocos-Portugal regressa a casa - SAPO Desporto",
        "description": "Argentino Facundo Tello é um dos juízes dispensados pela FIFA, uma vez que nas meias-finais não pode haver árbitros das nacionalidades das seleções ainda em prova.",
        "url": "https://desporto.sapo.pt/futebol/mundial/artigos/arbitro-do-marrocos-portugal-regressa-a-casa",
        "urlToImage": "https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fdesporto.sapo.pt%2Fassets%2Fimg%2Fdesporto-sapo%2Ffacebook-overlay.png&epic=MTM0SvrFatC9N2WbDWi+m7DypSSrwxQuajPEQYUAJJwhkzoR2A2XDI/9eUuKGN4f7JTPz3wax+cZkytfRUCb6aQyvLrBrlTaMmuY+BlX8Oxw514=",
        "publishedAt": "2022-12-12T10:59:00Z",
        "content": "Com apenas quatros jogos por disputar até ao fim do Mundial2022, a FIFA vai 'arrumando a casa' e descartando alguns dos juízes que haviam sido nomeados até agora.\r\nO argentino Facundo Tello, árbitro … [+334 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sicnoticias.pt"
        },
        "author": "SIC Notícias",
        "title": "Ator Thiago Rodrigues assaltado e espancado no Rio de Janeiro - SIC Notícias",
        "description": "O ator terá estado várias horas inconsciente até ser encontrado por uma comerciante da zona onde se encontrava.",
        "url": "https://sicnoticias.pt/cultura/2022-12-12-Ator-Thiago-Rodrigues-assaltado-e-espancado-no-Rio-de-Janeiro-e74748d6",
        "urlToImage": "https://images.impresa.pt/sicnot/2022-12-12-Rio-de-Janeiro.png-3dc380ee/1.91x1?wm=true&outputFormat=jpeg",
        "publishedAt": "2022-12-12T10:24:45Z",
        "content": "O ator brasileiro Thiago Rodrigues, de 42 anos, foi assaltado e espancado por cinco homens no sábado à noite, no Rio de Janeiro. \r\nSegundo o jornal Globo, o ator estava na zona do Baixo Gávea, na zon… [+571 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sapo.pt"
        },
        "author": "https://www.facebook.com/pedro.j.simoes",
        "title": "A nova MIUI 14 também foi revelada para os smartphones Xiaomi - Pplware",
        "description": "A MIUI 14 a Xiaomi entrou num nova linha de desenvolvimentos, para tornar esta proposta mais ligeira e mais intuitiva de usar nos smartphones",
        "url": "https://pplware.sapo.pt/smartphones-tablets/android/a-nova-miui-14-tambem-foi-revelada-para-os-smartphones-xiaomi/",
        "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2022/12/Xiaomi_MIUI_14_novidades_3.jpg",
        "publishedAt": "2022-12-12T10:20:45Z",
        "content": "Ao mesmo tempo que revelou os novos Xiaomi 13 e 13 Pro, a marca apresentou a sua personalização do Android, a MIUI 14. Esta nova versão traz a atualização esperada do sistema da Google, com todas as … [+2077 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Www.jn.pt"
        },
        "author": "JN/Agências",
        "title": "Amiga da primeira-ministra italiana assassinada em tiroteio num café - Jornal de Notícias",
        "description": "Três mulheres, incluindo uma amiga da recém-eleita primeira-ministra de Itália, Giorgia Meloni, foram assinadas no domingo, enquanto reuniam num café em Roma. Outras quatro pessoas ficaram feridas. O suspeito, um homem de 57 anos, foi detido pelas autoridades.",
        "url": "https://www.jn.pt/mundo/amiga-da-primeira-ministra-italiana-assassinada-em-tiroteio-num-cafe-15470000.html",
        "urlToImage": "https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=4effcbdb-6ca5-4a74-88b1-d1eced4af3c2&w=800&h=420&watermark=true&t=20221212102000",
        "publishedAt": "2022-12-12T10:20:00Z",
        "content": "Três mulheres, incluindo uma amiga da recém-eleita primeira-ministra de Itália, Giorgia Meloni, foram assinadas no domingo, enquanto reuniam num café em Roma. Outras quatro pessoas ficaram feridas. O… [+1993 chars]"
    },
    {
        "source": {
            "id": "info-money",
            "name": "InfoMoney"
        },
        "author": "Felipe Moreira",
        "title": "Bolsas sem direção definida em semana de reunião do Fed e do BCE; diplomação da chapa Lula-Alckmin e mais assuntos do mercado hoje - InfoMoney",
        "description": "No Brasil, alguns dos temas de maior destaque são a ata do Copom, IBC-Br e a votação da PEC de Transição na Câmara",
        "url": "https://www.infomoney.com.br/mercados/bolsas-sem-direcao-definida-em-semana-de-reuniao-do-fed-e-do-bce-diplomacao-da-chapa-lula-alckmin-e-mais-assuntos-do-mercado-hoje/",
        "urlToImage": "https://www.infomoney.com.br/wp-content/uploads/2020/03/GettyImages-699097857-low.jpg?quality=70",
        "publishedAt": "2022-12-12T10:18:34Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Expresso.pt"
        },
        "author": "Expresso",
        "title": "Em direto: Biden promete reforço da defesa antiaérea ucraniana, Ucrânia diz ter atingido quartel-general usado pelo grupo Wagner em Luhansk - Expresso",
        "description": "Biden disse a Zelensky que os EUA darão prioridade às defesas antiaéreas para a Ucrânia. Os ministros dos Negócios Estrangeiros da UE discutem apoio a Kiev antes da última cimeira do ano, e, juntamente com o G7, aumentarão em dois mil milhões de euros o apoio…",
        "url": "https://expresso.pt/guerra-na-ucrania/2022-12-12-Em-direto-Biden-promete-reforco-da-defesa-antiaerea-ucraniana-Ucrania-diz-ter-atingido-quartel-general-usado-pelo-grupo-Wagner-em-Luhansk-e76ace10",
        "urlToImage": "https://images.impresa.pt/expresso/2022-12-08-guerra-ucrania-672fd07a-1/1.91x1?wm=true&outputFormat=jpeg",
        "publishedAt": "2022-12-12T10:07:30Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Uol.com.br"
        },
        "author": "Redação NT",
        "title": "5 razões que provam que Silvio Santos faz falta aos domingos - NaTelinha",
        "description": "Silvio Santos completa 92 anos afastados na televisão, deixando o público com saudades de seus micos, bordões, gargalhadas e outras características que o marca; confira",
        "url": "https://natelinha.uol.com.br/televisao/2022/12/12/5-razoes-que-provam-que-silvio-santos-faz-falta-aos-domingos-191094.php",
        "urlToImage": "https://imagem.natelinha.uol.com.br/original/silvio-santos-programa-sbt_4666.jpeg",
        "publishedAt": "2022-12-12T09:57:00Z",
        "content": "Hoje é dia de festa! Silvio Santos completa 92 anos em um momento que tem se tornado comum: faz mais um aniversário longe da telinha. Desde 2019, o apresentador deixou de apresentar o Programa Silvio… [+3042 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sapo.pt"
        },
        "author": "MadreMedia / AFP",
        "title": "Morreram três das quatro crianças resgatadas de um lago gelado no Reino Unido - SAPO 24",
        "description": "Quatro crianças foram internadas em dois hospitais do Reino Unido após sofrerem paragens cardíacas por terem caído num lago gelado. Três delas morreram, enquanto a quarta continua \"em estado crítico\", anunciaram as autoridades britânicas.",
        "url": "https://24.sapo.pt/atualidade/artigos/quatro-criancas-resgatadas-em-paragem-cardiaca-depois-de-cairem-em-lago-gelado-no-reino-unido",
        "urlToImage": "https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fsapo24.web.sapo.io%2Fassets%2Fimg%2F24-sapo%2Ffacebook-overlay.png&epic=OGQ5hNbZDX4vDuHxQ2hNaOyMWQgwFEiFptwc5fQ8dj1aSxuT5USahZpK+Vbl2+ZDe8CzXrZ3VyKJBm2iJJTcju2VHFw2dG7HBUxh02GLWMDpXP4=",
        "publishedAt": "2022-12-12T09:51:00Z",
        "content": "Durante a tarde, depois de serem alertados, bombeiros e paramédicos tiraram os menores da água congelada no parque de Babbs Mill em Solihull, cidade a sudeste de Birmingham. As crianças estavam a bri… [+2209 chars]"
    }]

    },
    getters:{
        contagem:({ count }) => {
            return count * 2
        },
        artigoAPI:({ artigos }) => {
            return artigos
        }
    },
    mutations:{
        ASSIGN_ARTIGOS(state,payload){
            state.artigos = payload
        }

    },
    actions:{
        getTopHeadLine({ state , commit, dispatch }){
            return new Promise(async (resolve,reject) => {

                try {
                    
                    // const { articles } = await (await axios.get('/top-headlines',{ params: { language: 'pt' } })).data
                    // console.log(state.articles)
                    // commit('ASSIGN_ARTIGOS', articles)
                    
                    console.log(state.artigos)
                    commit('ASSIGN_ARTIGOS', state.artigos)
                    
                    resolve('ok')
                
                } catch (error) {
                    
                    reject(error)    
                
                }
                
            })
        }
    }

}