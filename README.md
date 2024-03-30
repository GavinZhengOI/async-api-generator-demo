# Quick Start
In order to use this template, we just need to change the config file. First, go to `test/fixtures/asyncapi.yaml`. Change the `servers/dev/url` to your server (or you can keep it unchanged to use the default server), and change the `servers/dev/protocol` to use protocols other than MQTT.

Then, change the two channels (`temperature/dropped`, `temperature/risen`) according to your needs. The default property type is `string`; you can change that if you want another data type.

Save your changes, and use `npm install` to install the required packages. After installation, use `npm run test:generate` to generate the code. The code should be located at `test/project/client.py`. Use `npm run test:start` to run the code.

You should be able to see output from the terminal like this:

```
> python-mqtt-client-template@0.0.1 test:start
> python test/project/test.py

Temperature drop detected 40358831 sent to temperature/dropped
Temperature rise detected 40358831 sent to temperature/risen
Temperature drop detected 98886572 sent to temperature/dropped
Temperature rise detected 98886572 sent to temperature/risen
Temperature drop detected 73493148 sent to temperature/dropped
Temperature rise detected 73493148 sent to temperature/risen
Temperature drop detected 86301245 sent to temperature/dropped
Temperature rise detected 86301245 sent to temperature/risen
```
Each second, the program will generate two messages and send them through two channels respectively. One is for temperature rise and the other is for temperature fall.

To ensure you send out messages successfully, use `sudo docker run hivemq/mqtt-cli sub -t temperature/risen -h test.mosquitto.org` to subscribe to the channel. As you may have noticed, the `-t` argument indicates the channel to subscribe to, and the `-h` argument indicates the server. Change these according to your needs.
