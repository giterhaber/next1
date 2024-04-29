import React from 'react';

export default async function getData() {
    const response = await fetch('https://manaboss-default-rtdb.firebaseio.com/deals/.json');
if(!response.ok) throw new Error('Failed to Fetch Data');
return response.json();
}