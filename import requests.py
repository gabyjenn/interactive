import requests
import time

# Set the URL of the server
url = 'http://yourserver.com/laptopstatus'

# Loop forever
while True:
    # Check if the laptop is in use (e.g. by checking if the keyboard/mouse is active)
    is_in_use = ...  # Insert your code here to check if the laptop is in use

    # Send the laptop status to the server
    if is_in_use:
        requests.post(url, data={'status': 'in_use'})
    else:
        requests.post(url, data={'status': 'idle'})

    # Wait for some time before checking the status again
    time.sleep(10)  # Wait for 10 seconds




from flask import Flask, jsonify, request

app = Flask(__name__)

# This dictionary will store the status of each person's laptop (True if on, False if off)
laptop_status = {
    'person1': False,
    'person2': False,
    'person3': False,
    'person4': False,
    'person5': False,
    'person6': False,
    'person7': False,
}

@app.route('/update_status', methods=['POST'])
def update_status():
    # Get the person and status from the request
    person = request.form['person']
    status = request.form['status']

    # Update the laptop status dictionary
    laptop_status[person] = (status == 'on')

    # Return the updated status of all laptops as a JSON response
    return jsonify(laptop_status)

if __name__ == '__main__':
    app.run()

