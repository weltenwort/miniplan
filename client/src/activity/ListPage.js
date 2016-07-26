import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createActivity, loadActivities } from './actions';
import ActivityList from './List';
import { selectActivities } from './selectors';


class Page extends Component {
  render() {
    const { activities = [], createActivity, loadActivities } = this.props

    return (
      <div className="c-text o-container o-container--large o-panel o-panel-container">
        <nav className="c-nav c-nav--light c-nav--top c-nav--inline">
          <div className="c-nav__item" onClick={createActivity}>
            Add Activity
          </div>
          <div className="c-nav__item c-nav__item--right" onClick={loadActivities}>
            Reload
          </div>
        </nav>
        <ActivityList activities={activities} />
      </div>
    );
  }

  componentDidMount() {
    this.props.loadActivities();
  }
}

const mapStateToProps = (state) => ({
  activities: selectActivities(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createActivity, loadActivities }, dispatch);

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);


export default PageContainer;
