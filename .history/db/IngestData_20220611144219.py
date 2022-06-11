import psycopg2, sys

# python3 IngestData.py host port database user password
db_host = "ec2-34-225-159-178.compute-1.amazonaws.com"
db_port = "5432"
db_name = "dfhf52fpvishqb"
db_user = "tcvgibcprousih"
db_password = "12666b9e5b00bc15c03c8564782389e7da6aa35dbf7ea583bf39bd1df251f616"

sql_con = psycopg2.connect(host = db_host, port = db_port, database = db_name, user = db_user, password = db_password)
cursor = sql_con.cursor()

with open('zehmv02_22_teil1/medikament.txt', 'r', encoding='utf-8') as f:
    contents = f.readlines()

#Name, Kassenzeichen, Menge, Mengenart, Box, Abgabezahl
for i, row in enumerate(contents):
    contents[i]= row[18:118].strip()+";"+row[121:124].strip()+";"+row[124:129].strip()+";"+row[129:131].strip()+";"+row[118:121].strip()+";"+row[164:167].strip()


for row in contents:
    row_list = row.split(";")
    cursor.execute("INSERT INTO Medikamente(Name, Kassenzeichen, Menge, Mengenart, Box, Abgabezahl) values (%s, %s, %s, %s, %s, %s)", (row_list[0], row_list[1], row_list[2], row_list[3], row_list[4], row_list[5]))

sql_con.commit()

cursor.close()
sql_con.close()

# postgres://tcvgibcprousih:12666b9e5b00bc15c03c8564782389e7da6aa35dbf7ea583bf39bd1df251f616@ec2-34-225-159-178.compute-1.amazonaws.com:5432/dfhf52fpvishqb