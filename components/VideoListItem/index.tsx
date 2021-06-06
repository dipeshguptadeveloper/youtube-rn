import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

const VideoListItem = ({ video }) => {
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  let viewsString = video.views.toString();

  if (video.views > 1_000_000) {
    viewsString = video.views / 1_000_000 + "m";
  } else if (video.views > 1_000) {
    viewsString = video.views / 1_000 + "k";
  }

  return (
    <View style={styles.videoCard}>
      {/* thumbnail */}
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </Text>
        </View>
      </View>
      {/* title row */}
      <View style={styles.titleRow}>
        {/* avatar */}
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        {/* title  */}
        <View style={styles.middleContainer}>
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
        {/* icon */}
        <Entypo name="dots-three-vertical" size={16} color="white" />
      </View>
    </View>
  );
};

export default VideoListItem;
