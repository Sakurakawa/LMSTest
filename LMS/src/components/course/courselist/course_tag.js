import React, { Component } from 'react';

 const CourseTag = (props) => {
   const id=props.id;
   const coursetype=props.coursetype;
   switch (coursetype) {
     case "student":
       return (
         <div className="divtop">
           <ul>
             <li>课程内容</li>
             <Link to={`/homework/${id}`}>
               <li>通知</li>
             </Link>
             <li>笔记</li>
             <li>讨论</li>
             <li>作业</li>
           </ul>
           <ul style={{ float: 'right' }}>
             <li>资源下载</li>
             <li>案例库</li>
           </ul>
         </div>
       );
       break;
     case "teacher":
     return (
       <div className="divtop">
         <ul>
           <li>课程内容</li>
           <Link to={`/homework/${id}`}>
             <li>作业</li>
           </Link>
           <li>实验</li>
           <li>大作业</li>
           <li>测验</li>
           <li>通知</li>
         </ul>
         <ul style={{ float: 'right' }}>
           <li>讨论</li>
           <li>学习进度</li>
           <li>课程评价</li>
           <li>公共资源库</li>
           <li>案例库</li>
           <li>题库</li>
         </ul>
       </div>
     );
       break;
     case "open":
       return (
         <div className="divtop">
           <ul>
             <li>课程内容</li>
           </ul>
         </div>
       );
       break;
     default:
   }

 }

 export default CourseTag;
