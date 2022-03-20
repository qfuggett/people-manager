from flask import Flask
from model import connect_to_db

app = Flask(__name__)


@app.route('/main')
def main():

    response_body = {
        "name": "test",
        "email": "test@test.com"
    }

    return response_body


if __name__ == '__main__':
    from flask import Flask

    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
