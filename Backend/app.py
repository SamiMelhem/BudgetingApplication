from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Popcorn121!@localhost/budgetapplication'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy and Migrate
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Set up for file uploads
app.config['UPLOAD_FOLDER'] = 'C:\\Users\\terry\\Downloads'

from api.models.user import User

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/register')
def register_user():
    data = request.json
    new_user = User(username=data['username'], password_hash=data['password_hash'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404
    data = request.json
    user.username = data.get('username', user.username)
    user.password_hash = data.get('password_hash', user.password_hash)
    db.session.commit()
    return jsonify({'message': 'User updated successfully'}), 200

@app.route('/questionnaire', methods=['POST'])
def handle_questionnaire():
    # Adjust this once we create the frontend
    if 'file' in request.files:
        if 'file' not in request.files:
            return 'No file part', 400
        file = request.files['file']
        if file.filename == '':
            return 'No selected file', 400
        if file:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

    # Assuming the questionnaire data is sent in the request body
    questionnaire_data = request.json
    # Process questionnaire data here
    return jsonify({'message': 'Questionnaire submitted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)