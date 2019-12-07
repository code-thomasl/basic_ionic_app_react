import React, { Component } from 'react';
import { IonGrid, IonCol, IonRow, IonImg } from '@ionic/react';

// Example of a class with an API call to retrieve some images.

class ApiCallImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  
  componentDidMount() {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => this.setState({ images: data }));
  }

  render() {
    const { images } = this.state;
    return (
      <div className="imageElements">
            {images.map(image =>
                  <IonImg src={image.download_url} alt={image.author} style={{width: '500px', height: '500px'}}/>
            )}
      </div>
    );
  }

}
export default ApiCallImages;