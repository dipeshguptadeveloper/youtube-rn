import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

const VideoListItem = ({ video }) => {
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
          <Text style={styles.time}>{video.duration}</Text>
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
            {video.user.name + " " + video.views + ' views' + " " + video.createdAt}
          </Text>
        </View>
        {/* icon */}
        <Entypo name="dots-three-vertical" size={16} color="white" />
      </View>
    </View>
  );
};

export default VideoListItem;
