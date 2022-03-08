import React,{useState} from 'react'
import "../../styles/ToggleSwitch.css"
const ToggleSwitch = () => {
    const [isToggled, setIsToggled] = useState(true);
    const onToggle = () => setIsToggled(!isToggled);
  return (
    <div> <label className="toggle-switch">
    <input type="checkbox" checked={isToggled} onChange={onToggle} />
    <span className="switch" />
  </label></div>
  )
}

export default ToggleSwitch