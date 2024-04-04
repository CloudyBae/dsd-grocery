import { StyleSheet, Text, TouchableOpacity } from "react-native"

const CategoryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={stlyes.categoryButton} 
        onPress={onPress || (() => console.log("To use this button, ensure that you have set up a callback function (onPress)."))}
    >
      <Text style={stlyes.titleText}>{title || "Button"}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton

const stlyes = StyleSheet.create({
  categoryButton: {
    padding: 15,
    margin: 5,
    backgroundColor: '#72C08F',
    borderRadius: 13
  },
  titleText: {
    fontSize: 15,
    color: '#0A0A0A'
  },
});