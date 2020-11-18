import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Home() {
    const [artist, setArtist] = useState('');

    useEffect(() => {
        /*************
         * slapped this in a try/catch because every 
         * once in a while
         * doc.gtElmtBId("artst-inpt") is null???
         */
        try {
            let input = document.getElementById("artist-input");
            input.addEventListener("keydown", (e)=> {
                if(e.key === "Enter" && input.value !== "") {
                    document.getElementById("clickyClick").click();  // aye
                }
            });
        return ('');
        } catch(error) {
            console.error(error);
        }
    }, []);

    return (
        <div className="card mt-5 bg-secondary">
            <div className="card-header mb-0 bg-dark text-secondary">
                <h5>Search Music Artists.</h5>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <div className="card-body text-center bg-secondary">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Artist:</span>
                            </div>
                            <input type="text" onChange={e => setArtist(e.target.value)} aria-label="Artist-name" id="artist-input" placeholder="Gucci" className="form-control" />
                            <p id="alert text-alert"></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <Link to={`/search/${artist}`} className="btn mt-3 btn-lg btn-dark text-secondary" id="clickyClick">Search</Link>
                </div>
            </div>
        </div>

    );
}

export default Home;