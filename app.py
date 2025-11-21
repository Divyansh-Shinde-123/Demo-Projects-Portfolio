from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow React frontend to fetch data

# Portfolio projects
projects = [
    {
        "id": 1,
        "title": "Margherita Pizza",
        "description": "Delicious classic pizza with mozzarella",
        "image_url": "http://localhost:5000/static/images/pizza.jpg"
    },
    {
        "id": 2,
        "title": "Paneer Burger",
        "description": "Spicy paneer burger with chutney",
        "image_url": "http://localhost:5000/static/images/burger.jpg"
    },
    {
        "id": 3,
        "title": "Chocolate Cake",
        "description": "Rich chocolate cake for dessert",
        "image_url": "http://localhost:5000/static/images/cake.jpg"
    }
]

# Services data
services = [
    {"id": 1, "title": "Web Design", "description": "Beautiful, modern designs that capture your brand essence and engage your audience"},
    {"id": 2, "title": "Web Development", "description": "Custom websites built with cutting-edge technologies for optimal performance"},
    {"id": 3, "title": "E-Commerce", "description": "Powerful online stores that convert visitors into customers and drive sales"},
]

# Contact form submission
@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    # Here you can save to DB or send email
    print(f"Received contact: {name}, {email}, {message}")
    return jsonify({"status": "success", "message": "Form submitted!"})

# API routes
@app.route("/api/projects")
def get_projects():
    return jsonify(projects)

@app.route("/api/services")
def get_services():
    return jsonify(services)

if __name__ == "__main__":
    app.run(debug=True)
