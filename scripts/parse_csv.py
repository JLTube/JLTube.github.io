import csv

def parse_csv(file_path):
    data = {}
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            section = row["section"]
            if section not in data:
                data[section] = []
            data[section].append(row)
    return data

# Example usage
csv_data = parse_csv('../data/resume_data.csv')
print(csv_data)
