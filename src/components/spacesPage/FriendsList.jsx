import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { PrimaryButton } from '../general';
import { Scaleloader } from '../../utilities/loaders';

const FriendsList = () => {
  const [eventData, setEventData] = useState(null);
  const [friendsData, setFriendsData] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/1`);
        const json = await response.json();
        setEventData(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    const fetchFriendsData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setFriendsData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
    fetchFriendsData();
  }, []);

  return (
    <>
      <h1 className='text-lg text-gray-400 font-semibold mb-4 mt-7'>
        Exercise with friends
      </h1>

      {friendsData ? (
        <div className='grid grid-cols-1 400px:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4'>
          {friendsData.slice(0, 5).map((data, index) => (
            <FriendCard key={index} {...data} />
          ))}
          <div className='rounded-xl p-2 flex items-center gap-3 bg-gray-800/70'>
            <div className='w-10 h-10 flex items-center justify-center'>
              <FontAwesomeIcon icon={faPlus} className='rounded-full w-7 h-7' />
            </div>
            <h6 className=' text-lg text-gray-200'>Add Friend</h6>
          </div>
        </div>
      ) : (
        <Scaleloader />
      )}

      <h1 className='text-lg text-gray-400 font-semibold mb-4 mt-7'>
        Ex Events Nearby
      </h1>
      {eventData ? <EventCard data={eventData} /> : <Scaleloader />}
    </>
  );
};

export default FriendsList;

const FriendCard = ({ image, title, rating, id }) => {
  return (
    <div className='rounded-xl p-2 flex gap-3 bg-gray-800/70'>
      <img src={image} alt='' className='rounded-full w-10 h-10' />
      <div>
        <div className='flex gap-2 items-end'>
          <h6 className=' text-lg text-gray-200'>{title.split(' ')[0]}</h6>
          <p className='text-gray-600'>{rating.rate}hr</p>
        </div>

        <div className='flex gap-2 items-end text-xs'>
          <p>
            {id} <span className='text-gray-600'>streak</span>
          </p>{' '}
          •
          <p>
            {id} <span className='text-gray-600'>coins</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ data: { image, title, rating, id } }) => (
  <div className='rounded-2xl bg-gray-900 max-w-2xl mx-auto shadow-xl'>
    <div className='relative'>
      <img
        src={image}
        alt=''
        className='rounded-t-2xl w-full max-h-[300px] 400px:max-h-[600px]'
      />

      <div className='absolute top-4 right-4 bg-white text-gray-900 rounded-xl px-2 py-1 shadow-lg'>
        Online <span className='text-black font-bold'> • Live</span>
      </div>
    </div>

    <div className='p-4'>
      <h1 className='text-2xl text-gray-200 mb-4'>{title}</h1>
      <p className='text-gray-600 flex items-center'>
        <FontAwesomeIcon
          icon={faCalendar}
          className='rounded-full w-7 h-7 mr-2'
        />
        SEP 7 • 10:00 AM • {rating.rate}hrs
      </p>
      <div className='flex items-center gap-2 my-3'>
        <img src={image} alt='' className='rounded-full w-6 h-6' />

        <p className='text-gray-600'>Khushi and 76 others are attending</p>
      </div>
      <PrimaryButton text='Attend' />
    </div>
  </div>
);
