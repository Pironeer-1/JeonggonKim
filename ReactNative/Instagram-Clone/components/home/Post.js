import React from 'react'
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import {Divider} from 'react-native-elements'

const Post = ({ post}) => {
    return (
        <View style={{marginBottom:30}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostFooter />
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style ={{flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin:5, 
    alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri:post.profile_picture}} style={styles.story}/>   
            <Text style={{color:'white', marginLeft:5}}> 
            {post.user}
            </Text>
        </View>
        <Text style={{color:'white'}}> ... </Text>
    </View>
)

const PostFooter = () => (
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].image}/>
    )

const Icon = ({imgStyle, imgUrl}) => {
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri:imgUrl}} />
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    story : {
        width: 35,
        height:35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    footerIcon : {
        width: 33,
        height:33,

    }
})

export default Post
