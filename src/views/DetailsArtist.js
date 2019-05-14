import React, { Component } from "react";
import Header from "../components/Header"
import ArtistInfos from "../components/ArtistInfos"
import MusicsPerYear from "../components/MusicsPerYear"
import Genre from "../components/Genre"
import WordsMostUsed from "../components/WordsMostUsed"
import AlbumsRates from "../components/AlbumsRates"

class DetailsArtist extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log("##### JE SUIS ICI : " + this.props.location.state.artistId);

    return (
      <div className="container">
        <Header/>
        <ArtistInfos artistId={this.props.location.state.artistId}/>
        <MusicsPerYear artistId={this.props.location.state.artistId}/>
        <Genre artistId={this.props.location.state.artistId}/>
        <WordsMostUsed/>
        <AlbumsRates artistId={this.props.location.state.artistId}/>
      </div>
    );
  }
}

export default DetailsArtist;
