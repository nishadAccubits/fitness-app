import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleStop } from '@fortawesome/free-solid-svg-icons';

export const TitleContainer = ({ title }) => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-lg text-gray-400 font-semibold mb-3'>{title}</h1>
      <p className='text-gray-600 cursor-pointer hover:text-gray-400'>
        View All
      </p>
    </div>
  );
};

// progress loader for loading
export const ProgressLoader = () => {
  return (
    <div className='ipl-progress-indicator' id='ipl-progress-indicator'>
      <div className='ipl-progress-indicator-head'>
        <div className='first-indicator'></div>
        <div className='second-indicator'></div>
      </div>
      <div className='insp-logo-frame'>
        <FontAwesomeIcon
          icon={faCircleStop}
          className='mx-auto w-1/12'
          color='white'
        />
      </div>
    </div>
  );
};

export const progressLoaderFunction = (
  // fake authentication Promise
  loadingFunction = function authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 200));
  }
) => {
  loadingFunction().then(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      // fade out
      ele.classList.add('available');
      setTimeout(() => {
        // remove from DOM
        ele.innerHTML = '';
      }, 200);
    }
  });
};

export const PrimaryButton = ({ text }) => (
  <button className='text-white font-bold text-xl bg-gray-700 block w-full py-4 rounded-xl mt-6'>
    {text}
  </button>
);
