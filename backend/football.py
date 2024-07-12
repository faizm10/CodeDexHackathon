import pandas as pd
import numpy as np

def simulate_football(sport_data, gold_teams, silver_teams, bronze_teams, num_simulations=10):
    country_performance = {country: 0 for country in sport_data}
    
    for _ in range(num_simulations):
        # Assign performance weights based on top 3 teams
        performance = np.random.rand(len(sport_data))
        for i, country in enumerate(sport_data):
            if country in gold_teams:
                performance[i] *= 1.7  # Boost performance for gold teams
            elif country in silver_teams:
                performance[i] *= 1.5  # Boost performance for silver teams
            elif country in bronze_teams:
                performance[i] *= 1.2  # Boost performance for bronze teams
            elif i == len(sport_data) - 1:  # Worst team
                if np.random.rand() < 0.05: #chance of moving up to top 5%
                    performance[i] *= 1.5  # 50% chance to move up significantly
        
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
    # Men's football standings
    mens_teams = [
        'Brazil', 'Spain', 'Mexico', 'Japan', 'Republic of Korea', 'New Zealand',
        'Côte d\'Ivoire', 'Egypt', 'Germany', 'Argentina', 'Romania', 'Australia',
        'France', 'Honduras', 'South Africa'
    ]
    mens_gold_teams = ['Brazil']
    mens_silver_teams = ['Spain']
    mens_bronze_teams = ['Mexico']

    # Women's football standings
    womens_teams = [
        'Canada', 'Sweden', 'USA', 'Australia', 'Netherlands', 'Brazil',
        'Great Britain', 'Japan', 'Zambia', 'People\'s Republic of China',
        'Chile', 'New Zealand'
    ]
    womens_gold_teams = ['Canada']
    womens_silver_teams = ['Sweden']
    womens_bronze_teams = ['USA']

    # Run simulation for men's football
    mens_results = simulate_football(mens_teams, mens_gold_teams, mens_silver_teams, mens_bronze_teams)

    # Run simulation for women's football
    womens_results = simulate_football(womens_teams, womens_gold_teams, womens_silver_teams, womens_bronze_teams)

    # Display the results
    print("Men's Football Predicted Standings:")
    for i, (country, score) in enumerate(mens_results):
        print(f"{i+1}. {country} with score {score}")

    print("\nWomen's Football Predicted Standings:")
    for i, (country, score) in enumerate(womens_results):
        print(f"{i+1}. {country} with score {score}")

if __name__ == "__main__":
    main()
