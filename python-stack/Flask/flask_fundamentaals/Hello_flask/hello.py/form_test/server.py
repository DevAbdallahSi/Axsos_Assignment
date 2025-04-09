from flask import Flask, render_template, request, redirect, session
app=Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes'
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/users', methods=['post'])
def create_user():
    print('Got Post Info')
    print(request.form)
    # name_from_form = request.form['name']
    # email_from_form = request.form['email']
        # return render_template("show.html", name_on_template=name_from_form,email_on_template=email_from_form)
    session['username'] = request.form['name']
    session['useremail'] = request.form['email']
    return redirect ("/show")
@app.route("/show")
def show_user():

    # print("Showing the User Info From the Form")
    # print(request.form)
    return render_template("show.html")#,name_on_templaye=session['username'],email_on_template=session['useremail'])
if __name__=="__main__":
    app.run(debug=True)



    # ////////////////////////////******************////////////////////////#
# Common typecasting functions:
# int(): Converts a value to an integer

# float(): Converts a value to a float

# str(): Converts a value to a string

# list(): Converts a value to a list

# tuple(): Converts a value to a tuple

# set(): Converts a value to a set