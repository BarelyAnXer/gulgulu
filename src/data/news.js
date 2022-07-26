import news1 from "../images/news/banner/news1.webp"
import news2 from "../images/news/banner/news2.webp"
import news3 from "../images/news/banner/news3.webp"
import news4 from "../images/news/banner/news4.webp"

import wired from "../images/news/icon/wired.png"
import techCrunch from "../images/news/icon/techCruch.webp"
import techRadar from "../images/news/icon/TechRadar.png"
import digitalTrends from "../images/news/icon/digitaltrends.jpg"


export const news = [
    {
        icon: techCrunch,
        title: "Is the advertising market in trouble?",
        content: "Snap was not the only victim of its lackluster earnings digest —" +
            " other companies that make money off of advertising incomes saw their share " +
            "prices dip on concerns that the social network was not an outlier. Alphabet, Meta, " +
            "and Pinterest also took blows, cutting their worth ahead of earnings disclosures as" +
            " investors lowered their hopes for ad-based incomes.",
        time: "15 hrs ago",
        image: news4,
        link: "https://techcrunch.com/2022/07/25/is-the-advertising-market-in-trouble/",
        provider: "Tech Crunch",
    },
    {
        icon: digitalTrends,
        title: "An actionable framework for founders bridging into web3",
        content: "I doubt it’s the first time you’ve been asked that question. It’s been on the lips of a " +
            "growing number of investors on the hunt for disruptive opportunities blockchain-based technologies " +
            "can offerBut for founders looking to foray into the world of decentralization, it’s all too easy to become" +
            " distracted from core business objectives by shiny new buzzwords emanating from the space.",
        time: "2 days ago",
        image: news3,
        link: "https://techcrunch.com/2022/07/25/an-actionable-framework-for-founders-bridging-into-web3/",
        provider: "Digital Trends",

    },
    {
        icon: techRadar,
        title: "Creators on Facebook can now earn money through videos that use licensed music",
        content: "Meta announced today that creators on Facebook can now earn money through their " +
            "Facebook videos that use licensed music. The company is launching “Music Revenue Sharing” " +
            "to allow video creators to include licensed music in their videos on Facebook and earn a" +
            " share of in-stream ad revenue. The company says this opens up a new way for both creators " +
            "and music rights holders to earn money. Although creators have been able to use licensed" +
            " music in videos, they haven’t been able to monetize them until now.",
        time: "1 day ago",
        image: news1,
        link: "https://techcrunch.com/2022/07/25/creators-on-facebook-cearn-money-through-videos-that-use-licensed-music/",
        provider: "Tech Radar"
    },
    {
        icon: wired,
        title: "Netflix’s iOS app now has a sign-up button that takes you to its website",
        content: "Netflix’s app on iOS now has a sign-up button that will redirect you to its site " +
            "so you can subscribe to one of its plans with the company paying no App Store fees." +
            " This change comes after Apple said in March that “reader” apps — ones that provide" +
            " digital content like books and videos — can offer an external link to their website for account creation.",
        time: "12 hrs ago",
        image: news2,
        link: "https://techcrunch.com/2022/07/25/netflixs-ios-app-now-has-a-sign-up-button-that-takes-you-to-its-website/",
        provider: "Wired"
    },
];
