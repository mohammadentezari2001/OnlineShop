import { useEffect, useState } from "react"

export const Welcome=()=>{

  const [showWelcome,setShowWelcome]=useState(true)
  useEffect(()=>{

    localStorage.getItem('show_intro')
    const dataa=JSON.parse(localStorage.getItem('show_intro'))
    setShowWelcome((dataa)??true)
  },[])



    

const onHideWelcome=()=>{
  setShowWelcome(false)
  localStorage.setItem('show_intro',JSON.stringify(false))
    
}

return(
    showWelcome && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>WELCOME!</strong> You should check in on some of those fields below.
    <button onClick={onHideWelcome} type="button" className="close btn" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)
}