"use client";
import React, { useState } from "react";
import { simulateSport } from "./simulation";
import "./badminton.css";

const Badminton: React.FC = () => {
  const [results, setResults] = useState({
    mensSingles: [] as [string, number][],
    mensDoubles: [] as [string, number][],
    womensSingles: [] as [string, number][],
    womensDoubles: [] as [string, number][],
    mixedDoubles: [] as [string, number][],
    womensBasketball: [] as [string, number][],
    mensBasketball: [] as [string, number][],
    womensFootball: [] as [string, number][],
    mensFootball: [] as [string, number][],
  });

  const handlePredictClick = () => {
    const mensSinglesTeams = [
      "Viktor Axelsen (DEN)",
      "Long Chen (CHN)",
      "Anthony Sinisuka Ginting (INA)",
      "Kevin Cordon (GUA)",
      "Anders Antonsen (DEN)",
      "Tien Chen Chou (TPE)",
      "Kwanghee Heo (KOR)",
      "Yuqi Shi (CHN)",
      "Mark Caljouw (NED)",
      "Jonatan Christie (INA)",
      "Zii Jia Lee (MAS)",
      "Toby Penty (GBR)",
      "Kanta Tsuneyama (JPN)",
      "Tzu-Wei Wang (TPE)",
      "Matthew Abela (MLT)",
      "Pablo Abian (ESP)",
      "Sai Praneeth Bhamidipati (IND)",
      "Felix Burestedt (SWE)",
      "Ygor Coelho (BRA)",
      "Ade Resky Dwicahyo (AZE)",
      "Niluka Karunaratne (SRI)",
      "Kalle Koljonen (FIN)",
      "Gergely Krausz (HUN)",
      "Timothy Lam (USA)",
      "Brice Leverdez (FRA)",
      "Kean Yew Loh (SGP)",
      "Aram Mahmoud (XXB)",
      "Kento Momota (JPN)",
      "Lino Munoz (MEX)",
      "Raul Must (EST)",
      "Ka Long Angus Ng (HKG)",
      "Nhat Nguyen (IRL)",
      "Tien Minh Nguyen (VIE)",
      "Georges Julien Paul (MRI)",
      "Artem Pochtarov (UKR)",
      "Kai Schaefer (GER)",
      "Sergey Sirant (ROC)",
      "Kantaphon Wangcharoen (THA)",
      "Luka Wraber (AUT)",
      "Brian Yang (CAN)",
      "Misha Zilberman (ISR)",
    ];
    const mensSinglesGoldTeams = ["Viktor Axelsen (DEN)"];
    const mensSinglesSilverTeams = ["Long Chen (CHN)"];
    const mensSinglesBronzeTeams = ["Anthony Sinisuka Ginting (INA)"];

    const mensDoublesTeams = [
      "Yang Lee / Chi-Lin Wang (TPE)",
      "Yu Chen Liu / Jun Hui Li (CHN)",
      "Wooi Yik Soh / Aaron Chia (MAS)",
      "Hendra Setiawan / Mohammad Ahsan (INA)",
      "Kim Astrup / Anders Skaarup Rasmussen (DEN)",
      "Hiroyuki Endo / Yuta Watanabe (JPN)",
      "Kevin Sanjaya Sukamuljo / Marcus Fernaldi Gideon (INA)",
      "Keigo Sonoda / Takeshi Kamura (JPN)",
      "Ryan Chew / Phillip Chew (USA)",
      "Seungjae Seo / Solgyu Choi (KOR)",
      "Jason Ho-Shue / Nyl Yakura (CAN)",
      "Ivan Sozonov / Vladimir Ivanov (ROC)",
      "Marvin Seidel / Mark Lamsfuss (GER)",
      "Sean Vendy / Ben Lane (GBR)",
      "Anuoluwapo Juwon Opeyori / Godwin Olofua (NGR)",
      "Satwiksairaj Rankireddy / Chirag Shetty (IND)",
    ];
    const mensDoublesGoldTeams = ["Yang Lee / Chi-Lin Wang (TPE)"];
    const mensDoublesSilverTeams = ["Yu Chen Liu / Jun Hui Li (CHN)"];
    const mensDoublesBronzeTeams = ["Wooi Yik Soh / Aaron Chia (MAS)"];

    const womensSinglesTeams = [
      "Yu Fei Chen (CHN)",
      "Tzu Ying Tai (TPE)",
      "Pusarla Venkata Sindhu (IND)",
      "Bingjiao He (CHN)",
      "Se-Young An (KOR)",
      "Ratchanok Intanon (THA)",
      "Nozomi Okuhara (JPN)",
      "Akane Yamaguchi (JPN)",
      "Mia Blichfeldt (DEN)",
      "Gaeun Kim (KOR)",
      "Michelle Li (CAN)",
      "Busanan Ongbamrungphan (THA)",
      "Gregoria Mariska Tunjung (INA)",
      "Fathimath Nabaaha Abdul Razzaq (MDV)",
      "Dorcas Ajoke Adesokan (NGR)",
      "Soraya Aghaeihajiagha (IRI)",
      "Clara Azurmendi Moreno (ESP)",
      "Soniia Cheah (MAS)",
      "Hsuan-Yu Wendy Chen (AUS)",
      "Ngan Yi Cheung (HKG)",
      "Haramara Gaitan (MEX)",
      "Kirsty Gilmour (GBR)",
      "Doha Hany (EGY)",
      "Sabrina Jaquet (SUI)",
      "Evgeniya Kosetskaya (ROC)",
      "Kristin Kuuba (EST)",
      "Yvonne Li (GER)",
      "Daniela Macias (PER)",
      "Thuy Linh Nguyen (VIE)",
      "Ksenia Polikarpova (ISR)",
      "Xuefei Qi (FRA)",
      "Martina Repiska (SVK)",
      "Mahoor Shahzad (PAK)",
      "Fabiana Da Silva (BRA)",
      "Nikte Alejandra Sotomayor (GUA)",
      "Lianne Tan (BEL)",
      "Thuzar Thet Htar (MYA)",
      "Maria Ulitina (UKR)",
      "Jia Min Yeo (SGP)",
      "Neslihan Yigit (TUR)",
      "Linda Zetchiri (BUL)",
      "Beiwen Zhang (USA)",
      "Laura Sarosi (HUN)",
    ];
    const womensSinglesGoldTeams = ["Yu Fei Chen (CHN)"];
    const womensSinglesSilverTeams = ["Tzu Ying Tai (TPE)"];
    const womensSinglesBronzeTeams = ["Pusarla Venkata Sindhu (IND)"];

    const womensDoublesTeams = [
      "Greysia Polii / Apriyani Rahayu (INA)",
      "Qing Chen Chen / Yi Fan Jia (CHN)",
      "Heeyong Kong / Soyeong Kim (KOR)",
      "Seung Chan Shin / So Hee Lee (KOR)",
      "Yin Hui Li / Yue Du (CHN)",
      "Yuki Fukushima / Sayaka Hirota (JPN)",
      "Wakana Nagahara / Mayu Matsumoto (JPN)",
      "Cheryl Seinen / Selena Piek (NED)",
      "Chloe Birch / Lauren Smith (GBR)",
      "Meng Yean Lee / Mei Kuan Chow (MAS)",
      "Maiken Fruergaard / Sara Thygesen (DEN)",
      "Hadia Hosny / Doha Hany (EGY)",
      "Kristen Tsai / Rachel Honderich (CAN)",
      "Jongkolphan Kititharakul / Rawinda Prajongjai (THA)",
      "Gronya Somerville / Setyana Mapasa (AUS)",
      "Gabriela Stoeva / Stefani Stoeva (BUL)",
    ];
    const womensDoublesGoldTeams = ["Greysia Polii / Apriyani Rahayu (INA)"];
    const womensDoublesSilverTeams = ["Qing Chen Chen / Yi Fan Jia (CHN)"];
    const womensDoublesBronzeTeams = ["Heeyong Kong / Soyeong Kim (KOR)"];

    const mixedDoublesTeams = [
      "Yi Lyu Wang / Dong Ping Huang (CHN)",
      "Ya Qiong Huang / Si Wei Zheng (CHN)",
      "Arisa Higashino / Yuta Watanabe (JPN)",
      "Chun Man Tang / Ying Suet Tse (HKG)",
      "Lauren Smith / Marcus Ellis (GBR)",
      "Melati Daeva Oktavianti / Praveen Jordan (INA)",
      "Dechapol Puavaranukroh / Sapsiree Taerattanachai (THA)",
      "Seungjae Seo / Yujung Chae (KOR)",
      "Peng Soon Chan / Liu Ying Goh (MAS)",
      "Alexandra Boje / Mathias Christiansen (DEN)",
      "Doha Hany / Adham Hatem Elgamal (EGY)",
      "Thom Gicquel / Delphine Delrue (FRA)",
      "Joshua Hurlburt-Yu / Josephine Wu (CAN)",
      "Isabel Herttrich / Mark Lamsfuss (GER)",
      "Gronya Somerville / Simon Wing Hang Leung (AUS)",
      "Selena Piek / Robin Tabeling (NED)",
    ];
    const mixedDoublesGoldTeams = ["Yi Lyu Wang / Dong Ping Huang (CHN)"];
    const mixedDoublesSilverTeams = ["Ya Qiong Huang / Si Wei Zheng (CHN)"];
    const mixedDoublesBronzeTeams = ["Arisa Higashino / Yuta Watanabe (JPN)"];

    // Men's basketball standings
    const mens_ball_teams = [
      "United States of America",
      "France",
      "Australia",
      "Slovenia",
      "Italy",
      "Spain",
      "Argentina",
      "Germany",
      "Czechia",
      "Nigeria",
      "Japan",
      "Islamic Republic of Iran",
    ];
    const mens_ball_gold_teams = ["United States of America"];
    const mens_ball_silver_teams = ["France"];
    const mens_ball_bronze_teams = ["Australia"];

    // Women's basketball standings
    const womens_ball_teams = [
      "United States of America",
      "Japan",
      "France",
      "Serbia",
      "People's Republic of China",
      "Spain",
      "Belgium",
      "Australia",
      "Canada",
      "Republic of Korea",
      "Nigeria",
      "Puerto Rico",
    ];
    const womens_ball_gold_teams = ["United States of America"];
    const womens_ball_silver_teams = ["Japan"];
    const womens_ball_bronze_teams = ["France"];

    // Men's football standings
    const mens_football_teams = [
      "Brazil",
      "Spain",
      "Mexico",
      "Japan",
      "Republic of Korea",
      "New Zealand",
      "Côte d'Ivoire",
      "Egypt",
      "Germany",
      "Argentina",
      "Romania",
      "Australia",
      "France",
      "Honduras",
      "South Africa",
    ];
    const mens_football_gold_teams = ["Brazil"];
    const mens_football_silver_teams = ["Spain"];
    const mens_football_bronze_teams = ["Mexico"];

    // Women's football standings
    const womens_football_teams = [
      "Canada",
      "Sweden",
      "USA",
      "Australia",
      "Netherlands",
      "Brazil",
      "Great Britain",
      "Japan",
      "Zambia",
      "People's Republic of China",
      "Chile",
      "New Zealand",
    ];
    const womens_football_gold_teams = ["Canada"];
    const womens_football_silver_teams = ["Sweden"];
    const womens_football_bronze_teams = ["USA"];

    setResults({
      mensSingles: simulateSport(
        mensSinglesTeams,
        mensSinglesGoldTeams,
        mensSinglesSilverTeams,
        mensSinglesBronzeTeams
      ),
      mensDoubles: simulateSport(
        mensDoublesTeams,
        mensDoublesGoldTeams,
        mensDoublesSilverTeams,
        mensDoublesBronzeTeams
      ),
      womensSingles: simulateSport(
        womensSinglesTeams,
        womensSinglesGoldTeams,
        womensSinglesSilverTeams,
        womensSinglesBronzeTeams
      ),
      womensDoubles: simulateSport(
        womensDoublesTeams,
        womensDoublesGoldTeams,
        womensDoublesSilverTeams,
        womensDoublesBronzeTeams
      ),
      mixedDoubles: simulateSport(
        mixedDoublesTeams,
        mixedDoublesGoldTeams,
        mixedDoublesSilverTeams,
        mixedDoublesBronzeTeams
      ),
      mensBasketball: simulateSport(
        mens_ball_teams,
        mens_ball_gold_teams,
        mens_ball_silver_teams,
        mens_ball_bronze_teams
      ),
      womensBasketball: simulateSport(
        womens_ball_teams,
        womens_ball_gold_teams,
        womens_ball_silver_teams,
        womens_ball_bronze_teams
      ),
      mensFootball: simulateSport(
        mens_football_teams,
        mens_football_gold_teams,
        mens_football_silver_teams,
        mens_football_bronze_teams
      ),
      womensFootball: simulateSport(
        womens_football_teams,
        womens_football_gold_teams,
        womens_football_silver_teams,
        womens_football_bronze_teams
      ),
    });
  };

  const renderTable = (title: string, data: [string, number][]) => (
    <div className="results-container">
      <h2>{title}</h2>
      <table className="standings-table font-sans">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Country</th>
            {/* <th>Score</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map(([country, score], index) => (
            <tr key={index} className={`standing standing-${index + 1}`}>
              <td>{index + 1}</td>
              <td>{country}</td>
              {/* <td>{score}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container bg-gradient-to-r from-purple-400 to-blue-500" id="output">
      <h1 className="title font-bold text-white font-sans">Olympic Prediction 2024</h1>
      {/* <button className="predict-button" onClick={handlePredictClick}></button> */}
      <button
        onClick={handlePredictClick}
        className="bg-purple-600 text-yellow-500 px-20 py-5 rounded-xl font-sans text-xl font-semibold hover:bg-yellow-500 hover:text-purple-800 transition-colors hover:shadow-lg"
      >
        Predict 2024 Sport Winners
      </button>
      <div className="results">
        {renderTable(
          "Men's Singles Badminton Predicted Standings",
          results.mensSingles
        )}
        {renderTable(
          "Men's Doubles Badminton Predicted Standings",
          results.mensDoubles
        )}
        {renderTable(
          "Women's Singles Badminton Predicted Standings",
          results.womensSingles
        )}
        {renderTable(
          "Women's Doubles Badminton Predicted Standings",
          results.womensDoubles
        )}
        {renderTable(
          "Mixed Doubles Badminton Predicted Standings",
          results.mixedDoubles
        )}
        {renderTable(
          "Men's Basketball Predicted Standings",
          results.mensBasketball
        )}
        {renderTable(
          "Womens's Basketball Predicted Standings",
          results.womensBasketball
        )}
        {renderTable(
          "Men's Football Predicted Standings",
          results.mensFootball
        )}
        {renderTable(
          "Womens's Football Predicted Standings",
          results.womensFootball
        )}
      </div>
    </div>
  );
};

export default Badminton;