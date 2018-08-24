import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';



export class Module extends Component {
    render() {
        const images = [
            {
              original: '/bihariju/v-banke-bihariji-akshayatritiya.jpg',
              thumbnail: '/bihariju/v-banke-bihariji-akshayatritiya.jpg',
            },
            {
              original: '/bihariju/shri-banke-bihari-ji.jpg',
              thumbnail: '/bihariju/shri-banke-bihari-ji.jpg'
            },
            {
              original: '/bihariju/radhastami-2010.jpg',
              thumbnail: '/bihariju/radhastami-2010.jpg'
            }
          ]
      
      return (
        <div>THis is my module
             <ImageGallery items={images} />
        </div>
      )
    }
  }