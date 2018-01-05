import json
import csv
import sys
import os

# Load stringified json file
with open(sys.argv[1]) as data_file:    
    x = json.load(data_file)

# create new .csv file with same name as .txt file
f = csv.writer(open(os.path.splitext(sys.argv[1])[0] + ".csv", "w"))

# Write CSV Header
f.writerow(["Date", "Price"])

# Write data
for x in x:
    f.writerow([x["date"],
                x["price"]])
