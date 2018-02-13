import React from 'react';
import Link from 'gatsby-link';
import MediaQuery from 'react-responsive';
import './post-preview.css';

class PostPreview extends React.Component {

   constructor(props) {
     super(props);
   }

  //  componentWillReceiveProps(nextProps) {
  //    console.log(nextProps);
  //  }

   render() {
     const postInfo = this.props.postInfo;
     return (
       <Link style={{ textDecoration: 'none', color: 'inherit'}} to={postInfo.path}>
         <div className='card-container'>
           <div className='picture'></div>
           <div className='description'>
             <h2 className='card-title'>{postInfo.title}</h2>
             <h6>{postInfo.date}</h6>
             <MediaQuery minDeviceWidth={576}>
               {(matches) => {
                 if(matches) {
                   return <p>{postInfo.excerpt}</p>
                 } else {
                   return <p></p>
                 }
               }}
             </MediaQuery>
           </div>
         </div>
       </Link>
     )
   }
 }

 export default PostPreview;
