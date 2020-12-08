import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function SearchArtist(props) {
  const [results, setResults] = useState(null);
  const { artist } = useParams();

  useEffect(() => {
    (async() => {
      let res = await fetch(`https://itunes.apple.com/search?term=${artist}`);
      let results = await res.json();
      console.log(results);
      setResults(results.results);
    })();
  }, []);


  return (
    <>
      <div className="card bg-dark mb-3">
        <div className="row">
          <div className="col-sm-2"><Link to={'../'} className="btn m-3 btn-lg btn-secondary">Home</Link></div>
          <div className="col-sm-10"><h1 className="text-light m-3" style={{textTransform: "capitalize"}}>Searching for: {artist}</h1></div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {results?.map((result) => {
      return (
        <div key={result.trackId} className="card card-search bg-dark">
          <a href={result.artistViewUrl}><img height="150" width="150" src={result.artworkUrl100} className="card-img-top" alt={result.trackCensoredName} /></a>
          <div className="card-body bg-dark text-light">
            <p className="card-text"><b>Track Name:</b> {result.trackCensoredName}<br /><b>Artist:</b> {result.artistName}</p>
            <audio controls preload="none">
              <source src={result.previewUrl} type="audio/mp4" />
            </audio>
          </div>
        </div>
      );
    })}
      </div>
    </>
  );

}

export default SearchArtist;