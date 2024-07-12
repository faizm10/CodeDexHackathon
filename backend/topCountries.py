import pandas as pd
import numpy as np
import os

def main():
    historicalRecords = pd.read_csv('files/historial_records.csv')
    historicalRecords.drop(columns=["Age", "Height", "Weight", "Games", "Season", "City"], inplace=True)
    historicalRecords_medals = historicalRecords.dropna(subset=['Medal'])

    medal_counts = historicalRecords_medals.groupby(['Sport', 'NOC']).size().reset_index(name='Medal Count')
    medal_counts_sorted = medal_counts.sort_values(by=['Sport', 'Medal Count'], ascending=[True, False])
    
    # print("\nHEAD MEDAL COUNTS SORTED\n")
    # print(medal_counts_sorted.head())
    top_countries = medal_counts_sorted.groupby('Sport').head(3)
    print(top_countries)
    


if __name__ == "__main__":
    main()