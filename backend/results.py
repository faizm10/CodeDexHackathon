from flask import Flask, jsonify
from flask_cors import CORS
from badminton import badminton_simulate
from basketball import basketball_simulate
from football import football_simulate


app = Flask(__name__)
CORS(app)

@app.route('/results', methods=['GET'])
def results():
    badminton_results = badminton_simulate()
    basketball_results = basketball_simulate()
    football_results = football_simulate()
    
    master_results = {
        "badminton": badminton_results,
        "basketball": basketball_results,
        "football": football_results
    }
    
    return jsonify(master_results)

if __name__ == '__main__':
    app.run(debug=True,port=5000)