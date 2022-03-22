from flask import (Flask, jsonify, request)
from model import connect_to_db
import crud

app = Flask(__name__)


@app.route('/main')
def main():

    response_body = {
        "name": "test",
        "email": "test@test.com"
    }

    return response_body


@app.route('/allusers')
def all_users():

    users = crud.get_users()
    users_dict = {}

    i = 0
    for user in users:
        dict_user = {}
        dict_user['user_id'] = user.user_id
        dict_user['name'] = user.name
        dict_user['email'] = user.email
        dict_user['birthday'] = user.birthday
        dict_user['zip_code'] = user.zip_code
        users_dict[i] = dict_user
        i += 1

        print(dict_user)

    return jsonify(users_dict)


@app.route('/user', methods=["GET", "POST"])
def user():

    if request.method == 'POST':
        name = request.json.get('name')
        email = request.json.get('email')
        birthday = request.json.get('birthday')
        zip_code = request.json.get('zip_code')

        user = crud.create_user(name, email, birthday, zip_code)
        print("********************************", "USER:",
              user, "*******************************")

    return "test"


@app.route('/user/<user_id>', methods=["PATCH", "DELETE"])
def handleUser(user_id):

    if request.method == 'DELETE':
        user_id = request.json.get('user_id')
        crud.delete_user(user_id)

        print("********************************",
              "USER DELETED", "*******************************")

    return "user deleted"


if __name__ == '__main__':
    from flask import Flask

    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
