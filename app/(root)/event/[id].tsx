import { View, Text, Dimensions, ScrollView, Image, Platform, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import images from '@/constants/images';
import icons from '@/constants/icons';
import { cards, categories, facilities } from '@/constants/data';

const SingleEvent = () => {

    const { id} = useLocalSearchParams<{id?:string}>();

    const windowsHeight = Dimensions.get("window").height;
  return (
    <View>
      <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerClassName={"pb-32 "}
       >
        <View className="w-full relative">
            <Image
                source={images.torch}
                className=""
                resizeMode="cover"
            />
           <Image
           source={images.blackGradient}
              className="absolute w-full h-full z-40"
              />
               <View
            className="z-50 absolute inset-x-7"
            style={{
              top: Platform.OS === "ios" ? 70 : 20,
            }}
          >
            <View className="flex flex-row items-center w-full justify-between">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-white rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <View className="flex flex-row items-center gap-3">
                <View className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-0">
                <Image
                  source={icons.heart}
                  className="size-7"
                  tintColor={"#191D31"}
                />
                </View>
                <View className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-0">
                <Image source={icons.send} className="size-7" />
                </View>
              </View>
            </View>
          </View>
          
        </View>
        <View className="px-5 gap-2 mt-7 ">
            <Text className="text-2xl font-rubik-extrabold">
                {cards[0].title}
            </Text>
            <View className="flex flex-row items-center gap-3">
            <View className="flex flex-row items-center px-4 py-2 bg-primary-100 rounded-full">
              <Text className="text-xs font-rubik-bold text-primary-300">
                5.4
              </Text>
            </View>

            <View className="flex flex-row items-center gap-2">
              <Image source={icons.star} className="size-5" tintColor={"#EA0B0B"}/>
              <Text className="text-black-200 text-sm mt-1 font-rubik-medium">
                {5} ({20} reviews)
              </Text>
            </View>
          </View>
            <View className="flex flex-row items-center gap-2">
                <Image source={icons.location} className="size-5" tintColor={"#EA0B0B"} />
                <Text className="text-black-200 text-sm mt-1 font-rubik-medium">
                {cards[0].location}
                </Text>


          
          </View>

          <View className="flex flex-row items-center mt-5">
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10">
              <Image source={icons.bed} 
              tintColor={"#EA0B0B"}
              className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
             3 Beds
            </Text>
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.bath} 
              tintColor={"#EA0B0B"}
              className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              2 Baths
            </Text>
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.area} 
              tintColor={"#EA0B0B"}
              className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
             100 sqft
            </Text>
          </View>

          <View className="w-full border-t border-primary-200 pt-7 mt-5">
            <Text className="text-black-300 text-xl font-rubik-bold">
              Organiser
            </Text>

            <View className="flex flex-row items-center justify-between mt-4">
              <View className="flex flex-row items-center">
                <Image
                  source={images.avatar}
                 
                  className="size-14 rounded-full"

                />

                <View className="flex flex-col items-start justify-center ml-3">
                  <Text className="text-lg text-black-300 text-start font-rubik-bold">
              Katello
                  </Text>
                  <Text className="text-sm text-black-200 text-start font-rubik-medium">
                    katello@email.com
                  </Text>
                </View>
              </View>

              <View className="flex flex-row items-center gap-3">
                <Image source={icons.chat}
                tintColor={"#EA0B0B"} className="size-7" />
                <Image source={icons.phone}
                tintColor={"#EA0B0B"}
                 className="size-7" />
              </View>
            </View>
          </View>
          
          </View>


          <View className="mt-7">
            <Text className="text-black-300 text-xl font-rubik-bold">
              Overview
            </Text>
            <Text className="text-black-200 text-base font-rubik mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum in eaque suscipit libero? Impedit, nisi atque. Soluta, dolorem laboriosam? Quisquam, quidem. Quisquam, quidem.
            </Text>
          </View>

          <View className="mt-7">
            <Text className="text-black-300 text-xl font-rubik-bold">
              Facilities
            </Text>

            {(
              <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">
                {facilities.map((facility, index: number) => {
                  

                  return (
                    <View
                      key={index}
                      className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                    >
                      <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                        <Image
                          source={facility ? facility.icon : icons.info}
                          className="size-6"
                        />
                      </View>

                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="text-black-300 text-sm text-center font-rubik mt-1.5"
                      >
                        {facility.title}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}
          </View>

          {  (
            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">
                Gallery
              </Text>
              <FlatList
                contentContainerStyle={{ paddingRight: 20 }}
                data={[1,2,3,4,5]}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Image
                    source={images.lights}
                    className="size-40 rounded-xl"
                  />
                )}
                contentContainerClassName="flex gap-4 mt-3"
              />
            </View>
          )}

          

          { (
            <View className="mt-7">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  <Image source={icons.star} className="size-6" />
                  <Text className="text-black-300 text-xl font-rubik-bold ml-2">
                    {5} ({10} reviews)
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text className="text-primary-300 text-base font-rubik-bold">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="mt-5">
                {/* <Comment /> */}
              </View>
            </View>
          )}
   

       </ScrollView>
    </View>
  )
}

export default SingleEvent