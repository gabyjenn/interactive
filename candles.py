import requests
import psutil
import time

# Change this to the URL of your server
SERVER_URL = 'https://gabyjenn.github.io/interactive/candles.html'

# Change these to the names of the people and their corresponding laptop IDs
PEOPLE = {
    'person1': '38:f9:d3:a6:6d:82', #jeewon
    'person2': 'def456',
    'person3': 'ghi789',
    'person4': 'jkl012',
    'person5': 'mno345',
    'person6': 'pqr678',
    'person7': 'stu901',
}

while True:
    for person, laptop_id in PEOPLE.items():
        # Check if the laptop is on
        is_on = any(device for device in psutil.disk_partitions(all=False) if device.opts == 'rw,nosuid,nodev,relatime')

        # Send the laptop status to the server
        status = 'on' if is_on else 'off'
        requests.post(SERVER_URL, data={'person': person, 'status': status})

    # Wait for 1 minute before checking again
    time.sleep(60)
