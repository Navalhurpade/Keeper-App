import React from 'react'

function Footer(){
  const date = new Date()
  return <footer>Copyright@{date.getFullYear()}</footer>
}
export default Footer
