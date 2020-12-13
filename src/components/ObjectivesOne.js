import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';




const ObjectivesOne = () => {

    const [p1Score, setp1Score] = useState(0);
    const [scoreModifier, setScoreModifier] = useState(0);
    const [checked, setChecked] = useState(false);

    let newScore = 0;
    let modifierTotal = 0;


    useEffect(() => {
        updateScoreWithoutValue();
        // console.log(newScore);
        updateScoreWithValue();
        // console.log(modifierTotal);
        const updatedScore = newScore + modifierTotal;
        console.log(updatedScore);
        updateScorep1updatedScore);
        },
    );

    const updateScoreWithoutValue = () => {
        let numberOfCheckedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
        newScore =  numberOfCheckedBoxes * 5;
        return newScore;
    };

    const updateScoreWithValue = () => {
        let fieldsWithModifiers = document.querySelectorAll('input[type="text"].modifier');

        for(let i = 0;i < fieldsWithModifiers.length; i++){
             if(parseInt(fieldsWithModifiers[i].value))
                modifierTotal += parseInt(fieldsWithModifiers[i].value);
        }
        // document.getElementById('total').value = tot;
        return modifierTotal;
        }

    return (
            <UserContext.Consumer>
                {({ user, updateScorep1 }) => (
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>Primary</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="checkboxes">
                                <td className="p-1">
                                    Hold 1
                                </td>


                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r1"></label> 
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r1" name="p1o1r1" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r2"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r2" name="p1o1r2" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r3"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r3" name="p1o1r3" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r4"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r4" name="p1o1r4" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o1r5"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r5" name="p1o1r5" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                            </tr>
                            <tr>
                                <td className="p-1">
                                Hold 2
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r1"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r1" name="p1o2r1" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r2"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r2" name="p1o2r2" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r3"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r3" name="p1o2r3" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r4"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r4" name="p1o2r4" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r5"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r5" name="p1o2r5" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                            </tr>
                            <tr>
                                <td className="p-1">
                                    Hold more
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r1"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r1" name="p1o3r1" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r2"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r2" name="p1o3r2" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r3"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r3" name="p1o3r3" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r4"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r4" name="p1o3r4" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r5"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r5" name="p1o3r5" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                        <tr className ="p-1">
                            <th>Secondary</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className ="p-1">
                                Engadge on all fronts
                            </td>   
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r1"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s1r1" name="p1s1r1" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r2"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s1r2" name="p1s1r2" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r3"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s1r3" name="p1s1r3" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } />
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r4"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s1r4" name="p1s1r4" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } />
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r5"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s1r5" name="p1s1r5" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } />
                            </td>
                        </tr>
                        <tr>
                            <td className ="p-1">
                                Raise the Banners high
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r1"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s2r1" name="p1s2r1" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r2"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s2r2" name="p1s2r2" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r3"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s2r3" name="p1s2r3" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } />
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r4"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s2r4" name="p1s2r4" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } />
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r5"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s2r5" name="p1s2r5" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                        </tr>
                        <tr>
                            <td className ="p-1">
                                While we stand we fight
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r1"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s3r1" name="p1s3r1" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r2"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s3r2" name="p1s3r2" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } />
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r3"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s3r3" name="p1s3r3" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r4"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s3r4" name="p1s3r4" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r5"></label> 
                                <input className="dougs-smalltextbox modifier" type="text" size="2" maxLength="2" id="p1s3r5" name="p1s3r5" defaultValue="" onChange={ (e) => setScoreModifier(e.target.value) } /> 
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            )}
        </UserContext.Consumer>
    )
};

export default ObjectivesOne;