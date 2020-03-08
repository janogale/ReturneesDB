import React from 'react'

import './imagePreview.css'

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : ''

  return (
    <div className={'demo-image-preview ' + classNameFullscreen}>
      <img src={dataUri} alt="capture" />
    </div>
  )
}

export default ImagePreview
