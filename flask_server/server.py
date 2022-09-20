from flask import Flask, json

app = Flask(__name__)

# Create all needed pages here, any returns in JSON array, follow video example

# this is a test

# this will be visible on <local host>/members


@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


if __name__ == "__main__":
    app.run(debug=True)
