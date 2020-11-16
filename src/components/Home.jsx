import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Home() {
    const [artist, setArtist] = useState('');

    return (
        <div className="card mt-5 bg-secondary">
            <div className="card-header mb-0 bg-dark text-secondary">
                <h5>Search Artist</h5>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <div className="card-body text-center bg-secondary">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Artist:</span>
                            </div>
                            <input type="text" onChange={e => setArtist(e.target.value)} aria-label="Artist-name" id="artist-input" className="form-control" />
                            <p id="alert text-alert"></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <Link to={`/search/${artist}`} className="btn mt-3 btn-lg btn-dark text-secondary">Search</Link>
                </div>
            </div>
        </div>

    );
}

export default Home;

/*
() => {
                        let artistInput = "";//document.getElementById('artist-input').value;
                        if(artistInput === "") {
                            let alertP = document.getElementById('alert').textContent;
                            let alert = document.createTextNode('Please enter an artist name.');
                            alertP.appendChild(alert);
                        } else {
                            return `./search/${artistInput}`;
                        }
                        */