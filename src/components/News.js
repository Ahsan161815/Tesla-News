import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Chicago Tribune",
      },
      author: "Kelvin Chan",
      title: "Twitter faces lawsuits over unpaid rent for US HQ, UK office",
      description:
        "More landlords are taking Twitter to court over unpaid rent at the social media company’s headquarters in San Francisco and its British offices — the latest legal headaches for billionaire owner Elon Musk, who has been trying to slash expenses.",
      url: "https://www.chicagotribune.com/business/ct-biz-twitter-rent-lawsuits-20230124-e35y2y73jzh43jdvct75lzjsge-story.html",
      urlToImage:
        "https://www.chicagotribune.com/resizer/2k_wTPilQIKvxM-RFIhTp-WQGaA=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/DWE5HKZYU7U2ZH57EDZDOK7YM4.jpg",
      publishedAt: "2023-01-24T13:18:49Z",
      content:
        "LONDON — More landlords are taking Twitter to court over unpaid rent at the social media companys headquarters in San Francisco and its British offices the latest legal headaches for billionaire owne… [+2469 chars]",
    },
    {
      source: {
        id: null,
        name: "Hotnews.ro",
      },
      author: null,
      title:
        "Elon Musk susține că Google a vrut să cumpere Tesla și vorbește despre „gașca de rechini” de pe Wall Street",
      description:
        "CEO-ul Tesla Elon Musk a declarat marți în instanță că Google a avut un „interes activ” în a cumpăra producătorul auto, lucru care l-a încurajat să încerce să scoată compania de pe bursă cu fonduri saudite, relatează Markets Insider și MarketWatch.",
      url: "https://economie.hotnews.ro/stiri-companii-26040592-elon-musk-sustine-google-vrut-cumpere-tesla.htm",
      urlToImage:
        "https://media.hotnews.ro/media_server1/image-2022-02-11-25361026-0-elon-musk-intr-masina-tesla.jpg",
      publishedAt: "2023-01-24T13:17:00Z",
      content:
        "CEO-ul Tesla Elon Musk a declarat mari în instan c Google a avut un interes activ în a cumpra productorul auto, lucru care l-a încurajat s încerce s scoat compania de pe burs cu fonduri saudite, rela… [+2301 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Manon Carpentier",
      title: "Qu’attendre du premier SUV 100% électrique de Kia ?",
      description:
        "En attendant la sortie du premier SUV 100% électrique de Kia, de nouvelles informations ont été divulguées…",
      url: "https://www.presse-citron.net/quattendre-du-premier-suv-100-electrique-de-kia/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/12/Kia-EV9.jpg",
      publishedAt: "2023-01-24T13:15:57Z",
      content:
        "Alors que la berline électrique EV6 de Kia séduit de plus en plus dautomobilistes, le constructeur sud-coréen veut étoffer sa gamme verte avec un SUV 100% électrique. Si lEV9 est attendu au tournant,… [+2696 chars]",
    },
    {
      source: {
        id: null,
        name: "Auto-swiat.pl",
      },
      author: "Auto Świat",
      title: "Szokujące skutki zderzenia z Teslą. Silnik leżał 50 m dalej",
      description:
        "Biuro szeryfa hrabstwa Martin w USA poinformowało o poważnym wypadku, w którym Tesla zderzyła się z innym autem. Siła uderzenia była tak duża, że silnik jednego z aut, podobnie jak czwórka pasażerów, wypadł z samochodu.",
      url: "https://www.auto-swiat.pl/wiadomosci/aktualnosci/usa-szokujace-skutki-zderzenia-z-tesla-silnik-lezal-50-m-dalej/gd3e2nk",
      urlToImage:
        "https://ocdn.eu/pulscms-transforms/1/UpKktkpTURBXy9mYmNjNTUwYTliMmIwNmM1NzNmMTkzOTdhOTc2MjFjNi5qcGeSlQMAzOHNCADNBICTBc0EsM0Cdg",
      publishedAt: "2023-01-24T13:13:36Z",
      content:
        "A ok. 50 m od pojazdu przelecia silnik samochodu, który w nocy w weekend (21-22 stycznia) zderzy si z Tesl. Do wypadku doszo na Florydzie w USA. Sia uderzenia bya tak dua, e cztery osoby zostay wyrzu… [+756 chars]",
    },
    {
      source: {
        id: null,
        name: "Auto-swiat.pl",
      },
      author: "Auto Świat",
      title: "Szokujące skutki zderzenia z Teslą. Silnik leżał 50 m dalej",
      description:
        "Biuro szeryfa hrabstwa Martin w USA poinformowało o poważnym wypadku, w którym Tesla zderzyła się z innym autem. Siła uderzenia była tak duża, że silnik jednego z aut, podobnie jak czwórka pasażerów, wypadł z samochodu.",
      url: "https://www.auto-swiat.pl/ev/wiadomosci/usa-szokujace-skutki-zderzenia-z-tesla-silnik-lezal-50-m-dalej/3k676v0",
      urlToImage:
        "https://ocdn.eu/pulscms-transforms/1/UpKktkpTURBXy9mYmNjNTUwYTliMmIwNmM1NzNmMTkzOTdhOTc2MjFjNi5qcGeSlQMAzOHNCADNBICTBc0EsM0Cdg",
      publishedAt: "2023-01-24T13:13:36Z",
      content:
        "A ok. 50 m od pojazdu przelecia silnik samochodu, który w nocy w weekend (21-22 stycznia) zderzy si z Tesl. Do wypadku doszo na Florydzie w USA. Sia uderzenia bya tak dua, e cztery osoby zostay wyrzu… [+756 chars]",
    },
    {
      source: {
        id: null,
        name: "Habr.com",
      },
      author: "Firemoon",
      title:
        "SD – это Linux, а Midjourney – Mac: краткое полное руководство по Stable Diffusion",
      description:
        "Вот таких тирекс-тянок выдает нейросеть\n\nТекст про Midjourney привлек внимание, и в комментариях наметилась дискуссия про Stable Diffusion. Аргументы убедили меня попробовать SD самостоятельно, но вскоре я понял, что это не самая простая задача. Сообщество лю…",
      url: "https://habr.com/ru/company/selectel/blog/712316/#post-content-body",
      urlToImage:
        "https://habrastorage.org/webt/dx/_9/xv/dx_9xvsoig-sl7_a_urnxngki7k.jpeg",
      publishedAt: "2023-01-24T13:10:45Z",
      content:
        "- Midjourney , Stable Diffusion. SD , , . Stable Diffusion , .\r\n, , SD , . Telegram- ! Stable Diffusion , Midjourney.\r\n. Stable Diffusion , , . WebUI AUTOMATIC1111.\r\n . , . , , . \r\n, 4 VRAM. :\r\n<ul><… [+3847 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Parkev Tatevosian, CFA)",
      title: "Tesla Stock: Bear vs. Bull",
      description:
        "Tesla is one of the market's most widely talked about stocks today.",
      url: "https://www.fool.com/investing/2023/01/24/tesla-stock-bear-vs-bull/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/717677/gettyimages-1384646810.jpg",
      publishedAt: "2023-01-24T13:08:00Z",
      content:
        "Many investors have opinions on Tesla's (TSLA 7.74%) stock. There are many bulls, but there are also many bears. This video highlights both sides of the argument for Tesla's stock as an investment.\r\n… [+103 chars]",
    },
    {
      source: {
        id: null,
        name: "Boing Boing",
      },
      author: "Rob Beschizza",
      title:
        'At trial, Elon Musk claims his "taking Tesla private at $420" tweet has nothing to do with weed',
      description:
        "In 2018, Elon Musk tweeted that he was about to take Tesla private at $420 a share, sending the company's stock into turmoil for weeks. The general presumption was that he was fooling around and making a weed joke for his social media followers. — Read the re…",
      url: "https://boingboing.net/2023/01/24/at-trial-elon-musk-claims-his-taking-tesla-private-at-420-tweet-has-nothing-to-do-with-weed.html",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/04/103330503_musk3.jpg?fit=976%2C549&ssl=1",
      publishedAt: "2023-01-24T13:07:47Z",
      content:
        "In 2018, Elon Musk tweeted that he was about to take Tesla private at $420 a share, sending the company's stock into turmoil for weeks. The general presumption was that he was fooling around and maki… [+1417 chars]",
    },
  ];

  constructor() {
    super();
    console.log('News Constructor');
    this.state = {
      articles : this.articles,
      loading : false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=APIKEY";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Top News</h1>

        <div className="row row-cols-1 row-cols-md-4 g-4">
        {this.state.articles.map((element) => {
            return <div key={element.url} className="col">
              <NewsItem
                title={element.title}
                description={element.description ? element.description.slice(0, 88) : ''}
                imageUrl={element.urlToImage?element.urlToImage:'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg'} newsUrl={element.url}/>
            </div>
            
            })}
        </div>
      </div>
    );
  }
}

export default News;
