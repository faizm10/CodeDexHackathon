library(ggplot2)
library(tidyr)

# Create the data frame
olympic_medals <- data.frame(
  Year = c("1900 Paris", "1904 St. Louis", "1908 London", "1912 Stockholm", "1920 Antwerp",
           "1924 Paris", "1928 Amsterdam", "1932 Los Angeles", "1936 Berlin", "1948 London",
           "1952 Helsinki", "1956 Melbourne", "1960 Rome", "1964 Tokyo", "1968 Mexico City",
           "1972 Munich", "1976 Montreal", "1980 Moscow", "1984 Los Angeles", "1988 Seoul",
           "1992 Barcelona", "1996 Atlanta", "2000 Sydney", "2004 Athens", "2008 Beijing",
           "2012 London", "2016 Rio de Janeiro", "2020 Tokyo"),
  Gold = c(1, 1, 3, 3, 3, 0, 4, 2, 1, 1, 1, 2, 0, 1, 1, 0, 0, NA, 10, 3, 7, 3, 3, 3, 3, 2, 4, 7),
  Silver = c(0, 4, 3, 2, 3, 3, 4, 5, 3, 2, 1, 1, 1, 2, 3, 2, 5, NA, 18, 2, 4, 11, 3, 6, 9, 6, 3, 7),
  Bronze = c(1, 1, 10, 3, 3, 1, 7, 8, 5, 3, 2, 3, 0, 1, 1, 3, 6, NA, 16, 5, 7, 8, 8, 3, 8, 10, 15, 10)
)

# Remove the row where Canada did not participate (1980 Moscow)
olympic_medals <- olympic_medals[!is.na(olympic_medals$Gold), ]

# Reshape the data for plotting
olympic_medals_long <- olympic_medals %>%
  gather(key = "Medal", value = "Count", -Year)

# Generate the line graph
ggplot(olympic_medals_long, aes(x = Year, y = Count, color = Medal, group = Medal)) +
  geom_line(linewidth = 1.2) +
  geom_point(size = 3) +
  scale_color_manual(values = c("Gold" = "gold", "Silver" = "gray", "Bronze" = "sienna")) +
  labs(title = "Canadian Olympic Medals Over Time",
       x = "Olympic Year",
       y = "Number of Medals",
       color = "Medal Type") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))
