from flask import Flask, request, Response
from lib.slack import send_slack
from lib.forecast import forecast

app=Flask(__name__)

@app.route('/slack', methods = ['POST'])
def slack():
    username = request.form.get('user_name')
    token = request.form.get('token')
    text = request.form.get('text')

    if "날씨" in text:
        #msg = forecast()
        summary = forecast()
        send_slack(msg)

    print(username, token, text)

    return Response(), 200

if __name__ == '__main__':
    app.run()
