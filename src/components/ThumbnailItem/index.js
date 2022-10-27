// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickedImage, activeThumbnailId} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageDetails

  const imageClicked = () => {
    clickedImage(id)
  }

  const imageStyleTabs = activeThumbnailId === id ? 'image_tab' : 'change_image'

  return (
    <li>
      <button className="button_image" type="button" onClick={imageClicked}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imageStyleTabs}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
