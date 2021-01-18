import React, {Component} from 'react';
import './Clock.css';
import moment from 'moment';

export default class Clock extends Component {
   constructor(props) {
       super(props);
       this.state = {
           time: moment().utcOffset(this.props.timezone * 60).format('LTS'),
       };
   }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }


    tick() {
        this.setState({
            time: moment().utcOffset(this.props.timezone * 60).format('LTS')
        });
    }

    render() {
        return (
            <div className='clock'>
                <span className='clock-name'>{this.props.name}</span>
                <div className='clock-time'>{this.state.time}</div>
                <button
                    type='button'
                    className='clock-delete'
                    onClick={this.props.onDelete}
                >X</button>
            </div>
        )
    }


}