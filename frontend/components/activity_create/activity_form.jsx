import React from 'react';

class ActivityForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            distance: "",
            pace: "",
            hours: "",
            minutes: "",
            seconds: "",
            posted_on: "",
            author_id: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const date = new Data();
        this.setState({authorId: this.props.currentUser.id})
        this.setState({posted_on: date})
        this.props.createActivity(this.state)
            .then(() => this.props.history.push('/dashboard/my_activities'))
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Distance</label>
                        <input 
                            type="text" 
                            value={this.state.distance} 
                            onChange={this.update('distance')}
                        />
                    <label>Pace</label>
                        <input 
                            type="text"
                            value={this.state.pace}
                            onChange={this.update('pace')} 
                        />
                    <label>Time</label>
                        <input 
                            type="text"
                            value={this.state.hours}
                            onChange={this.update('hours')}
                        />
                        <input 
                            type="text" 
                            value={this.state.minutes}
                            onChange={this.update('minutes')}
                        />
                        <input 
                            type="text" 
                            value={this.state.seconds}
                            onChange={this.update('seconds')}
                        />
                    <label>Title</label>
                        <input 
                            type="text" 
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    <label>Description</label>
                        <textarea
                            type="text"
                            value={this.state.body}
                            onChange={this.update('body')} 
                        />
            
                    <button type='submit'>Create</button>
                    <button type='submit' onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ActivityForm;