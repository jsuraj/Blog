import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
// import MediaQuery from 'react-responsive';
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
           <div className='picture'>
             <Img sizes={postInfo.featuredImage} />
           </div>
           <div className='description'>
             <h2 className='card-title'>{postInfo.title}</h2>
             <h6 className='card-date'>{postInfo.date}</h6>
             <h4 className='card-author'>{postInfo.author}</h4>
             <hr />
             <p>{postInfo.excerpt}</p>
             {/* <MediaQuery minDeviceWidth={576}>
               {(matches) => {
                 if(matches) {
                   return <p>{postInfo.excerpt}</p>
                 } else {
                   return <p></p>
                 }
               }}
             </MediaQuery> */}
           </div>
         </div>
       </Link>
     )
   }
 }

 export default PostPreview;
