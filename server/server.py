from flask import Flask, jsonify, send_file
from flask_cors import CORS

RETURN_IMAGE_URL = "../client/public/assets/images/wallpaper.jpeg"

# App instance
app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'image': "Placeholder Image"
    })

@app.route("/api/getImage", methods=['GET'])
def return_image():
    return send_file(RETURN_IMAGE_URL, mimetype='image/jpg')

if __name__ == "__main__":
    app.run(debug=True, port=8080)