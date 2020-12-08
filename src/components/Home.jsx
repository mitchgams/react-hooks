import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Home() {
    const [artist, setArtist] = useState('');
    const history = useHistory();

    const handleKeyDown = e => {
        if(e.code === "Enter" && artist !== "") {
            history.push('/search/' + artist);
        }
    }

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
                            <input type="text" onKeyDown={handleKeyDown} onChange={e => setArtist(e.target.value)} aria-label="Artist-name" value={artist} placeholder="Gucci" className="form-control" />
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