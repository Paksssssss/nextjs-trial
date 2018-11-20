import React from 'react'
import Layout from '../components/Layout'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withStyles from '@material-ui/core/styles/withStyles';

import { addCount,serverRenderClock } from '../actions/testActions'
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Count extends React.Component {
  static getInitialProps({store, isServer}) {
    // console.log(ctx)
    store.dispatch(addCount())
    return {isServer}
  }

  constructor(props) {
    super(props)
    console.log(props)
  }

  add = () => {
    this.props.addCount()
  }

  render() {
    const { count,light } = this.props
    return (
      <Layout>
        <h1>Hello Count</h1>
        <p>Count : {count}</p>
        <button onClick={this.add}>Add!</button>
        {
          light? 
          (
            <div>
              <p>hello</p>
            </div>
          ) : 
          (
            <div>

            </div>
          )
        }

          
        
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  count: state.test.count,
  light: state.test.light
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCount : bindActionCreators(addCount, dispatch)
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  // withStyles(styles)
)(Count);