from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, orgins='*')

@app.route('/api/users')
def users():
    return jsonify(
        {
            "users": [
                'Bill',
                'Beth',
                'BabyBill'
            ]
        }
    )


if __name__ == '__main__':
    app.run(debug=True, port=8080)
    