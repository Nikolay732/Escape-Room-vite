import { useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { CITY, MAP_SIZE, PageNameValue } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchBookingInfoAction } from '../../store/booking-process/booking-process-thunks';
import { getBookingInfo, getSelectedBookingPoint } from '../../store/booking-process/booking-process-selectors';
import { getSelectedQuest } from '../../store/quests-data/quests-data-selectors';
import { BookingForm } from '../../components/booking-form/booking-form';
import { BookingInfoData } from '../../types/booking';
import { changeBookingPointAction } from '../../store/booking-process/booking-process-slice';
import { Map } from '../../components/map/map';

export function BookingPage () {
  const dispatch = useAppDispatch();
  const {questId} = useParams();
  const bookingInfo = useAppSelector(getBookingInfo);
  const selectedQuest = useAppSelector(getSelectedQuest);
  let selectedBookingPoint = useAppSelector(getSelectedBookingPoint);

  useEffect(() => {
    if (questId) {
      dispatch(fetchBookingInfoAction(questId));
    }
  }, [dispatch, questId]);
  if (!selectedQuest) {
    return <p>Not Found</p>;
  }
  if (selectedBookingPoint === null) {
    selectedBookingPoint = bookingInfo[0];
  }
  const {title, peopleMinMax} = selectedQuest;
  const address = selectedBookingPoint?.location.address;

  const handleChangeSelectedBookingPoint = (point: BookingInfoData) => dispatch(changeBookingPointAction(point));

  return (
    <div className="wrapper">
      <Header currentPage={PageNameValue.Booking}/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"/>
            <img srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""/>
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  <Map points={bookingInfo} city={CITY} selectedPoint={selectedBookingPoint} size={MAP_SIZE.bookingPage} quest={null} onPointChange={handleChangeSelectedBookingPoint}/>
                </div>
              </div>
              <p className="booking-map__address">{`Вы выбрали: ${address}`}</p>
            </div>
          </div>
          {!!questId && <BookingForm selectedBookingPoint={selectedBookingPoint} questId={questId} peopleMinMax={peopleMinMax}/>}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
