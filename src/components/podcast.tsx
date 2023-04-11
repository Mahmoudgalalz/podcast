import * as React from "react"
import Player from 'react-material-music-player'
import { Track, PlayerInterface } from 'react-material-music-player'
import { usePodcastdata } from "../hooks/podcastData"


function formTracks(podcast:any):Track[]{
    const Tracks:Track[]=[];
    podcast.map(pod=>{
        const track=new Track(
            pod.node.id,
            pod.node.itunes.image,
            pod.node.title,
            "Mahmoud Galal",
            pod.node.enclosure.url
        )
        Tracks.push(track)
    })
    
    return Tracks;
}
export default function Podcast(){
        const data = usePodcastdata();
        const tracks = formTracks(data);
        
        PlayerInterface.play(tracks)
        return (
            <Player  sx={{width:"100vw", position:"fixed", right:'0'}} ></Player>
        )
    }