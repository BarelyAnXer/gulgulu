import animedownloader from "../images/projects/animedownlaoder.png"
import conways from "../images/projects/conways.png"
import finalinternship from "../images/projects/final internship.png"
import pathfinding from "../images/projects/pathfinding.png"
import tradingcircle from "../images/projects/trading circle.png"
import noimage from "../images/projects/noiamge.png"

export const projects = [
  {
    link: "https://www.tradingcircle.com.ph/",
    title: "Trading Circle",
    img: tradingcircle,
    technologyStack: "React · Node · MongoDB · Express · CSS · HTML",
    content: "hingin description ka kuya alex"
  }, {
    link: "https://github.com/BarelyAnXer/batch-anime-downloader",
    title: "Batch Anime Downloader",
    img: animedownloader,
    technologyStack: "Python · HTML · Javascript · Eel · Selenium · Requests · BeautifulSoup4 ",
    content: "Batch anime downloader is a Cross platform Batch Anime downloader desktop app made with Eel (Eel is a little Python library for making simple Electron-like offline HTML/JS GUI apps, with full access to Python capabilities and libraries.). I made this software since i was done trying to download anime one by one. I learned a lot building this project but most importantly i learned web scraping while building this project"
  }, {
    link: "Conways-game-of-life",
    title: "https://github.com/BarelyAnXer/Conways-game-of-life",
    img: conways,
    technologyStack: "React · CSS · HTML",
    content: "The Game of Life, also known simply as Life, is a cellular automaton devised by" +
      " the British mathematician John Horton Conway in 1970. " +
      "It is a zero-player game, meaning that its evolution is determined by its initial state," +
      " requiring no further input. While building this project I learned more about react especially how states works"
  }, {
    link: "https://github.com/BarelyAnXer/Library-Management-System",
    title: "Library Management System",
    img: noimage,
    technologyStack: "C# · MySQL · Crystal Reports",
    content: "Library Management System is my final project in grade 12 built with c# as primary " +
      "language and gui, mysql for database and " +
      "it is integrated with Crystal Reports (Crystal Reports is a business intelligence " +
      "application marketed to small- and medium-sized businesses by SAP)"
  }, {
    link: "",
    title: "",
    img: finalinternship,
    technologyStack: "",
    content: ""
  }, {
    link: "",
    title: "GuluGulu (this website)",
    img: finalinternship,
    technologyStack: "",
    content: ""
  }

]

// link value is either link for the website if deployed or github link for code