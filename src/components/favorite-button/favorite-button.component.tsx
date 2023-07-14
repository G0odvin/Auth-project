import FavoriteBtn from '../../img/heart-outline.svg';

export const FavoriteButton = () => {
  return (
    <button className='flex text-theme-green hover:text-white border-theme-green text-center align-middle cursor-pointer 
    select-none border py-1 px-4 text-sm rounded-buttonSm hover:bg-theme-green focus:bg-theme-darkGreen focus:text-white'>
      <img src={FavoriteBtn} alt="" className='px-1'/>
      <span className='font-normal'>70</span>
    </button>
  )
}
