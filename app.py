from flask import Flask, jsonify, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config["MYSQL_DB"] = "blqi2cak5js1pb0qha6p"
app.config["MYSQL_HOST"] = "blqi2cak5js1pb0qha6p-mysql.services.clever-cloud.com"
app.config["MYSQL_PASSWORD"] = "U8R0Mf6QOm6Ri8B5DbYd"
app.config["MYSQL_PORT"] = 3306
app.config["MYSQL_URI"] = "mysql://ui4zkt7bgxdjiihc:U8R0Mf6QOm6Ri8B5DbYd@blqi2cak5js1pb0qha6p-mysql.services.clever-cloud.com:3306/blqi2cak5js1pb0qha6p"
app.config["MYSQL_USER"] = "ui4zkt7bgxdjiihc"
app.config["MYSQL_VERSION"] = 8.0

mysql = MySQL(app)

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/endpoint", methods=["GET"])
def hello_world():
    # return render_template("index.html")
    conn = mysql.connection
    cur = conn.cursor()
    cur.execute("SELECT * FROM colleges")
    all_data = cur.fetchall()
    cur.close()
    return jsonify(all_data)





if __name__ == "__main__":
    app.run(debug=True)