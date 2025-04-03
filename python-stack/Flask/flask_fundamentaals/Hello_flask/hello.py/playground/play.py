from flask import Flask , render_template
app=Flask(__name__)
@app.route('/')
def main():
    return 'welcome to playground assignment'

# @app.route('/blog/', defaults={'page': 1})

# @app.route('/blog/page/<int:page>')

# def blog(page):

    # return f"You are viewing page {page}"

@app.route('/play/',defaults={'x': 3,'color':'skyblue'})
# def indexf():
    # return render_template('play.html')
@app.route('/play/<int:x>/')
def display_multi_box(x):
    return render_template ('play.html',num_boxes=x)
@app.route('/play/<int:x>/<string:color>')
def display_color_box(x,color):
    return render_template ('play.html',num_boxes=x,color=color)
if __name__=="__main__":
    app.run(debug=True)
    # defult barameter