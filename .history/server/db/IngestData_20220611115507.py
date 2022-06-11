import psycopg2, sys

db_host = sys.argv[1]
db_port = sys.argv[2]
db_name = sys.argv[3]
db_user = sys.argv[4]
db_password = sys.argv[5]

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