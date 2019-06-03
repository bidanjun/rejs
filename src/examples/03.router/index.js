import React,{useContext} from 'react'
import {share, connect,compose,provider } from 'reday';
import {HashRouter,Router} from 'reday'

//两个Router在两个区域，对浏览器地址栏的变化，响应都是正常的
//但如果一个包括另一个HashRouter，则很明显，外面的HashRouter返回not found，意味着里面的HashRouter不可显示。
const HomePage = ()=>(<h2> Home Page </h2>)
const PostPage = ()=>(<h2> Post List Page </h2>)

const mainRouter =share(()=> new Router({
    '/': HomePage,
    '/Home': HomePage,
    '/PostList':PostPage
},{url:'/'}));

const AddPage = ()=>(<h2> Add Page  </h2>)
const EditPage = ({id})=>(<h2> Edit Page {id? 'id='+id:''} </h2>)
const secondRouter =share(()=>new Router({
  '/PostList': PostPage,
  '/PostList/Add': AddPage,  
  '/PostList/Edit/:id': EditPage,  
},{url:'/PostList'}));
console.log('mainRouter=',mainRouter)

//setUrl可以显示，但不改变浏览器地址栏
const RouterApp = (props) => {
    const {main,second} = props

  return (
  <div>
    <div >
      <h2>Router Example</h2>

<button onClick={e =>main.back()} children='Back' />
      <button onClick={e => main.redirect('/Home')} children='Home' />
      <button onClick={e => main.redirect('/PostList')} children='PostList' />
      <h2>Router Area：</h2>
      <div>
        <HashRouter Router={main} />
      </div>

    </div>

    <div >
      <h2>CRUD Example</h2>

      <button onClick={e => second.redirect('/PostList')} children='Post List' />
      <button onClick={e => second.redirect('/PostList/Edit/2')} children='edit Post' />
      <button onClick={e => second.redirect('/PostList/Add')} children='add Post' />
      <h2>Router Area：</h2>
      <div>
        <HashRouter Router={second} />
      </div>

    </div>
  </div>
  )
}


export default compose(
  provider(mainRouter,secondRouter),
  // mainRouter.provider(),
  // secondRouter.provider(),
  connect(()=>{
    const main=useContext(mainRouter.context)
    const second=useContext(secondRouter.context)
    return {
      main,
      second
    }
  })

)(RouterApp)