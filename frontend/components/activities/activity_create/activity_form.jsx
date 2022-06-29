import React from 'react';

class ActivityForm extends React.Component {
    constructor(props) {
        super(props)
        if (props.formType === 'Create a Post') {
            this.state = {
                title: "",
                body: "",
                distance: "",
                pace: "",
                hours: "",
                minutes: "",
                seconds: "",
                posted_on: new Date(),
                author_id: props.currentUser.id
            }
        } else {
            this.state = {
                title: props.activity.title,
                body: props.activity.body,
                distance: props.activity.distance,
                pace: props.activity.pace,
                hours: props.activity.hours,
                minutes: props.activity.minutes,
                seconds: props.activity.seconds,
                posted_on: props.activity.posted_on,
                author_id: props.activity.author_id
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.formType === 'Create a Post') {
            this.props.createActivity(this.state)
                .then(() => this.props.history.push('/dashboard/my_activities'))
        } else {
            this.props.updateActivity({...this.state, id: this.props.match.params.id})
                .then(() => this.props.history.push('/dashboard/my_activities'))
        }
    }

    handleCancel = e => {
        this.props.history.push('/dashboard/my_activities')
    }

    update = (feild) => {
        return e => {
            this.setState({ [feild]: e.currentTarget.value })
        }
    }


    render() {
        return (
            <div className='create-ent-container'>
                <div className='create-container'>
                    <p className='create-title'>{this.props.formType}</p>
                    <form className='create-form' onSubmit={this.handleSubmit}>
                        <div className='create-num-input-container'>
                            <div className='create-label-container'>
                                <label className='create-label'>Distance</label>
                                <div className='create-num-container'>
                                    <input 
                                        className='create-num-input'
                                        type="text"
                                        disabled={(this.props.activity === undefined || this.props.activity.staticMapUrl === null) ? '' : 'disabled'}
                                        value={this.state.distance}
                                        onChange={this.update('distance')}
                                    />
                                    <abbr title="miles">miles</abbr>
                                </div>
                            </div>
                            <div className='create-label-container'>
                                <label className='create-label'>Pace</label>
                                <div className='create-num-container'>
                                    <input 
                                        className='create-num-input'
                                        type="text"
                                        disabled={(this.props.activity === undefined || this.props.activity.staticMapUrl === null) ? '' : 'disabled'}
                                        value={this.state.pace}
                                        onChange={this.update('pace')} 
                                    />
                                    <abbr title="mi/hr">mi/hr</abbr>
                                </div>
                            </div>
                            <div className='create-label-container'>
                                <label className='create-label'>Time</label>
                                <div className='create-ent-time-container'>
                                    <div className='create-time-container'>
                                        <input 
                                            type="text"
                                            placeholder='00'
                                            disabled={(this.props.activity === undefined || this.props.activity.staticMapUrl === null) ? '' : 'disabled'}
                                            value={this.state.hours}
                                            onChange={this.update('hours')}
                                        />
                                        <abbr title="hours">hr</abbr>
                                    </div>
                                    <div className='create-time-container'>
                                        <input 
                                            type="text"
                                            placeholder='00'
                                            disabled={(this.props.activity === undefined || this.props.activity.staticMapUrl === null) ? '' : 'disabled'}
                                            value={this.state.minutes}
                                            onChange={this.update('minutes')}
                                        />
                                        <abbr title="minutes">min</abbr>
                                    </div>
                                    <div className='create-time-container'>
                                        <input 
                                            type="text" 
                                            placeholder='00'
                                            disabled={(this.props.activity === undefined || this.props.activity.staticMapUrl === null) ? '' : 'disabled'}
                                            value={this.state.seconds}
                                            onChange={this.update('seconds')}
                                        />
                                        <abbr title="seconds">s</abbr>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='create-text-container'>
                            <label className='create-label'>Title</label>
                            <input 
                                className='create-title-input'
                                type="text" 
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </div>
                        <div className='create-text-container'>
                            <label className='create-label'>Description</label>
                            <div>
                                <textarea
                                    className='create-description-input'
                                    type="text"
                                    value={this.state.body}
                                    onChange={this.update('body')} 
                                />
                            </div>
                        </div>
                        <div className='create-btn-container'>
                            <button className='create-submit-btn' type='submit'>{this.props.formButton}</button>
                            <button className='create-cancel-btn' onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
                <div>
                    {
                        this.props.formType === 'Edit Post' && this.props.activity.staticMapUrl ? (
                            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:${activity.staticMapUrl}&key=${window.MAPS_API_KEY}`} alt="" />
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ActivityForm;