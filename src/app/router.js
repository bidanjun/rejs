import React from 'react'
import {share} from 'reday';
import {Router} from 'reday'

//两个Router在两个区域，对浏览器地址栏的变化，响应都是正常的
//但如果一个包括另一个HashRouter，则很明显，外面的HashRouter返回not found，意味着里面的HashRouter不可显示。
const HomePage = ()=>(<h2> Home Page </h2>)
const PostPage = ()=>(<h2> Post List Page </h2>)

const mainRouter =share(()=> new Router({
    '/': HomePage,
    '/Home': HomePage,
    '/PostList':PostPage
},{url:'/'}));
export default mainRouter;

const AddPage = ()=>(<h2> Add Page  </h2>)
const EditPage = ({id})=>(<h2> Edit Page {id? 'id='+id:''} </h2>)
export const secondRouter =share(()=>new Router({
  '/PostList': PostPage,
  '/PostList/Add': AddPage,  
  '/PostList/Edit/:id': EditPage,  
},{url:'/PostList'}));
