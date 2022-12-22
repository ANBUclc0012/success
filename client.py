import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('connection established')
    sio.emit('chat message', {'response': 'my response'})


@sio.event
def my_message(data):
    print('message received with ', data)

@sio.event
def disconnect():
    print('disconnected from server')

sio.connect('https://ninhhaihuyit.com:3000')
sio.emit
sio.wait()