import React, {Component} from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component {
  constructor(){
    super()
    this.state = {
      sections : [
        {
          title: 'bags',
          imageUrl: 'https://i.ibb.co/VTkDzWQ/backpack-main.jpg',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/P5KkPBP/jacket-main.jpg',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/XVHMNY8/Sneaker-Feature.jpg',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/jw61Z63/women.jpg',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/Yhh6pLT/men.jpg',
          id: 4
        },

      ]
    }
  }
  render(){
   
    return(
      <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl}/>))}
      </div>
    )
  }
}

export default Directory