import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '100px auto'
};

const Spinner = ({ loadingProp }) => {
  return (
    <ClipLoader 
      color='#4338ca'
      loading={loadingProp}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinner