from flask import Flask
import firebase_admin
from firebase_admin import credentials, firestore


app = Flask(__name__)


cred = credentials.Certificate("keys/sf-lens-1f4d9-firebase-adminsdk-fbsvc-73c09468cf.json")
firebase_admin.initialize_app(cred)
db = firestore.client()




doc_ref = db.collection("attractions").document("alovelace")
doc_ref.set({"first": "Ada", "last": "Lovelace", "born": 1815})

users_ref = db.collection("attractions")
docs = users_ref.stream()

for doc in docs:
    print(f"{doc.id} => {doc.to_dict()}")


@app.route('/')
def index():
    return 'Hello from Flask!'

@app.route('/greet/<name>')
def greet(name):
    return f'Hi, {name}!'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
