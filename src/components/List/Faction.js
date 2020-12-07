import React, {useState} from 'react';
import "../../tailwind.output.css";

const Faction = () => {

    
    const [faction, setFaction] = useState();
    const [customTactic, setCustomTactic] = useState(false);

    function toggleCustomTactic() {
        setCustomTactic(!customTactic);
    }
    
    return (
        <>
            <form >
                <h2 className="dougs-header-text">Faction</h2>

                <h2 className="dougs-header-text">Subfaction</h2>
                <select name="sub-factions" id="sub-factions">
                    <option value="ultramarines">Ultramarines</option>
                    <option value="imperial-fists">Imperial Fists</option>
                    <option value="ravenguard">Ravenguard</option>
                </select>
                <div>
                    <input type="checkbox" name="custom" value="Custom" onChange={() => toggleCustomTactic()} />
                    <label className="dougs-header-text" htmlFor="custom"> Custom</label>
                </div>
                {customTactic &&
                    <div>
                        <label className="hidden" htmlFor="customName"></label>
                        <input type="text" name="customName" />
                        <select name="tactic1" id="tactic1">
                            <option value="bolter-fusillades">Bolter Fusillades</option>
                            <option value="whirlwind-of-rage">Whirlwind of Rage</option>
                            <option value="rapid-assault">Rapid Assault</option>
                        </select>
                        <select name="tactic2" id="tactic2">
                            <option value="bolter-fusillades">Bolter Fusillades</option>
                            <option value="whirlwind-of-rage">Whirlwind of Rage</option>
                            <option value="rapid-assault">Rapid Assault</option>
                        </select>
                    </div>
                }
            </form>
        </>
    );
}

export default Faction;