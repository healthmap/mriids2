import csv
import json

ebola_outbreak_countries = ["Guinea", "Liberia", "Sierra Leone"]
ebola_country_data = {}


def get_number_value(number_string):
    try:
        return int(number_string)
    except ValueError:
        return float(number_string)


# 1. Parse the data from the original csv file
with open("healthmap_projections_2018-08-10.csv", newline="") as csv_file:
    reader = csv.DictReader(csv_file)
    for country in ebola_outbreak_countries:
        ebola_country_data[country] = {}
        for row in reader:
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


# 2. Save data to a json file
with open("../../../public/json/ebolaData/country_ebola_data.json", "w") as f:
    json.dump(ebola_country_data, f)
