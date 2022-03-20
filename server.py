from flask import Flask
from model import connect_to_db

app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello world"


if __name__ == '__main__':
    from flask import Flask

    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
