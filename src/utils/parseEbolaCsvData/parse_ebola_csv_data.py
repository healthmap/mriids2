import csv
import json

ebola_outbreak_countries = ["Guinea", "Liberia", "Sierra Leone"]
csv_data = []
ebola_country_data = {}


def get_number_value(number_string):
    try:
        return int(number_string)
    except ValueError:
        return float(number_string)


# 1. Open csv file and add the data to the csv_data list.
with open("healthmap_projections_2018-08-10.csv", newline="") as csv_file:
    reader = csv.DictReader(csv_file)
    for row in reader:
        csv_data.append(row)


# 2. Parse the data from the csv_data list and add it to the ebola_country_data dictionary.
for country in ebola_outbreak_countries:
    ebola_country_data[country] = {}
    for row in csv_data:
        week_data = {
            "value": row[country],
            "projections": {
                "oneWeek": get_number_value(row["{}.{}".format("y1", country)]),
                "twoWeek": get_number_value(row["{}.{}".format("y2", country)]),
                "threeWeek": get_number_value(row["{}.{}".format("y3", country)]),
                "fourWeek": get_number_value(row["{}.{}".format("y4", country)]),
            },
        }
        ebola_country_data[country][row["projection_from"]] = week_data

# 3. Save data from ebola_country_data dictionary to a json file.
with open("../../../public/json/ebolaData/country_ebola_data.json", "w") as f:
    json.dump(ebola_country_data, f)
