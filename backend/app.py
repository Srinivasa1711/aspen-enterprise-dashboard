from flask import Flask, jsonify
from routes import get_employees

app = Flask(__name__)

@app.route('/api/employees', methods=['GET'])
def employees():
    return jsonify(get_employees())

if __name__ == '__main__':
    app.run(debug=True)
