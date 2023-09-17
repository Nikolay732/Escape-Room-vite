import { useEffect } from 'react';
import { getBookedQuests } from '../../store/booking-process/booking-process-selectors';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { PageNameValue } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBookedQuestsAction } from '../../store/booking-process/booking-process-thunks';
import { MyQuestCardsGrid } from '../../components/my-quest-cards-grid/my-quest-cards-grid';

export function MyQuestsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchBookedQuestsAction());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const bookedQuests = useAppSelector(getBookedQuests);

  return (
    <div className="wrapper">
      <Header currentPage={PageNameValue.MyQuests} />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <MyQuestCardsGrid questList={bookedQuests}/>
        </div>
      </main >
      <Footer/>
    </div>
  );
}

