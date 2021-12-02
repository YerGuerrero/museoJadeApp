import flask
from flask_cors import CORS
import json
from flask import jsonify, request
import psycopg2 
import os

app = flask.Flask(__name__)
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
app.config["DEBUG"] = True

@app.route('/read_news', methods=['GET'])
def read_news():
    meta = read_news()
    response = jsonify(meta)
    return response

@app.route('/post_createNews', methods=['POST'])
def post_createNews():
    insert_news(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteNews', methods=['POST'])
def post_deleteNews():
    delete_news(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateNews', methods=['POST'])
def post_updateNews():
    update_news(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/read_events', methods=['GET'])
def read_events():
    meta = read_events()
    response = jsonify(meta)
    return response

@app.route('/post_createEvents', methods=['POST'])
def post_createEvents():  
    insert_events(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteEvents', methods=['POST'])
def post_deleteEvents():
    delete_events(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateEvents', methods=['POST'])
def post_updateEvents():
    update_events(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/read_tours', methods=['GET'])
def read_tours():
    meta = read_tours()
    response = jsonify(meta)
    return response

@app.route('/post_createTours', methods=['POST'])
def post_createTours():
    insert_tours(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteTours', methods=['POST'])
def post_deleteTours():
    delete_tours(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateTours', methods=['POST'])
def post_updateTours():
    update_tours(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/read_exhibitions', methods=['GET'])
def read_exhibitions():
    meta = read_exhibitions()
    response = jsonify(meta)
    return response

@app.route('/post_createExhibitions', methods=['POST'])
def post_createExhibitions():
    insert_exhibitions(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteExhibitions', methods=['POST'])
def post_deleteExhibitions():
    delete_exhibitions(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateExhibitions', methods=['POST'])
def post_updateExhibitions():
    update_exhibitions(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/read_artwork', methods=['GET'])
def read_artwork():
    meta = read_artwork()
    response = jsonify(meta)
    return response

@app.route('/post_createArtwork', methods=['POST'])
def post_createArtwork():
    insertArtwork(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_deleteArtwork', methods=['POST'])
def post_deleteArtwork():
    deleteArtwork(json.loads(request.data))
    return jsonify({"step": "1"})

@app.route('/post_updateArtwork', methods=['POST'])
def post_updateArtwork():
    updateArtwork(json.loads(request.data))
    return jsonify({"step": "1"})


dbconn = {'database': 'museojadedb',
          'user': 'admin',
          'port': '5432',
          'host':'localhost',
          'password':'museoJadeAdmin'}

pg_conn = psycopg2.connect(**dbconn)
pg_cur = pg_conn.cursor()

def read_news():
    sql = """SELECT id, titulo, imagen, descripcion
	FROM public.noticias;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data

def insert_news(data):
    sql = """INSERT INTO public.noticias (titulo, imagen, descripcion)
            SELECT titulo, imagen, descripcion
            FROM json_to_recordset(%s) x (titulo varchar(100),
                                          imagen varchar(500), 
                                          descripcion varchar(10000)
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def delete_news(data):
    sql = """DELETE FROM public.noticias 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def update_news(data):
    sql = """UPDATE public.noticias 
            SET titulo = subquery.titulo,
                imagen = subquery.imagen,
                descripcion = subquery.descripcion
            FROM (SELECT id, titulo, imagen, descripcion
                    FROM json_to_recordset(%s) x (  id int,
                                                    titulo varchar(100),
                                                    imagen varchar(500), 
                                                    descripcion varchar(10000)
            )) AS subquery
            WHERE noticias.id = subquery.id"""
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()
   
def read_events():
    sql = """SELECT id, titulo, imagen, fecha, hora, descripcion 
 FROM public.eventos;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data

def insert_events(data):
    sql = """INSERT INTO public.eventos (titulo, imagen, fecha, hora, descripcion)
            SELECT titulo, imagen, fecha, hora, descripcion
            FROM json_to_recordset(%s) x (titulo varchar(200),
                                          imagen varchar(500), 
                                          fecha varchar(10),
                                          hora varchar(10),
                                          descripcion varchar(10000)
                                          
                                          
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def delete_events(data):
    sql = """DELETE FROM public.eventos 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def update_events(data):
    sql = """UPDATE public.eventos 
            SET titulo = subquery.titulo,
                imagen = subquery.imagen,
                fecha = subquery.fecha,
                hora = subquery.hora,
                descripcion = subquery.descripcion
            FROM (SELECT id, titulo, imagen, fecha, hora, descripcion
                    FROM json_to_recordset(%s) x (  id int,
                                                    titulo varchar(200),
                                                    imagen varchar(500),
                                                    fecha varchar(10),
                                                    hora varchar(10), 
                                                    descripcion varchar(10000)
                                                    
            )) AS subquery
            WHERE eventos.id = subquery.id"""
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def read_tours():
    sql = """SELECT id, titulo, descripcion, urltour, imagen 
 FROM public.tourvirtual;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data

def insert_tours(data):
    sql = """INSERT INTO public.tourvirtual (titulo, descripcion, urltour, imagen)
            SELECT titulo, descripcion, urltour, imagen
            FROM json_to_recordset(%s) x (titulo varchar(100),
                                          descripcion varchar(10000), 
                                          urltour varchar(500),
                                          imagen varchar(100)
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def delete_tours(data):
    sql = """DELETE FROM public.tourvirtual 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def update_tours(data):
    sql = """UPDATE public.tourvirtual 
            SET titulo = subquery.titulo,
                descripcion = subquery.descripcion,
                urltour = subquery.urltour,
                imagen = subquery.imagen
            FROM (SELECT id, titulo, descripcion, urltour, imagen
                    FROM json_to_recordset(%s) x (  id int,
                                                    titulo varchar(100),
                                                    descripcion varchar(10000), 
                                                    urltour varchar(500),
                                                    imagen varchar(100)
                                                    
            )) AS subquery
            WHERE tourvirtual.id = subquery.id"""
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def read_exhibitions():
    sql = """SELECT id, titulo, descripcion, imagen, tipo
	FROM public.exhibiciones;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    #print(data)
    return data

def insert_exhibitions(data):
    sql = """INSERT INTO public.exhibiciones (titulo, descripcion, imagen, tipo)
            SELECT titulo, descripcion, imagen, tipo
            FROM json_to_recordset(%s) x (  titulo varchar(100),
                                            descripcion varchar(1000),
                                            imagen varchar(500),
                                            tipo varchar(100) 
                                          
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def delete_exhibitions(data):
    sql = """DELETE FROM public.exhibiciones 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def update_exhibitions(data):
    sql = """UPDATE public.exhibiciones 
            SET titulo = subquery.titulo,
                descripcion = subquery.descripcion,
                imagen = subquery.imagen,
                tipo = subquery.tipo
                
            FROM (SELECT id, titulo, descripcion, imagen, tipo
                    FROM json_to_recordset(%s) x (  id int,
                                                    titulo varchar(100),
                                                    descripcion varchar(1000),
                                                    imagen varchar(500), 
                                                    tipo varchar(100)
                                                    
            )) AS subquery
            WHERE exhibiciones.id = subquery.id"""
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def read_artwork():
    sql = """SELECT id, titulo,descripcion,imagen,id_exhibicion
 FROM public.obra;"""
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data

def insertArtwork(data):
    sql = """INSERT INTO public.obra (titulo,descripcion,imagen,id_exhibicion)
            SELECT titulo,descripcion,imagen, id_exhibicion
            FROM json_to_recordset(%s) x (  titulo varchar(100),
                                            descripcion varchar(10000),
                                            imagen varchar(500),
                                            id_exhibicion int
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def deleteArtwork(data):
    sql = """DELETE FROM public.obra 
            WHERE id= (SELECT id FROM json_to_recordset(%s) x (id int)) """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()

def updateArtwork(data):
    sql = """UPDATE public.obra 
            SET titulo = subquery.titulo,
                descripcion = subquery.descripcion,
                imagen = subquery.imagen,
                id_exhibicion = subquery.id_exhibicion                
            FROM (SELECT id, titulo,descripcion,imagen,id_exhibicion
                    FROM json_to_recordset(%s) x (  id int,
                                                    titulo varchar(100),
                                                    descripcion varchar(10000),
                                                    imagen varchar(500),
                                                    id_exhibicion int
            )) AS subquery
            WHERE obra.id = subquery.id"""
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()
if __name__ == '__main__':
    app.run(host="192.168.88.15", port="5000")#Cambiar puerto