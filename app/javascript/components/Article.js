import React from "react";
import PropTypes from "prop-types";
import Timestamp from 'react-timestamp';

class Article extends React.Component {
  shouldComponentUpdate(nextProps) {

  }

  render () {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="well well-lg">
              <div className="article-title">
                <a href={this.props.path}>{this.props.title}</a>
              </div>
              <div className="article-body">
                {this.props.description}
                <div className="article-meta-details">
                  <small>
                    Created by: {this.props.author},
                    &nbsp;
                    <Timestamp time={this.props.created_at} precision={4}/>,
                    last updated: <Timestamp time={this.props.updated_at} precision={4} />
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this._timer = setInterval(() => {
      this.forceUpdate()
    }, 5000)
  }

  // keeps timer from always running
  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer)
      this._timer = null;
    }
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string

};
export default Article
