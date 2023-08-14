import React from 'react'

export default function SubscribeForm() {
  return (
    <>
    <div className='main-div'>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates.</p>

      <form className='subscribe_form'>
        <div className='input-field'> 
        <input placeholder='firstName' type='text'/>
        <input placeholder='lastName' type='text'/>
        <input placeholder='Email' type='text'/>
        </div>
        <button>Subscribe</button>
      </form>
      </div>
      
    </>
  )
}
