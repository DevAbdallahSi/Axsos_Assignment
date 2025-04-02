from flask import Flask, request

app = Flask(__name__)

# Basic route
@app.route('/')
def home():
    return 'Welcome to the Flask Server!'

# Static route (About)
@app.route('/about')
def about():
    return 'This is the About page!'

# Dynamic route (Greet)
@app.route('/greet/<name>')
def greet(name):
    return f'Hello, {name}!'

# Dynamic route (Square number)
@app.route('/square/<int:num>')
def square(num):
    return f'The square of {num} is {num ** 2}'

# Handling form submission with GET and POST
@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        name = request.form.get('name')  # Get the name from the formgreet
        return f'Hello, {name}! Form submitted successfully.'
    return '''
        <form method="POST">
            Name: <input type="text" name="name">
            <input type="submit" value="Submit">
        </form>
    '''

if __name__ == '__main__':
    app.run(debug=True)
