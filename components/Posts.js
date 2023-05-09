import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, } from '../firebase';
import Post from './Post';
import { getFirestore, collection, doc, query, orderBy } from 'firebase/firestore';

const Posts = () => {
    //get document created in another file by collection reference
    const postCollectionRef = collection(db, 'posts');

    const [realtimePosts,] = useCollection(
        //sort the document by timestamp
         query(postCollectionRef, orderBy('timestamp', 'desc'))

    );
  return (
    <div>
      {realtimePosts?.docs.map(post => (
        <Post 
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().image}
            />
      ))
    }
    </div>
  )
}

export default Posts
