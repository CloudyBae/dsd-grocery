import { useState } from 'react'
import { View,
        StyleSheet,
        Text,
        TouchableOpacity } from 'react-native-web'

const Accordion = () => {
const {showContent, setShowContent} = useState(false);

  return (
    <View>
        <TouchableOpacity>
            <View>
                <Text>Product Detail</Text>
            </View>

        </TouchableOpacity>
    </View>
  )
}

export default Accordion