import flask



app = flask.Flask(__name__)

@app.route('/sh')


def main():
	return(flask.render_template('index.html'))

def runApi():
	return sh.testSuite()


if __name__ == '__main__':
	app.run(debug=True)
