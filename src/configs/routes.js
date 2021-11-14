import React, { useContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Category from "../components/categories-page/category";
import MartialArts from "../components/martial-arts/martial-arts";
import { GlobalContext } from "../context/context";
import Home from "../screens/home";
import MyAdmin from "../screens/my-admin/my-admin";

import { collection,getDocs,db} from "./firebase";

function Routes(){
    let {state , dispatch} = useContext(GlobalContext)
    useEffect(async function(){
        let dataRef = collection(db, "karate-uniforms")
        let data = await getDocs(dataRef);
        data.forEach(function(doc){
            dispatch({type : "KARATE_UNIFORMS" , payload: doc})
        })
    },[])
      
    useEffect(async function(){
        let dataRef = collection(db, "jiu-jitsu-uniforms")
        let data = await getDocs(dataRef);
        data.forEach(function(doc){
            dispatch({type : "JIU_JITSU_UNIFORMS" , payload: doc})
        })
    },[])
    return(
        <>
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/category' >
                    <Category />
                </Route>
                <Route path='/martial-arts/:id' >
                    <MartialArts />
                </Route>
                <Route path='/my-admin' >
                    <MyAdmin />
                </Route>
                {/* <Route path='/myadmin' exact>
                    <MyAdmin />
                </Route> */}
                {/* <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route> */}

            </Switch>
        </Router>
        </>
    )
}

export default Routes;