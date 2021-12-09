import flask
from flask_cors import CORS
import json
from flask import jsonify, request
import psycopg2 
import os

app = flask.Flask(__name__)
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
app.config["DEBUG"] = True


@app.route('/read_tours', methods=['GET'])
def read_tours():
    meta = read_tours()
    response = jsonify(meta)
    return response


host="museojade2021.postgres.database.azure.com"
dbname="museojadedb"
user="userAdmin@museojade2021"
password="MuseoJade2021"
sslmode="require"

conn_string= "host={0} user={1} dbname={2} password={3} sslmode={4}".format(host,user,dbname,password,sslmode)
pg_conn = psycopg2.connect(conn_string)
pg_cur = pg_conn.cursor()


def read_tours():
    sql = """SELECT id, titulo, descripcion, urltour, imagen 
 FROM public.tourvirtual;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data


if __name__ == '__main__':
    app.run(host="192.168.88.15", port="5000")#Cambiar puerto