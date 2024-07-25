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


def readPlayers(sportName, gender):
    # Men's singles badminton standings

    # Load the provided CSV file
    file_path = 'files/athletes.csv'

    # Read the CSV file into a DataFrame
    df = pd.read_csv(file_path)

    # Filter the DataFrame for male athletes in the badminton discipline
    badminton_mens_singles_df = df[(df['gender'] == gender) & (df['discipline'] == sportName)]

    # Create the list in the required format
    mens_singles_teams = [f"{row['name']} ({row['country_code']})" for _, row in badminton_mens_singles_df.iterrows()]

    return mens_singles_teams


def teamMedals(medalType, sport, event):
    # Load the provided CSV file for medals
    medals_file_path = 'files/medals.csv'

    # Read the CSV file into a DataFrame
    medals_df = pd.read_csv(medals_file_path)

    # Filter the DataFrame for the specified medal type, sport, and event
    filtered_df = medals_df[(medals_df['medal_type'] == medalType) & 
                            (medals_df['discipline'] == sport) & 
                            (medals_df['event'].str.contains(event))]

    # Create the list in the required format
    team_medals_list = [f"{row['athlete_name']} ({row['country_code']})" for _, row in filtered_df.iterrows()]

    # print(f"{medalType.upper()} TEAMS FOR {sport.upper()} IN {event.upper()}")
    # print(team_medals_list)

    return team_medals_list


def readDoubleMedal(medal, sport, event):
    # Load the provided CSV file for medals
    medals_file_path = 'files/medals.csv'  # Make sure the file path is correct

    # Read the CSV file into a DataFrame
    medals_df = pd.read_csv(medals_file_path)

    # Filter the DataFrame for gold medal winners in men's doubles badminton
    mens_doubles_winners_df = medals_df[(medals_df['medal_type'] == medal) & 
                                        (medals_df['discipline'] == sport) & 
                                        (medals_df['event'].str.contains(event, na=False))]

    # Create the list in the required format
    mens_doubles_teams = [f"{row['athlete_name']} ({row['country_code']})" for _, row in mens_doubles_winners_df.iterrows()]

    # Print the list to verify

    return mens_doubles_teams

def badminton_simulate():

    #Men's single badminton teams information
    mens_singles_teams = readPlayers("Badminton", "Male")
    mens_singles_gold_teams = teamMedals("Gold Medal", "Badminton", "Men's Singles")
    mens_singles_silver_teams = teamMedals("Silver Medal", "Badminton", "Men's Singles")
    mens_singles_bronze_teams = teamMedals("Bronze Medal", "Badminton", "Men's Singles")

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
    mens_doubles_gold_teams = readDoubleMedal("Gold Medal", "Badminton", "Men's Doubles")
    print(mens_doubles_gold_teams)

    mens_doubles_silver_teams = readDoubleMedal("Silver Medal", "Badminton", "Men's Doubles")
    mens_doubles_bronze_teams = readDoubleMedal("Bronze Medal", "Badminton", "Men's Doubles")

    
    # Women's singles badminton standings
    womens_singles_teams = readPlayers("Badminton", "Female")
    womens_singles_gold_teams = teamMedals("Gold Medal", "Badminton", "Women's Singles")
    womens_singles_silver_teams = teamMedals("Silver Medal", "Badminton", "Women's Singles")
    womens_singles_bronze_teams = teamMedals("Bronze Medal", "Badminton", "Women's Singles")

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
    # print("Men's Singles Badminton Predicted Standings:")
    # for i, (country, score) in enumerate(mens_singles_results):
    #     print(f"{i+1}. {country} with score {score}")

    # print("\nMen's Doubles Badminton Predicted Standings:")
    # for i, (country, score) in enumerate(mens_doubles_results):
    #     print(f"{i+1}. {country} with score {score}")

    # print("Women's Singles Badminton Predicted Standings:")
    # for i, (country, score) in enumerate(womens_singles_results):
    #     print(f"{i+1}. {country} with score {score}")

    # print("\nWomen's Doubles Badminton Predicted Standings:")
    # for i, (country, score) in enumerate(womens_doubles_results):
    #     print(f"{i+1}. {country} with score {score}")
        
    # print("Mixed Doubles Badminton Predicted Standings:")
    # for i, (country, score) in enumerate(mixed_doubles_results):
    #     print(f"{i+1}. {country} with score {score}")
    
    results = {
        "mens_singles_results": mens_singles_results,
        "mens_doubles_results": mens_doubles_results,
        "womens_singles_results": womens_singles_results,
        "womens_doubles_results": womens_doubles_results,
        "mixed_doubles_results": mixed_doubles_results
    }
        
    return results


# if __name__ == "__main__":
#     badminton_simulate() 
