import pandas as pd

# Sample data for allotments with the specified columns
allotments_data = {
    'SLNo': [1, 2, 3, 4],
    'Rank': [1, 2, 3, 4],
    'Allotted Quota': ['All India', 'State Quota', 'All India', 'State Quota'],
    'College Name': ['Seth GS, MUMBAI', 'PGIMER, DR. RML Hospital', 'KEM Hospital, PUNE', 'AIIMS, New Delhi'],
    'Courses': ['RADIO DIAGNOSIS', 'GENERAL MEDICINE', 'ORTHOPEDICS', 'SURGERY'],
    'Allotted Category': ['GEN', 'OBC', 'SC', 'ST'],
    'Candidate Category': ['GEN', 'OBC', 'SC', 'ST'],
}

# Sample data for colleges with the specified columns
colleges_data = {
    'College Name': ['Seth GS, MUMBAI', 'PGIMER, DR. RML Hospital', 'KEM Hospital, PUNE', 'AIIMS, New Delhi'],
    'Hospital name with place': ['SGSM Mumbai', 'PGRML New Delhi', 'KEM PUNE', 'AIIMS Delhi'],
    'Hospital/Institute Name with Address': ['Seth GS Medical College, Mumbai, India', 'PGIMER, DR. RML Hospital, New Delhi, India', 'KEM Hospital, Pune, India', 'AIIMS, New Delhi, India'],
    'State': ['Maharashtra', 'Delhi', 'Maharashtra', 'Delhi'],
    'University Name': ['Mumbai University', 'Delhi University', 'Pune University', 'Delhi University'],
    'Institute Type': ['Government', 'Government', 'Government', 'Government'],
    'Year of Establishment': [1925, 1954, 1960, 1956],
    'Total Hospital Beds': [1200, 1500, 1300, 2000],
    'Location Map Link': ['http://maplink1', 'http://maplink2', 'http://maplink3', 'http://maplink4'],
    'Nearest Railway Station': ['Mumbai Central', 'New Delhi', 'Pune Station', 'New Delhi'],
    'Distance from Railway Station': ['5 km', '3 km', '7 km', '4 km'],
    'Nearest Airport': ['Mumbai Airport', 'Indira Gandhi International Airport', 'Pune Airport', 'Indira Gandhi International Airport'],
    'Distance from Airport': ['20 km', '15 km', '18 km', '12 km'],
    'Phone number': ['1234567890', '0987654321', '1122334455', '5566778899'],
    'Website': ['http://sgsmumbai.edu', 'http://pgrml.edu', 'http://kem.edu', 'http://aiims.edu']
}

# Sample data for courses with the specified columns
courses_data = {
    'College Name': ['Seth GS, MUMBAI', 'PGIMER, DR. RML Hospital', 'KEM Hospital, PUNE', 'AIIMS, New Delhi'],
    'Course Code': ['RD101', 'GM102', 'OR103', 'SU104'],
    'Course Name': ['RADIO DIAGNOSIS', 'GENERAL MEDICINE', 'ORTHOPEDICS', 'SURGERY'],
    'Duration': ['3 years', '3 years', '3 years', '3 years'],
    'Course Category': ['Medical', 'Medical', 'Medical', 'Medical'],
    'Course Type': ['Full-time', 'Full-time', 'Full-time', 'Full-time'],
    'Degree Type': ['MD', 'MD', 'MD', 'MD'],
    'Description': ['Radiology course', 'General Medicine course', 'Orthopedics course', 'Surgery course']
}

# Sample data for fees with the specified columns
fees_data = {
    'College Name': ['Seth GS, MUMBAI', 'PGIMER, DR. RML Hospital', 'KEM Hospital, PUNE', 'AIIMS, New Delhi'],
    'Course Name': ['RADIO DIAGNOSIS', 'GENERAL MEDICINE', 'ORTHOPEDICS', 'SURGERY'],
        'Fee Amount': ['50000', '60000', '55000', '65000']
}

# Creating DataFrames
allotments_df = pd.DataFrame(allotments_data)
colleges_df = pd.DataFrame(colleges_data)
courses_df = pd.DataFrame(courses_data)
fees_df = pd.DataFrame(fees_data)

# Saving to Excel files
allotments_df.to_excel('allotments_sample.xlsx', index=False, sheet_name='Sheet1')
colleges_df.to_excel('colleges_sample.xlsx', index=False, sheet_name='Sheet1')
courses_df.to_excel('courses_sample.xlsx', index=False, sheet_name='Sheet1')
fees_df.to_excel('fees_sample.xlsx', index=False, sheet_name='Sheet6')

print("Files generated successfully")

