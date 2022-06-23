import React from 'react';
import CurrentUser from './currentuser';
import ActivitiesContainer from '../activities/activities_container';


// const Dashboard = ({currentUser, fetchAllActivities, fetchAllFollows}) => {

//     debugger

//     return (
//         <div>
//             <CurrentUser currentUser={currentUser} />
//             <ActivitiesContainer />
//         </div>
//     )
// }

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchAllActivities();
    //     this.props.fetchAllFollows();
    //     debugger
    // }

    render() {
        const {currentUser} = this.props;
        return (
            <div>
                <CurrentUser currentUser={currentUser} />
                <ActivitiesContainer />
            </div>
        )
    }
}

export default Dashboard;