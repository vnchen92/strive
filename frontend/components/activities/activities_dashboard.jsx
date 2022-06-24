import React from 'react';
import { fetchDashboardPosts } from '../selectors/fetch_dashboard_activities';

// const ActivitiesDashboard = ({filteredActivities, fetchAllActivities, fetchAllFollows}) => {
//     fetchAllActivities();
//     fetchAllFollows();
//     return (
//         <div>
//             {
//                 Object.entries(filteredActivities)[1].map(activity => {
//                     return <h1>{activity.title}</h1>
//                 })
//             }
//         </div>
//     )
// }

class ActivitiesDashboard extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchAllFollows();
    //     this.props.fetchAllActivities();
    // }

    render () {
        return(
        // const pot = Object.entries(this.props.filteredActivities).map(activity => {
        //     debugger
        //     return <h1>{activity[1].title}</h1>
        // })
        <div>
        {
            Object.entries(this.props.filteredActivities)[1].map(activity => {
                return <h1>{activity.title}</h1>
            })
        }
        </div>
        )
    }
}

export default ActivitiesDashboard;