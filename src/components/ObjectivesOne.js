import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {User1Context} from '../User1Context';
import {User2Context} from '../User2Context';

const ObjectivesOne = () => {
    const [p1Score, setp1Score] = useState(0);
    const [p2Score, setp2Score] = useState(0);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        updateScoreWithoutValue();
        },
    );

    const updateScoreWithoutValue = () => {
        let numberOfCheckedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
        let newScore =  numberOfCheckedBoxes * 5;
        setp1Score(newScore);
    };

    return (
        <User1Context.Consumer>
            {user1 => (
            <User2Context.Consumer>
                {user2 => (
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
                            <tr>
                                <td className="p-1">
                                    Hold 1
                                </td>
                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r1"></label> 
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r1" name="p1o1r1" value={checked} onChange={() => setChecked(checked => !checked)} /> 
                                </td>
                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r2"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r2" name="p1o1r2" value="p1o1r2"/> 
                                </td>
                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r3"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r3" name="p1o1r3" value="p1o1r3"/> 
                                </td>
                                <td className="p-1"> 
                                    <label className="hidden" htmlFor="p1o1r4"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r4" name="p1o1r4" value="p1o1r4"/> 
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o1r5"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o1r5" name="p1o1r5" value="p1o1r5"/> 
                                </td>
                            </tr>
                            <tr>
                                <td className="p-1">
                                Hold 2
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r1"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r1" name="p1o2r1" value="p1o2r1"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r2"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r2" name="p1o2r2" value="p1o2r2"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r3"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r3" name="p1o2r3" value="p1o2r3"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r4"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r4" name="p1o2r4" value="p1o2r4"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o2r5"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o2r5" name="p1o2r5" value="p1o2r5"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-1">
                                    Hold more
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r1"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r1" name="p1o3r1" value="p1o3r1"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r2"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r2" name="p1o3r2" value="p1o3r2"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r3"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r3" name="p1o3r3" value="p1o3r3"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r4"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r4" name="p1o3r4" value="p1o3r4"/>
                                </td>
                                <td className="p-1">
                                    <label className="hidden" htmlFor="p1o3r5"></label>
                                    <input className="dougs-checkbox" type="checkbox" id="p1o3r5" name="p1o3r5" value="p1o3r5"/>
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
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s1r1" name="p1s1r1" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r2"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s1r2" name="p1s1r2" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r3"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s1r3" name="p1s1r3" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r4"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s1r4" name="p1s1r4" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s1r5"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s1r5" name="p1s1r5" /> 
                            </td>
                        </tr>
                        <tr>
                            <td className ="p-1">
                                Raise the Banners high
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r1"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s2r1" name="p1s2r1" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r2"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s2r2" name="p1s2r2" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r3"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s2r3" name="p1s2r3" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r4"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s2r4" name="p1s2r4" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s2r5"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s2r5" name="p1s2r5" /> 
                            </td>
                        </tr>
                        <tr>
                            <td className ="p-1">
                                While we stand we fight
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r1"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s3r1" name="p1s3r1" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r2"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s3r2" name="p1s3r2" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r3"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s3r3" name="p1s3r3" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r4"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s3r4" name="p1s3r4" /> 
                            </td>
                            <td className="p-1"> 
                                <label className="hidden" htmlFor="p1s3r5"></label> 
                                <input className="dougs-smalltextbox" type="text" size="2" maxLength="2" id="p1s3r5" name="p1s3r5" /> 
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                )}
            </User2Context.Consumer>
            )}
        </User1Context.Consumer>
    )
};

export default ObjectivesOne;