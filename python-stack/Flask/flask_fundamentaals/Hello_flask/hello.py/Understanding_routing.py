from flask import Flask
app=Flask(__name__)
@app.route('/')
def hello_world():
    return 'hello word'
@app.route('/champion')
def champion ():
    return 'champion'
@app.route('/hi/<name>')
def say(name):
    return f'hi {name}!'
@app.route('/repeat/<int:num>/<word>')
def repeat(num,word):
    return (" ".join([word] * num))
@app.errorhandler(404)
def page_not_found(e):
    return "oops somthing wint rong !"
    
if __name__ == '__main__':
    app.run(debug=True)