import { useParams } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { PageNameValue } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchBookingInfoAction } from '../../store/booking-process/booking-process-thunks';
import { getBookingInfo } from '../../store/booking-process/booking-process-selectors';
import { getSelectedQuest } from '../../store/quests-data/quests-data-selectors';
import { BookingForm } from '../../components/booking-form/booking-form';

export function BookingPage () {
  const dispatch = useAppDispatch();
  const {questId} = useParams();
  const bookingInfo = useAppSelector(getBookingInfo);
  const selectedQuest = useAppSelector(getSelectedQuest);

  useEffect(() => {
    if (questId) {
      dispatch(fetchBookingInfoAction(questId));
    }
  }, [dispatch, questId]);
  if (!selectedQuest) {
    return <p>Not Found</p>;
  }
  const {title, peopleMinMax} = selectedQuest;

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
                <div className="map__container"></div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
            </div>
          </div>
          <BookingForm/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
