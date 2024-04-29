
import React from 'react'
import getData from './data'





export default async function page() {
    const data:Promise<Deal[]> = getData();
    const deals = await data;
    console.log(deals)

  return (
    <div>6945 nftrader deal page</div>
  )
}


export async function firebaseProps() {
    const fire = await fetch('https://manaboss-default-rtdb.firebaseio.com/deals/.json')
        .then(r => r.json())
    console.log(fire)
    return {
        props: {
            fire
        }
    }

        
}

//firebaseProps()