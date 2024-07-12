library(ggplot2)
library(dplyr)
library(tidyr)

# Read the CSV file
medals_data <- read.csv("files/medals_total.csv")

# Inspect the data
head(medals_data)
str(medals_data)

# Reshape the data to have a Medal column
medals_long <- medals_data %>%
  select(Country.Code, Gold.Medal, Silver.Medal, Bronze.Medal) %>%
  gather(key = "Medal", value = "Count", Gold.Medal:Bronze.Medal) %>%
  mutate(Medal = recode(Medal, 
                        "Gold.Medal" = "Gold",
                        "Silver.Medal" = "Silver",
                        "Bronze.Medal" = "Bronze"))

# Create the plot
ggplot(medals_long, aes(x = reorder(Country.Code, -Count), y = Count, fill = Medal)) +
  geom_col() +
  coord_flip() +
  scale_fill_manual(values = c("Gold" = "gold3", "Silver" = "gray64", "Bronze" = "sienna")) +
  labs(x = "Nations", y = "Count", 
       title = "All Medals Grouped By Country", 
       subtitle = "") +
  theme_minimal() +
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1, size = 10),  # Adjust x-axis text
    axis.text.y = element_text(size = 4),  # Adjust y-axis text
    axis.title.x = element_text(size = 12, face = "bold"),  # Adjust x-axis title
    axis.title.y = element_text(size = 12, face = "bold"),  # Adjust y-axis title
    plot.title = element_text(size = 14, face = "bold", hjust = 0.5),  # Adjust title
    plot.subtitle = element_text(size = 12, hjust = 0.5),  # Adjust subtitle
    legend.title = element_text(size = 12),  # Adjust legend title
    legend.text = element_text(size = 10)  # Adjust legend text
  )
