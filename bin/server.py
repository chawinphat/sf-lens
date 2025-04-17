from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)

cred = credentials.Certificate("keys/sf-lens-1f4d9-firebase-adminsdk-fbsvc-73c09468cf.json")
firebase_admin.initialize_app(cred)
db = firestore.client()



@app.route('/')
def index():
    return 'Hello from Flask!'

@app.route('/users', methods=['POST'])
def add_user():
    data = request.get_json(force=True)
    name = data.get('username')
    password = data.get('password')
    email = data.get('email')
    attraction_ids = []

    # (optional) you could check for missing fields here

    # now write only those fields to Firestore
    user_ref = db.collection('users').add({
        'username': name,
        'password': password,
        'email': email
    })
    return {'id': user_ref[1].id}, 201

@app.route('/search', methods=['GET'])
def search_attractions():
    name = request.args.get('name')
    location = request.args.get('location')
    prefix = request.args.get('prefix') 

    query = db.collection('attractions')
    
    if name:
        query = query.where('name', '==', name)
    if location:
        query = query.where('location', '==', location)

    if prefix:
        end = prefix + '\uf8ff'
        query = query.order_by('name').start_at([prefix]).end_at([end])
    
    results = [doc.to_dict() | {'name': doc.id} for doc in query.stream()]
    return jsonify(results), 200

@app.route('/attractions', methods=['GET'])
def list_attractions():
    try:
        docs = db.collection("attractions").stream()
        attractions = []
        for doc in docs:
            data = doc.to_dict()
            data['name'] = doc.id     
            attractions.append(data)
        return jsonify(attractions), 200

    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/createattraction/', methods=['POST'])
def create_attraction(name):
    data = request.get_json(force=True)
    required = ['id', 'location', 'images', 'description', 'reviews', 'special']
    missing = [f for f in required if f not in data]
    if missing:
        return jsonify({
            'success': False,
            'error': f'Missing fields: {", ".join(missing)}'
        }), 400

    doc_data = {
        'id': data['id'],
        'name': name,                  
        'location': data['location'],
        'images': data['images'],       
        'description': data['description'],
        'reviews': data['reviews'],     
        'special': data['special']
    }

    try:
        doc_ref = db.collection("attractions").document(name)
        doc_ref.set(doc_data)
        return jsonify({
            'success': True,
            'message': f'Attraction "{name}" created.'
        }), 201

    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
