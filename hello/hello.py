from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello flask"

#returns as HTML webpage
@app.route("/user/<username>")
def user(username):
    return render_template("profile.html", name=username)

# json format api
@app.route("/people/<age>/<username>")
def people(age, username):
    users = {
    username : age,
    "chanmin": [
        {"age": 29},
        {"email": "justinjun900@gmail.com"}
        ]}
    return jsonify(users)

if __name__ == '__main__':
    app.run()
