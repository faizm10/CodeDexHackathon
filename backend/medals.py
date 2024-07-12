import pandas as pd
import numpy as np
import os

def data_cleaning():
    # Load CSV files into DataFrames
    
    # Athletes
    athletes = pd.read_csv('files/athletes.csv')
    athletes.drop(columns=["birth_date", "birth_place", "birth_country", "residence_place", "residence_country", "height_m/ft", "url"], inplace=True)
    
    # Coaches
    coaches = pd.read_csv('files/coaches.csv')
    coaches.drop(columns=["birth_date", "url", "gender", "event"], inplace=True)
    
    # Events
    events = pd.read_csv('files/events.csv')
    events.drop(columns=["tag", "sport_url"], inplace=True)
    
    # Total Medals
    total_medals = pd.read_csv('files/medals_total.csv')
    
    # Medals
    medals = pd.read_csv('files/medals.csv')
    medals.drop(columns=["medal_date", "athlete_link", "athlete_sex"], inplace=True)
    
    # Technical Officials
    technical_officials = pd.read_csv('files/technical_officials.csv')
    technical_officials.drop(columns=["birth_date", "country", "url"], inplace=True)
    
    # Display first few rows of each DataFrame
    # print("Athletes DataFrame:")
    # print(athletes.head())

    # print("Coaches DataFrame:")
    # print(coaches.head())

    # print("Events DataFrame:")
    # print(events.head())
    
    # print("Medals DataFrame:")
    # print(medals.head())
    
    # print("Officials DataFrame:")
    # print(technical_officials.head())
    
    return athletes, coaches, events, total_medals, medals, technical_officials

def save_countries_with_sports(athletes):
    # Get unique countries and their sports
    countries_sports = athletes[['country', 'country_code', 'discipline']].drop_duplicates()
    
    # Sort by sports
    countries_sports = countries_sports.sort_values(by='discipline')
    
    # Create directory if it doesn't exist
    output_dir = 'files'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Save to a single CSV file
    countries_sports.to_csv(f'{output_dir}/sport_teams.csv', index=False)
    
    # Display the DataFrame
    # print("Countries with Sports DataFrame:")
    # print(countries_sports)
    
    return countries_sports

def simulate_sport(countries_sports, sport, num_simulations=100):
    sport_data = countries_sports[countries_sports['discipline'] == sport]
    
    # Check if there are any countries participating in the sport
    if sport_data.empty:
        return None
    
    country_performance = {country: 0 for country in sport_data['country'].unique()}
    
    for _ in range(num_simulations):
        # Randomize performance
        performance = np.random.rand(len(sport_data))
        
        # Assign performance to countries
        performance_df = pd.DataFrame({
            'country': sport_data['country'].values,
            'performance': performance
        })
        
        # Sort by performance to determine standings
        standings = performance_df.sort_values(by='performance', ascending=False)
        
        # Update country performance
        for i, country in enumerate(standings['country']):
            if i == 0:
                country_performance[country] += 3  # Gold
            elif i == 1:
                country_performance[country] += 2  # Silver
            elif i == 2:
                country_performance[country] += 1  # Bronze
    
    # Determine the top three countries
    sorted_performance = sorted(country_performance.items(), key=lambda x: x[1], reverse=True)
    top_three = sorted_performance[:3]
    
    return top_three

def main():
    # Load and clean data
    athletes, coaches, events, total_medals, medals, technical_officials = data_cleaning()

    # Save unique countries with their sports to a CSV file
    countries_sports = save_countries_with_sports(athletes)

    # Get unique sports
    sports = countries_sports['discipline'].unique()
    
    # keep track of medals
    medal_tally = {'Gold': {}, 'Silver': {}, 'Bronze': {}}
    
    # Run simulation for each sport
    sport_winners = {}
    for sport in sports:
        top_three = simulate_sport(countries_sports, sport)
        if top_three:
            sport_winners[sport] = top_three
            for i, (country, _) in enumerate(top_three):
                if i == 0:
                    medal_tally['Gold'][country] = medal_tally['Gold'].get(country, 0) + 1
                elif i == 1:
                    medal_tally['Silver'][country] = medal_tally['Silver'].get(country, 0) + 1
                elif i == 2:
                    medal_tally['Bronze'][country] = medal_tally['Bronze'].get(country, 0) + 1
    
    # Display the winners for each sport
    print("Sport Winners:")
    for sport, winners in sport_winners.items():
        print(f"{sport}: Gold - {winners[0][0]}, Silver - {winners[1][0]}, Bronze - {winners[2][0]}")
    
    # Announce the most gold, silver, and bronze medals
    most_gold = max(medal_tally['Gold'], key=medal_tally['Gold'].get)
    most_silver = max(medal_tally['Silver'], key=medal_tally['Silver'].get)
    most_bronze = max(medal_tally['Bronze'], key=medal_tally['Bronze'].get)
    
    print("\nOverall Medal Tally:")
    print(f"Most Gold Medals: {most_gold} with {medal_tally['Gold'][most_gold]} gold medals")
    print(f"Most Silver Medals: {most_silver} with {medal_tally['Silver'][most_silver]} silver medals")
    print(f"Most Bronze Medals: {most_bronze} with {medal_tally['Bronze'][most_bronze]} bronze medals")

if __name__ == "__main__":
    main()
