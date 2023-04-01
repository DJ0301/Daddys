import csv
import random
from faker import Faker

fake = Faker()

# define the options for the Courses Offered and Scholarships Offered columns
courses = ['Computer Science', 'Engineering', 'Business', 'Psychology', 'Biology', 'Art History']
scholarships = ['Yes', 'No']
university_suffixes = ['University of ', 'College of ', 'Institute of ', 'School of ', 'Polytechnic ']
ranking = []
for i in range(1, 501):
    ranking.append(i)

# define the header row for the CSV file
header = ['University Name', 'Tuition Cost', 'State', 'Courses Offered', 'Scholarships Offered', 'Percentage of Students on Scholarship', 'Acceptance Rate', 'Ranking of University', 'Cost of Living']

# set up the file and writer
filename = 'random_data.csv'
with open(filename, mode='w', newline='') as csvfile:
    writer = csv.writer(csvfile)

    # write the header row
    writer.writerow(header)

    # write the data rows
    for i in range(500):
        university_name = random.choice(university_suffixes)+fake.company()
        tuition_cost = random.randint(10, 50)*1000
        state = fake.state()
        courses_offered = ', '.join(random.sample(courses, random.randint(1, len(courses))))
        scholarships_offered = random.choice(scholarships)
        if(scholarships_offered=='Yes'):
            percentage_on_scholarship = round(random.uniform(0, 100), 2)
        else:
            percentage_on_scholarship = 0

        acceptance_rate = round(random.uniform(1, 60), 2)
        university_ranking = random.choice(range(1, 500))
        cost_of_living = random.randint(2, 5)*1000
        
        # write the data row
        writer.writerow([university_name, tuition_cost, state, courses_offered, scholarships_offered, percentage_on_scholarship, acceptance_rate, university_ranking, cost_of_living])

print(f'Successfully generated {filename} with random data')
