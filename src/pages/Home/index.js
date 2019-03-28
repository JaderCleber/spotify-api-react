import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../store/actions'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({
  title: state.title
})

const HomePage = ({ title, dispatch }) => (
  <div>
    <p>
      The application title is {title}
    </p>
    <button onClick={() => dispatch(actions.search())}>Search</button>
  </div>
)

HomePage.propTypes = {
  title: PropTypes.string,
}

HomePage.defaultProps = {
  title: '',
}

export default connect(mapStateToProps)(HomePage)