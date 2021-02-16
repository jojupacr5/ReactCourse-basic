import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Component or pages
import Badges from '../pages/Badges'
import BadgeNews from '../pages/BadgeNews'
import NotFound from '../pages/NotFound'
import BadgeShow from '../pages/BadgeShow'
import Layout from './Layout'
import Home from '../pages/Home'

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNews} />
                    <Route exact path="/badges/:characterId" component={BadgeShow} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App