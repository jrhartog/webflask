# import required modules
from flask import Flask, render_template

# create the Flask app object
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
