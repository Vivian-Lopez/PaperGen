from flask import Flask, jsonify
from flask_cors import CORS

# App instance
app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'image': "Placeholder text for image",
        'people': ['Jack', 'Jill', 'John']
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)