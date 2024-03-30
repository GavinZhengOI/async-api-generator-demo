import { File, Text } from '@asyncapi/generator-react-sdk'

export default function requirementList({ asyncapi, params }){
    return (
        <File name="requirement.txt">
            <Text>paho-mqtt==1.6.1</Text>
        </File>
    )
}