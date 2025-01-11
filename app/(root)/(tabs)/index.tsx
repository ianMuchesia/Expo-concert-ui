import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Link, router } from "expo-router";
import Search from "@/components/Search";
import { cards, categories } from "@/constants/data";

export default function Index() {
  const HeaderComponent = () => (
    <View className="px-5 bg-white">
      {/* Top Header */}
      <View className="py-3">
        <View className="flex items-center justify-between flex-row">
          <View className="flex items-center justify-center flex-row">
            <Image
              source={images.avatar}
              className="w-10 h-10"
              resizeMode="contain"
            />
            <View className="flex">
              <Text className="text-black font-rubik-bold text-lg ml-2">
                Welcome Back
              </Text>
              <Text className="text-black font-rubik text-xs ml-2">
                Msodoki
              </Text>
            </View>
          </View>
          <View className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full border-0">
            <Image
              source={icons.share}
              className="w-5 h-5 text-primary"
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="my-8">
          <Search />
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="font-bold text-lg text-rubik-bold text-black">
            Upcoming Events
          </Text>
          <TouchableOpacity>
            <Text className="text-base text-rubik text-black">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 mb-4"
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              className="flex mr-3 py-4 pl-3 pr-6 rounded-xl bg-red-100"
            >
              <View>
                <Text>{category.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );

  return (
    <SafeAreaView className=" mb-20 flex-1 bg-white">
      <HeaderComponent />
      <View className="flex-1">
        <FlatList
          data={cards}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pb-4"
          renderItem={({ item }) => (
            <TouchableOpacity className=" border-0 mx-5 mb-4 relative rounded-[40]" onPress={() => {router.push(`/event/1`)}}>
              <View>
              <Image source={item.image} className="h-64 w-full rounded-[40]" />
              <View className="absolute bottom-0   bg-red-700 opacity-[0.8] rounded-b-[40] w-full px-6 py-2 flex flex-row items-center justify-between ">
                <View className="flex ">
                <Text className="text-white font-rubik-bold tracking-wider uppercase text">{item.title}</Text>
                <Text className="text-white ">{item.time}</Text>
                <Text className="text-white">{item.location}</Text>
                </View>
                <View className="flex items-center justify-center bg-white w-20 h-10 rounded-3xl ">
                  <Text className="text-black font-rubik-bold">{item.price}</Text>                  
                  </View>
              </View>
              </View>

            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}