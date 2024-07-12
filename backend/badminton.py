import pandas as pd
import numpy as np

def simulate_sport(sport_data, gold_teams, silver_teams, bronze_teams, num_simulations=10):
    country_performance = {country: 0 for country in sport_data}
    
    for _ in range(num_simulations):
        # Assign performance weights based on top 3 teams
        performance = np.random.rand(len(sport_data))
        for i, country in enumerate(sport_data):
            if country in gold_teams:
                performance[i] *= 2.0  # Increased boost performance for gold teams
            elif country in silver_teams:
                performance[i] *= 1.8  # Increased boost performance for silver teams
            elif country in bronze_teams:
                performance[i] *= 1.5  # Increased boost performance for bronze teams
            elif i == len(sport_data) - 1:  # Worst team
                if np.random.rand() < 0.05:  # 5% chance to move up significantly
                    performance[i] *= 1.5
        
        # Middle teams can rise, drop, or stay the same
        for i in range(3, len(sport_data) - 3):
            change = np.random.choice([-1, 0, 1])
            performance[i] *= (1 + 0.1 * change)
        
        # Assign performance to countries
        performance_df = pd.DataFrame({
            'country': sport_data,
            'performance': performance
        })
        
        # Sort by performance to determine standings
        standings = performance_df.sort_values(by='performance', ascending=False)
        
        # Update country performance
        for i, country in enumerate(standings['country']):
            country_performance[country] += (len(sport_data) - i)  # Higher score for better performance
    
    # Determine the final standings
    final_standings = sorted(country_performance.items(), key=lambda x: x[1], reverse=True)
    
    return final_standings

def main():
    # Men's singles badminton standings
    mens_singles_teams = [
        'Viktor Axelsen (DEN)', 'Long Chen (CHN)', 'Anthony Sinisuka Ginting (INA)', 
        'Kevin Cordon (GUA)', 'Anders Antonsen (DEN)', 'Tien Chen Chou (TPE)', 
        'Kwanghee Heo (KOR)', 'Yuqi Shi (CHN)', 'Mark Caljouw (NED)', 
        'Jonatan Christie (INA)', 'Zii Jia Lee (MAS)', 'Toby Penty (GBR)', 
        'Kanta Tsuneyama (JPN)', 'Tzu-Wei Wang (TPE)', 'Matthew Abela (MLT)', 
        'Pablo Abian (ESP)', 'Sai Praneeth Bhamidipati (IND)', 'Felix Burestedt (SWE)', 
        'Ygor Coelho (BRA)', 'Ade Resky Dwicahyo (AZE)', 'Niluka Karunaratne (SRI)', 
        'Kalle Koljonen (FIN)', 'Gergely Krausz (HUN)', 'Timothy Lam (USA)', 
        'Brice Leverdez (FRA)', 'Kean Yew Loh (SGP)', 'Aram Mahmoud (XXB)', 
        'Kento Momota (JPN)', 'Lino Munoz (MEX)', 'Raul Must (EST)', 
        'Ka Long Angus Ng (HKG)', 'Nhat Nguyen (IRL)', 'Tien Minh Nguyen (VIE)', 
        'Georges Julien Paul (MRI)', 'Artem Pochtarov (UKR)', 'Kai Schaefer (GER)', 
        'Sergey Sirant (ROC)', 'Kantaphon Wangcharoen (THA)', 'Luka Wraber (AUT)', 
        'Brian Yang (CAN)', 'Misha Zilberman (ISR)'
    ]
    mens_singles_gold_teams = ['Viktor Axelsen (DEN)']
    mens_singles_silver_teams = ['Long Chen (CHN)']
    mens_singles_bronze_teams = ['Anthony Sinisuka Ginting (INA)']

    # Men's doubles badminton standings
    mens_doubles_teams = [
        'Yang Lee / Chi-Lin Wang (TPE)', 'Yu Chen Liu / Jun Hui Li (CHN)', 
        'Wooi Yik Soh / Aaron Chia (MAS)', 'Hendra Setiawan / Mohammad Ahsan (INA)', 
        'Kim Astrup / Anders Skaarup Rasmussen (DEN)', 'Hiroyuki Endo / Yuta Watanabe (JPN)', 
        'Kevin Sanjaya Sukamuljo / Marcus Fernaldi Gideon (INA)', 
        'Keigo Sonoda / Takeshi Kamura (JPN)', 'Ryan Chew / Phillip Chew (USA)', 
        'Seungjae Seo / Solgyu Choi (KOR)', 'Jason Ho-Shue / Nyl Yakura (CAN)', 
        'Ivan Sozonov / Vladimir Ivanov (ROC)', 'Marvin Seidel / Mark Lamsfuss (GER)', 
        'Sean Vendy / Ben Lane (GBR)', 'Anuoluwapo Juwon Opeyori / Godwin Olofua (NGR)', 
        'Satwiksairaj Rankireddy / Chirag Shetty (IND)'
    ]
    mens_doubles_gold_teams = ['Yang Lee / Chi-Lin Wang (TPE)']
    mens_doubles_silver_teams = ['Yu Chen Liu / Jun Hui Li (CHN)']
    mens_doubles_bronze_teams = ['Wooi Yik Soh / Aaron Chia (MAS)']

    
    # Women's singles badminton standings
    womens_singles_teams = [
        'Yu Fei Chen (CHN)', 'Tzu Ying Tai (TPE)', 'Pusarla Venkata Sindhu (IND)', 
        'Bingjiao He (CHN)', 'Se-Young An (KOR)', 'Ratchanok Intanon (THA)', 
        'Nozomi Okuhara (JPN)', 'Akane Yamaguchi (JPN)', 'Mia Blichfeldt (DEN)', 
        'Gaeun Kim (KOR)', 'Michelle Li (CAN)', 'Busanan Ongbamrungphan (THA)', 
        'Gregoria Mariska Tunjung (INA)', 'Fathimath Nabaaha Abdul Razzaq (MDV)', 
        'Dorcas Ajoke Adesokan (NGR)', 'Soraya Aghaeihajiagha (IRI)', 
        'Clara Azurmendi Moreno (ESP)', 'Soniia Cheah (MAS)', 'Hsuan-Yu Wendy Chen (AUS)', 
        'Ngan Yi Cheung (HKG)', 'Haramara Gaitan (MEX)', 'Kirsty Gilmour (GBR)', 
        'Doha Hany (EGY)', 'Sabrina Jaquet (SUI)', 'Evgeniya Kosetskaya (ROC)', 
        'Kristin Kuuba (EST)', 'Yvonne Li (GER)', 'Daniela Macias (PER)', 
        'Thuy Linh Nguyen (VIE)', 'Ksenia Polikarpova (ISR)', 'Xuefei Qi (FRA)', 
        'Martina Repiska (SVK)', 'Mahoor Shahzad (PAK)', 'Fabiana Da Silva (BRA)', 
        'Nikte Alejandra Sotomayor (GUA)', 'Lianne Tan (BEL)', 'Thuzar Thet Htar (MYA)', 
        'Maria Ulitina (UKR)', 'Jia Min Yeo (SGP)', 'Neslihan Yigit (TUR)', 
        'Linda Zetchiri (BUL)', 'Beiwen Zhang (USA)', 'Laura Sarosi (HUN)'
    ]
    womens_singles_gold_teams = ['Yu Fei Chen (CHN)']
    womens_singles_silver_teams = ['Tzu Ying Tai (TPE)']
    womens_singles_bronze_teams = ['Pusarla Venkata Sindhu (IND)']

    # Women's doubles badminton standings
    womens_doubles_teams = [
        'Greysia Polii / Apriyani Rahayu (INA)', 'Qing Chen Chen / Yi Fan Jia (CHN)', 
        'Heeyong Kong / Soyeong Kim (KOR)', 'Seung Chan Shin / So Hee Lee (KOR)', 
        'Yin Hui Li / Yue Du (CHN)', 'Yuki Fukushima / Sayaka Hirota (JPN)', 
        'Wakana Nagahara / Mayu Matsumoto (JPN)', 'Cheryl Seinen / Selena Piek (NED)', 
        'Chloe Birch / Lauren Smith (GBR)', 'Meng Yean Lee / Mei Kuan Chow (MAS)', 
        'Maiken Fruergaard / Sara Thygesen (DEN)', 'Hadia Hosny / Doha Hany (EGY)', 
        'Kristen Tsai / Rachel Honderich (CAN)', 'Jongkolphan Kititharakul / Rawinda Prajongjai (THA)', 
        'Gronya Somerville / Setyana Mapasa (AUS)', 'Gabriela Stoeva / Stefani Stoeva (BUL)'
    ]
    
    womens_doubles_gold_teams = ['Greysia Polii / Apriyani Rahayu (INA)']
    womens_doubles_silver_teams = ['Qing Chen Chen / Yi Fan Jia (CHN)']
    womens_doubles_bronze_teams = ['Heeyong Kong / Soyeong Kim (KOR)']
    
    
    mixed_doubles_teams = [
        'Yi Lyu Wang / Dong Ping Huang (CHN)', 'Ya Qiong Huang / Si Wei Zheng (CHN)', 
        'Arisa Higashino / Yuta Watanabe (JPN)', 'Chun Man Tang / Ying Suet Tse (HKG)', 
        'Lauren Smith / Marcus Ellis (GBR)', 'Melati Daeva Oktavianti / Praveen Jordan (INA)', 
        'Dechapol Puavaranukroh / Sapsiree Taerattanachai (THA)', 'Seungjae Seo / Yujung Chae (KOR)', 
        'Peng Soon Chan / Liu Ying Goh (MAS)', 'Alexandra Boje / Mathias Christiansen (DEN)', 
        'Doha Hany / Adham Hatem Elgamal (EGY)', 'Thom Gicquel / Delphine Delrue (FRA)', 
        'Joshua Hurlburt-Yu / Josephine Wu (CAN)', 'Isabel Herttrich / Mark Lamsfuss (GER)', 
        'Gronya Somerville / Simon Wing Hang Leung (AUS)', 'Selena Piek / Robin Tabeling (NED)'
    ]
   
    mixed_doubles_gold_teams = ['Yi Lyu Wang / Dong Ping Huang (CHN)']
    mixed_doubles_silver_teams = ['Ya Qiong Huang / Si Wei Zheng (CHN)']
    mixed_doubles_bronze_teams = ['Arisa Higashino / Yuta Watanabe (JPN)']
    
    # Run simulation for men's singles badminton
    mens_singles_results = simulate_sport(mens_singles_teams, mens_singles_gold_teams, mens_singles_silver_teams, mens_singles_bronze_teams)

    # Run simulation for men's doubles badminton
    mens_doubles_results = simulate_sport(mens_doubles_teams, mens_doubles_gold_teams, mens_doubles_silver_teams, mens_doubles_bronze_teams)
    
    # Run simulation for men's singles badminton
    womens_singles_results = simulate_sport(womens_singles_teams, womens_singles_gold_teams, womens_singles_silver_teams, womens_singles_bronze_teams)

    # Run simulation for men's doubles badminton
    womens_doubles_results = simulate_sport(womens_doubles_teams, womens_doubles_gold_teams, womens_doubles_silver_teams, womens_doubles_bronze_teams)
 
    # Run simulation for mixed doubles badminton
    mixed_doubles_results = simulate_sport(mixed_doubles_teams, mixed_doubles_gold_teams, mixed_doubles_silver_teams, mixed_doubles_bronze_teams)
    # Display the results
    print("Men's Singles Badminton Predicted Standings:")
    for i, (country, score) in enumerate(mens_singles_results):
        print(f"{i+1}. {country} with score {score}")

    print("\nMen's Doubles Badminton Predicted Standings:")
    for i, (country, score) in enumerate(mens_doubles_results):
        print(f"{i+1}. {country} with score {score}")

    print("Women's Singles Badminton Predicted Standings:")
    for i, (country, score) in enumerate(womens_singles_results):
        print(f"{i+1}. {country} with score {score}")

    print("\nWomen's Doubles Badminton Predicted Standings:")
    for i, (country, score) in enumerate(womens_doubles_results):
        print(f"{i+1}. {country} with score {score}")
        
    print("Mixed Doubles Badminton Predicted Standings:")
    for i, (country, score) in enumerate(mixed_doubles_results):
        print(f"{i+1}. {country} with score {score}")


if __name__ == "__main__":
    main()
