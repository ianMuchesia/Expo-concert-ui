import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'

const Search = () => {
  return (
    <View className="flex flex-row items-center justify-between w-full px-4  py-2 border-0 rounded-3xl bg-red-100 ">
    <View className="flex-1 flex flex-row items-center justify-start z-50">
    <Image source={icons.search} className="size-5" />
    <TextInput
        value={""}
        onChangeText={()=>{}}
        placeholder="Search for anything"
        className="text-lg font-rubik text-black-100 ml-2 flex-1"
      />
  </View>
  <TouchableOpacity>
      <Image source={icons.filter} className="size-5" />
    </TouchableOpacity>
   
  </View>
  )
}

export default Search