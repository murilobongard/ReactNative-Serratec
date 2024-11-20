import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const data = [
  { title: "livro1" },
  { title: "livro2" },
  { title: "livro3" },
  { title: "livro4" },
  { title: "livro5" },
  { title: "livro6" },
  { title: "livro7" },
  { title: "livro8" },
  { title: "livro9" },
  { title: "livro10" },
  { title: "livro11" },
  { title: "livro12" },
  { title: "livro13" },
  { title: "livro14" },
  { title: "livro15" },
  { title: "livro16" },
  { title: "livro17" },
  { title: "livro18" },
  { title: "livro19" },
  { title: "livro20" },
];

export function HomeScreen() {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        keyExtractor={(item, index) => item.title + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#6b7280",
                flex: 1,
                height: 200,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white" }}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponentStyle={{ marginVertical: 10 }}
        ListHeaderComponent={() => (
          <View>
            <FlatList
              horizontal={true}
              style={{ paddingVertical: 5 }}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
              data={data}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    width: 300,
                    height: 240,
                    backgroundColor: "#fca5a5",
                    borderRadius: 20,
                  }}
                >
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 12,
                marginTop: 15,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Popular</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
