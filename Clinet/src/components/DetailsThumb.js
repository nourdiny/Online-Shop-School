import React, { Component } from 'react'

export class DetailsThumb extends Component {
    render() {
        const {images, tab} = this.props;
        return (
            <div className="thumb" >
                {
                images.map((img, index) =>(
                    <img src={img} alt="" key={index} 
                    // onClick={() => tab(index)}
                    />
                ))
                }
            </div>
        )
    }
}

export default DetailsThumb
