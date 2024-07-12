# Hackathon Project: OlympiPredict

## Team Members
- **Faiz Mustansar**: Lead
- **Fawaz Rizwan**: Developer
- **Talha Naveed**: Developer

## Project Overview
Our hackathon project aims to predict the medal winners of the 2024 Paris Olympics by analyzing data from the 2021 Tokyo Olympics and other relevant datasets. We will leverage machine learning techniques and data analysis to make informed predictions about the performance of various countries in the upcoming games.

## Project Structure
### 1. Data Collection
- **Datasets**: 
  - Tokyo 2021 Olympics medal tally
  - Athlete statistics (age, gender, previous performances)
  - Coach information
  - Country-specific data (GDP, investment in sports)
  - Historical Olympic performance data
- **Sources**: 
  - [Olympic Official Website](https://olympics.com/)
  - [Sports Reference](https://www.sports-reference.com/olympics/summer/2021/)
  - [Kaggle Datasets](https://www.kaggle.com/)

### 2. Data Preparation
- **Cleaning**: Handle missing values, remove duplicates, and correct inaccuracies.
- **Feature Engineering**: Create new features such as medal weight, total athletes, and investment per athlete.

### 3. Data Analysis and Visualization
- **Tools**: Python, Pandas, Matplotlib, Seaborn
- **EDA**: Explore data distributions, correlations, and key trends.

### 4. Model Training
- **Models**: Random Forest Regressor, Gradient Boosting, Neural Networks
- **Training**: Split data into training and testing sets, train models, and validate performance.

### 5. Prediction and Evaluation
- **Metrics**: Mean Squared Error, R² Score
- **Visualization**: Predicted medal counts vs. actual counts, feature importance plots

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/faizm10/CodeDex-Hackathon
   cd CodeDex-Hackathon
   ```
2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## Contribution Guidelines
```bash
git checkout -b {your-name/feature}
git add .
git commit -m "New Feature"
git push --set-upstream origin '{your-name/feature}'
git checkout main
git pull #after PR gets merged into main branch
```
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.