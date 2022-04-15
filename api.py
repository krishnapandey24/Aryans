from flask import Flask, jsonify, render_template, request
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

app.config["MYSQL_DB"] = "bcxtkd0upzojf7dyt91g"
app.config["MYSQL_HOST"] = "bcxtkd0upzojf7dyt91g-mysql.services.clever-cloud.com"
app.config["MYSQL_PASSWORD"] = "cqYifZsBlo03hxsIUqod"
app.config["MYSQL_PORT"] = 3306
app.config["MYSQL_URI"] = "mysql://utxs5ess1sj38hy8:cqYifZsBlo03hxsIUqod@bcxtkd0upzojf7dyt91g-mysql.services.clever-cloud.com:3306/bcxtkd0upzojf7dyt91g"
app.config["MYSQL_USER"] = "utxs5ess1sj38hy8"
app.config["MYSQL_VERSION"] = 8.0

mysql = MySQL(app)

# HOMEPAGE
@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/college", methods=["GET"])
def get_college_by_id():
    conn = mysql.connection
    cur = conn.cursor()
    id = int(request.args.get('id'))
    cur.execute(f"SELECT * FROM colleges WHERE college_id = {id}")
    all_data = cur.fetchall()
    cur.close()
    return jsonify(all_data)

@app.route("/colleges", methods=["GET"])
def get_all():
    conn = mysql.connection
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM colleges")
    all_data = cur.fetchall()
    cur.close()
    return jsonify(all_data)

# DELETING DATA
@app.route('/colleges', methods=['DELETE'])
def delete_record():
    conn = mysql.connection
    cur = conn.cursor()
    id = int(request.args.get('id'))
    cur.execute(f"Delete from colleges WHERE college_id = {id}")

    conn.commit()
    cur.close()

    return {"result": "Record deleted Succesfully"}

# INSERTING DATA
@app.route('/colleges', methods=['POST'])
def insert_record():

    data = request.get_json()
    conn = mysql.connection
    cur = conn.cursor()

    name = data["name"]
    address = data["address"]
    placement_ratio = data["placement_ratio"]
    average_package = data["average_package"]
    cut_off = data["cut_off"]
    website = data["website"]
    autonomous = data["autonomous"]
    ranking = data["ranking"]

    cur.execute(f"INSERT INTO colleges (name, address, placement_ratio, average_package, cut_off, website, autonomous, ranking) VALUES ('{name}', '{address}', '{placement_ratio}', '{average_package}', '{cut_off}', '{website}', '{autonomous}', '{ranking}')")
    conn.commit()
    cur.close()

    return {"result": "Record inserted Succesfully"}

# UPDATING DATA
@app.route('/colleges', methods=['PUT'])
def update_record():

    data = request.get_json()
    conn = mysql.connection
    cur = conn.cursor()


    college_id = int(data["college_id"])
    name = data["name"]
    address = data["address"]
    placement_ratio = data["placement_ratio"]
    average_package = data["average_package"]
    cut_off = data["cut_off"]
    website = data["website"]
    autonomous = data["autonomous"]
    ranking = data["ranking"]
    cur.execute(f"UPDATE colleges SET name = '{name}', address = '{address}', placement_ratio = '{placement_ratio}', average_package = '{average_package}', cut_off = '{cut_off}', website = '{website}', autonomous = '{autonomous}', ranking = '{ranking}' WHERE college_id = '{college_id}'")
    cur = conn.cursor()
    
    conn.commit()
    return {"result": "Record updated Succesfully"}

# SORTING DATA  
@app.route("/colleges/sorted", methods=['GET'])
def sort_data():
    conn = mysql.connection
    cur = conn.cursor()
    sort_by = str(request.args.get('sortBy'))
    sort_type = str(request.args.get('sortType'))
    cur.execute(f"SELECT * FROM colleges ORDER BY {sort_by} {sort_type}")
    all_data = cur.fetchall()
    cur.close()
    return jsonify(all_data)


if __name__ == "__main__":
    app.run(debug=True)