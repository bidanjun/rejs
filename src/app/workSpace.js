import React,{useContext} from 'react'
import {connect,compose,provider } from 'reday';
import {HashRouter} from 'reday'
import mainRouter,{secondRouter} from './router'




const WorkSpace = ({main}) => (<div><HashRouter Router={main} /></div>)

export default compose(

    connect(()=>{
      const main=useContext(mainRouter.context)
      return {
        main
      }
    })
  
  )(WorkSpace)


