import React, { PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import Actions from '../actions/Actions'
import validator from '../lib/validator'
import { post, get } from '../lib/service'
import Store from '../stores/Store'
import Immutable from 'immutable'
import classNames from 'classnames'
import path from 'path'
// import '../../styles/DetailHomeworkItem.scss'
import Unlooks from './Unlooks.react'
import moment from 'moment'

const DetailHomeworkItem = React.createClass({
  propTypes: {
    homework: PropTypes.object.isRequired,
    userAccount: PropTypes.string.isRequired,
    organizationAccount: PropTypes.string.isRequired
  },
  render: function() {
    var homework = this.props.homework;
    return (
      <li key={homework.get('_id')}>
        <div  className={classNames({'detail-homework-item-container': true })} onClick={this.props.onClick}>
          <ul className="detail-homework-item-attribute-list">
            <li>
              <div>
                <span className="attribute-name">Name: </span>
                <span className="detail-homework-name">{homework.get('name')}</span>
              </div>
            </li>
            <li>
              <div>
                <span className="attribute-name">Start Date: </span>
                <span className="detail-homework-start-date">{moment(homework.get('join_on')).calendar()}</span>
              </div>
            </li>
            <li>
              <div>
                <span className="attribute-name">Deadline: </span>
                <span className="detail-homework-deadline">{moment(homework.get('deadline')).calendar()}</span>
              </div>
            </li>
            <li>
              {/*we can use message to remind here*/}
              <Unlooks unlooks={homework.get('unlooks') } />
            </li>
            <li>
              <div>
                <span className="attribute-name">Content: </span>
                <p className="detail-homework-content">{homework.get('content')}</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
    )
  },
  onDestroyClick: function() {
    // TodoActions.destroy(this.props.homework.id);
    console.log('destroy');
  }

});

export default DetailHomeworkItem

// var Homework =  { //作业类
//   _id: ObjectId,              
//   name: String,              //作业名字
//   content: String,           //作业内容
//   deadline: Date,            //作业截止日期
//   join_on: Date,
//   unlooks: [String],           //没点开作业的同学的账号
//   // unlooks_num: Number         //没查看的人数  //deprecated
// });