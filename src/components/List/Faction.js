import React from 'react';
import "../../tailwind.output.css";

const Faction = () => {
    return (
        <>
            <h2 className="dougs-header-text">Faction</h2>
            <select name="factions" id="factions">
                <option value="space-marines">Space Marines</option>
                <option value="necrons">Necrons</option>
                <option value="tyranids">Tyranids</option>

            </select>

            <h2 className="dougs-header-text">Subfaction</h2>
            <select name="sub-factions" id="sub-factions">
                <option value="ultramarines">Ultramarines</option>
                <option value="imperial-fists">Imperial Fists</option>
                <option value="ravenguard">Ravenguard</option>
            </select>

            <input type="checkbox" id="custom" name="custom" value="Custom" />
            <label className="dougs-header-text" for="custom"> Chapter</label>
        </>
    );
}

export default Faction;