import React, { useEffect } from 'react'

const InformationPage = (props) => {
  console.log(props.route)
  useEffect(() => {
    if (Object.keys(props.pages).length === 0) {
      props.fetchPage("Home");
    }
    if (Object.keys(props.execRoles).length === 0) {
      props.fetchExec();
    }
  }, []);



  return (
    <>
    </>
  )
}

export default InformationPage