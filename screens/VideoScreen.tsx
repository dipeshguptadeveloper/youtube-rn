import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import video from "../assets/data/video.json";
import { AntDesign } from "@expo/vector-icons";

const VideoScreen = () => {
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  let viewsString = video.views.toString();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#141414" }}>
      {/* video player */}
      <Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />
      {/* video info */}
      <View style={styles.videoInfoContainer}>
        <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subtitle}>
          {video.user.name +
            " " +
            viewsString +
            " views" +
            " " +
            video.createdAt}
        </Text>
      </View>

      {/* action list */}
      <View style={styles.actionListContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="like2" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="sharealt" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="download" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="export" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="export" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="export" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="export" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.actionListItem}>
              <AntDesign name="export" size={20} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* user info */}

      <View style={styles.userInfoContainer}>
        <Image style={styles.avatar} source={{ uri: video.user.image }} />
        <View style={styles.userInfo}>
          <Text style={styles.userInfoName}>{video.user.name}</Text>
          <Text style={styles.userInfoSubscriber}>
            {video.user.susbcriber} subscribers
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.susbcribe}>Subscribe</Text>
        </TouchableOpacity>
      </View>
      {/* comments */}
      <View style={styles.userCommentContainer}>
        <Text style={styles.userTotalComment}>Comments 4.1K</Text>
        <View style={styles.userComment}>
          <Image
            style={styles.userCommentAvatar}
            source={{ uri: video.user.image }}
          />
          <Text style={styles.userCommentSubscriber}>
            Lorem ipsum dolor sit.
          </Text>
        </View>
      </View>
      {/* recommended videos */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoInfoContainer: {
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 5,
  },
  tags: {
    color: "#0094e3",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontSize: 13,
    fontWeight: "400",
  },
  actionListContainer: {
    marginVertical: 2,
  },
  actionListItem: {
    width: 60,
    height: 45,
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionText: {
    color: "white",
  },
  userInfoContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#3d3d3d",
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
  },
  userInfo: {
    marginHorizontal: 10,
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfoName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  userInfoSubscriber: {
    color: "lightgrey",
    fontSize: 16,
  },
  susbcribe: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
  userCommentContainer: {
    padding: 10,
  },
  userTotalComment: {
    color: "white",
  },
  userComment: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userCommentAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17,
    marginRight: 7,
  },
  userCommentSubscriber: {
    color: "white",
    fontSize: 16,
    marginRight: 5,
  },
});

export default VideoScreen;
