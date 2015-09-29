/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 'use strict';

 var React = require('react-native');
 var {
   AppRegistry,
   StyleSheet,
   Image,
   Text,
   View,
   TextInput,
 } = React;

 var BOX_REF = "BOX";
 var precomputeStyle = require('precomputeStyle');

 var TimerMixin = require('react-timer-mixin');
 var arrayIndex = 0;

 var MOCKED_MOVIES_DATA = [
   {title: 'Jobs', year: '2015', posters: {thumbnail: 'http://images.designntrend.com/data/images/full/58340/steve-jobs.png'}},
   {title: 'Steve', year: '2015', posters: {thumbnail: 'http://cdn.newsapi.com.au/image/v1/external?url=http%3A%2F%2Fcontent5.video.news.com.au%2FNDM_-_news.com.au%2F235%2F449%2Fjobs.jpg&width=650&api_key=kq7wnrk4eun47vz9c5xuj3mc'}},
   {title: 'Jobs', year: '2015', posters: {thumbnail: 'https://iflist.files.wordpress.com/2015/05/1000509261001_1822941199001_bio-biography-31-innovators-steve-jobs-115958-sf.jpg?w=608&h=400&crop=1'}},
   {title: 'Steve', year: '2015', posters: {thumbnail: 'http://cdn.bgr.com/2015/09/steve-jobs-trailer.jpg'}},
   {title: 'Jobs', year: '2015', posters: {thumbnail: 'http://www.bitrebels.com/wp-content/themes/distinctive/img_resize/timthumb.php?src=http://www.bitrebels.com/wp-content/uploads/2013/01/jobs-trailer-biopic-movie-header.jpg&h=318&w=312&zc=1'}},
   {title: 'Steve', year: '2015', posters: {thumbnail: 'http://thecelebritynewsblog.com/wp-content/uploads/2015/05/kartinka-735x400.jpg'}},
   {title: 'Jobs', year: '2015', posters: {thumbnail: 'http://photos2.appleinsidercdn.com/sculley-120112.jpg'}},

 ];

 var MindBender = React.createClass({
   mixins: [TimerMixin],

   getInitialState() {
 		return {
 			arrayIndex: 0
     }
   },

   componentDidMount() {
     this.setInterval(() => {
       arrayIndex = arrayIndex + 1;
      // var nativeProps = precomputeStyle({transform: [{rotate: rotation.toString() + "deg"}]});
 		//	this.refs[BOX_REF].setNativeProps(nativeProps);
    if (arrayIndex===7) {
      arrayIndex=0;
    }
     });


     this.setInterval(() => {
 			this.setState({arrayIndex: this.state.arrayIndex + 1});
    }, 400);

   },

   render: function() {
    var movie = MOCKED_MOVIES_DATA[arrayIndex];

    console.log("In here and your arrayIndex is ");
    console.log(arrayIndex);
     return (
       <View style={styles.box} >
      <Image source={{uri: movie.posters.thumbnail}}
             style={styles.thumbnail}
       />
       </View>
     );
   }
 });

 var styles = StyleSheet.create({
   box: {
     marginTop: 100,
     width: 200,
     height: 200,
     alignSelf: 'center',
   },
   thumbnail: {
  marginTop: 100,
  width: 200,
  height: 200,
  resizeMode: 'cover',
},

 });


AppRegistry.registerComponent('MindBender', () => MindBender);
 module.exports = MindBender;
