import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../../tailwind.output.css";
import { data } from 'autoprefixer';

const Faction = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [faction, setFaction] = useState();

    useEffect(() => {
        populateFaction();
    }, []);
    
    
    async function populateFaction() {
        try {
          const response = await axios.get('http://localhost/battletracker/server/api/faction/read.php')
          setFaction(response.data);
          setLoading(false);
          setError(false);
          console.log(faction);
        } catch (err) {
          setError(true);
          setLoading(false);
        }
    }

    {/* Loading */}
    if (loading) {
        return (
        <>
            <p>Fetching your factions...</p>
        </>
        );
    }
    
    {/* If Axios request has an error, display error message...*/}
    if (error) {
        return (
        <>
            <p>Failed fetching factions.</p>
        </>
        )
    } 

    return (
        <>
            <form >
                <h2 className="dougs-header-text">Faction</h2>

                {/* <select name="factions" id="factions">
                    <option value="space-marines">Space Marines</option>
                    <option value="necrons">Necrons</option>
                    <option value="tyranids">Tyranids</option>
                </select> */}

                <h2 className="dougs-header-text">Subfaction</h2>
                <select name="sub-factions" id="sub-factions">
                    <option value="ultramarines">Ultramarines</option>
                    <option value="imperial-fists">Imperial Fists</option>
                    <option value="ravenguard">Ravenguard</option>
                </select>

                <input type="checkbox" id="custom" name="custom" value="Custom" />
                <label className="dougs-header-text" htmlFor="custom"> Custom</label>
            </form>
        </>
    );
}

export default Faction;