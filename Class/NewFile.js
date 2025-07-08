import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";

const name = "Favour";
const NewFile = () => {
  const resource = "https://reqres.in/api/unknown ";
  const userData = "https://reqres.in/api/users/2";
  const getProduct = "https://reqres.in/api/unknown/2";
  const people = "https://reqres.in/api/users?page=2";

  const [user, setUser] = useState([]);
  const [single, setSingle] = useState([]);
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    fetch(resource)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.data);
      });
  };
  const fetchSingle = async () => {
    fetch(userData)
      .then((res) => res.json())
      .then((data1) => {
        console.log(data1);
        setSingle(data1.data);
      });
  };
  const fetchProduct = async () => {
    fetch(getProduct)
      .then((res) => res.json())
      .then((data2) => {
        console.log(data2);
        setProduct(data2.data);
      });
  };
  const fetchPeople = async () => {
    fetch(people)
      .then((res) => res.json())
      .then((data3) => {
        console.log(data3);
        setUsers(data3.data);
      });
  };

  useEffect(() => {
    fetchUsers();
    fetchSingle();
    fetchProduct();
    fetchPeople();
  }, []);
  return (
    <View style={styles.page}>
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.profile}>
              <Image source={{ uri: item.avatar }} style={styles.image} />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {item.first_name} {item.last_name}
              </Text>
              <Text style={{ fontSize: 12, color: "gray" }}>{item.email}</Text>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <FlatList
                      data={user}
                      numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={[styles.product, { backgroundColor: item.color }]}
                    >
                      <Text style={{ color: "white" }}>{item.name}</Text>
                      <Text style={{color:'white'}}>{item.year}</Text>
                    </View>
                  );
                }}
              />
              <View style={{marginVertical:10,}}>
                <Image
                  source={{ uri: single.avatar }}
                  style={{ height: 100, width: 100 }}
                />
                <Text>{single.email}</Text>
                <Text>
                  {single.first_name} {single.last_name}
                </Text>
              </View>
              <View style={{ backgroundColor: product.color }}>
                <Text style={{ color: "white" }}>{product.name}</Text>
                <Text>{product.year}</Text>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default NewFile;

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    padding: 15,
  },
  product: {
      marginVertical: 10,
      borderRadius: 10,
      paddingHorizontal:10
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 30,
  },
  profile: {
    marginVertical: 10,
  },
});
