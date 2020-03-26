import React from 'react';
import YouTube from 'react-youtube';

class CloudVideo extends React.Component {
    render() {
        const opts = {
            // height: '310px',
            // width: '310px',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            },
            position: 'relative',
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25
        };

        return (
            <YouTube
                className="video"
                videoId="yHZRo2DfbMk"
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default CloudVideo;
