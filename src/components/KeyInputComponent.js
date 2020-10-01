import React, {useState} from 'react';

class KeyInputComponent extends React.Component{
    // there must be a better way to do this?
    // props return React elemtns describing what should appear on the screen.

        return (
            <div className = "buttons">
                <button className ="operator" name="round" onClick={e => setVal(e.target.name)}/>
                    <button className ="operator" name="sq" onClick={e => setVal(e.target.name)}/>
                    <button className ="operator" name="back" onClick={e => setVal(e.target.name)}/>
                    <button className ="operator right" name="+" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="7" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="8" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="9" onClick={e => setVal(e.target.name)}/>
                    <button className ="operator right" name="/" onClick={e => setVal(e.target.name)}/><br/>
                    <button className ="num" name="4" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="5" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="6" onClick={e => setVal(e.target.name)}/>
                    <button className ="operator right" name="*" onClick={e => setVal(e.target.name)}/><br/>
                    <button className ="num" name="1" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="2" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="3" onClick={e => setVal(e.target.name)}/>
                    <button className ="operator right" name="-" onClick={e => setVal(e.target.name)}/><br/>
                    <button className ="operator" name="clear" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="0" onClick={e => setVal(e.target.name)}/>
                    <button className ="num" name="." onClick={e => setVal(e.target.name)}/>
                    <button className ="operator right" name="=" onClick={e => setVal(e.target.name)}/>
                    

            </div>
        );

}

export default KeyInputComponent;