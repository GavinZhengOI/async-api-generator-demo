// 1
import { File, Text } from '@asyncapi/generator-react-sdk'
export default function ({ asyncapi, params }) {
  return (
    <File name="client.py">

      <Text newLines={2}>import paho.mqtt.client as mqtt</Text>

      <Text newLines={2}>mqttBroker = "{asyncapi.servers().get(params.server).url()}"</Text>

      <Text newLines={2}>class {asyncapi.info().title().replaceAll(' ', '')}Client:</Text>

      <Text indent={2} newLines={2}>
        {`def __init__(self):
            self.client = mqtt.Client()
            self.client.connect(mqttBroker)`}
      </Text>
      </File>
  )
}