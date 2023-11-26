import React,{useState, useContext} from 'react'
import UserContext from './context/UserContext';
import './cotext.css'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {user,setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    user ? 
    <></> 
        :
    <div className='main-container-context'>
        <form>
        <div className="form-group">
            <label htmlFor="exampleInputUsername">Email address</label>
            <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            placeholder="Enter username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
        </button>
        </form>
    </div>
  )
}
