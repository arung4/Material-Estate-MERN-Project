
import './Listpage.scss'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map.jsx';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

export default function Listpage() {
  const data=useLoaderData();
  return (
    <div className='listpage'>
         <div className="listContainer">
          <div className="wrapper">
             <Filter/>
             <Suspense fallback={<p>Loading...</p>}>
             <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading package posts</p>
          }
        >
          {(postResponse) => postResponse.data.map(post=>( 
            <Card key={post.id} item={post}/>
          ))}
        </Await>
             </Suspense>
          </div> 
         </div>
         <div className="mapContainer">
         <Suspense fallback={<p>Loading...</p>}>
             <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading package posts</p>
          }
        >
          {(postResponse) => 
          <Map items={postResponse.data}/>
          }
        </Await>
             </Suspense>
        
         </div>
    </div>
  )
}
