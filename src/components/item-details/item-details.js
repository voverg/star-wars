import React from 'react';

import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner';
import './item-details.css';

const Record = ({field, label, item}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

export {Record};

export default class ItemDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false
        });
      });
  }

  render() {
    if (!this.state.item) {
      return <span>Select any item to see an information about him.</span>
    }

    const {item, image, loading} = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <ItemView item={item} image={image} children={this.props.children} /> : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    );
  }

}


const ItemView = ({item, image, children}) => {
  const {id, name, gender, birthYear, eyeColor} = item;

  return (
    <React.Fragment>
      <img className="item-image"
        src={image}
        alt={`${name} image`}
        title={`${name}`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, {item});
          })
        }
{/*          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>

          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>

          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>*/}
        </ul>
      </div>
    </React.Fragment>
  );
}
