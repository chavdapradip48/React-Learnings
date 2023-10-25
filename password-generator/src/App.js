import './App.css';
import {useCallback, useState, useEffect} from 'react'

function App() {

  const [password, setPassword] = useState("Password");
  const [passwordLength, setPasswordLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);

  let passwordGenerator = useCallback(() => {
    let generatedPassword = '';
    
    let passwordSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(isNumber) passwordSource+= '1234567890';
    if(isCharacter) passwordSource+= '!@#$%^&*-_=+[]{}`~';
    
    for (let index = 0; index < passwordLength; index++) {
      let randomChar = Math.floor(Math.random() * passwordSource.length + 1);
      generatedPassword += passwordSource.charAt(randomChar);
    }
    setPassword(generatedPassword)
  }, [passwordLength, isNumber, isCharacter, setPassword])

  useEffect(()=> {
    passwordGenerator()
  },[passwordLength, isNumber, isCharacter, setPassword])

  let copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  },[password]);

  return (
    <div className="main-container">
        <h2>Password Generator</h2>
        <div className="password-container">
          <input type="button" value="Generate" id="generate" onClick={passwordGenerator} />
          <input type="text" name="password" id="password" value={password} readOnly/>
          <input type="button" value="Copy" id="copy" onClick={copyPassword} />
        </div>
        <div className="password-settings">
          <span className="pass-len-box">
            <input type="range" name="Password Length" id="password-length" min={6} max={50} value={passwordLength}
            onChange={(e) => {setPasswordLength(e.target.value)}}/>
            <label>Length ({passwordLength})</label>
          </span>
          <span className="number-len-box">
            <input type="checkbox" name="Number Allowed" id="number-allowed" defaultChecked={isNumber}  
            onChange={() => {setIsNumber((prev) => !prev)}}/>
            <label>Number Allowed</label>
          </span>
          <span className="char-len-box">
            <input type="checkbox" name="Special Character Allowed" id="char-allowed" 
              onChange={() => {setIsCharacter((prev) => !prev)}} defaultChecked={isCharacter}/>
            <label>Character Allowed</label>
          </span>
        </div>
    </div>
  );
}

export default App;
