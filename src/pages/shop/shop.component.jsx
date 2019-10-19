import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect'


//import WithSpinner from '../../components/with-spinner/with-spinner.component';
//import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
//import CollectionPage from '../collection/collection.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
//import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {

  componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
  
      fetchCollectionsStartAsync();
  }

  render(){
    const {match, isCollectionFetching, selectIsCollectionsLoaded } = this.props
 //   const { loading } = this.state;
    return(
      <div className='shop-page'>
      <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
  </div>
    )
  }
  
}

// const mapStateProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);