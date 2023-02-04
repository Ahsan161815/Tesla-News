import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    return (
      <div className="card h-100">
        <img src={this.props.imageUrl} style={{height:"200px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}...</p>
          <a href={this.props.newsUrl} target="_blank" className="btn-sm">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
