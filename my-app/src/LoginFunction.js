import { useState } from 'react'

export default function LoginFunction(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    function handleInputChange(event){
        const {name, type, value, checked} = event.target

        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    function handleResetState(){
        setData({
          username: "",
          password: "",
          remember: false,
        })

      }

      function onLogin(event){
        event.preventDefault()
        console.log(data)

        handleResetState()
      }


    return(
        <form>
            <input onChange={handleInputChange} value={data.username} name="username" />
            <input onChange={handleInputChange} value={data.password} name="password" />
            <input onChange={handleInputChange} checked={data.remember} type="checkbox" name="remember" />
            <button
                onClick={onLogin}
                disabled={!data.username || data.password.length <= 8 ? true : false}>Cliccami!
            </button>
            <button onClick={handleResetState}>Reset</button>
        </form>
    )
} 