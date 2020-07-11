import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import API from './API'
import Fav from './Fav'

const DataRouter = () => {
    return (
        <div>
            <Router>
     <Switch>
                    <Route path='/' component={API} exact />
                    <Route path='/Fav' component={Fav} />
     </Switch>
            </Router>       
        </div>
    )
}

export default DataRouter
