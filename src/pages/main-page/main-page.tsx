import { CardsGrid } from '../../components/cards-grid/cards-grid';
import { FilterFrom } from '../../components/filter-form/filter-form';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestsAction } from '../../store/quests-data/quests-data-thunk';
import { getQuestsByFilters, getQuestsStatus} from '../../store/quests-data/quests-data-selectors';
import { PageNameValue } from '../../const';
import { EmptyMainPage } from '../empty-main-page/empty-main-page';
import { LoadingPage } from '../loading-page/loading-page';

export function MainPage() {
  const dispatch = useAppDispatch();
  const questList = useAppSelector(getQuestsByFilters);
  const isQuestLoading = useAppSelector(getQuestsStatus);

  useEffect (() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchQuestsAction());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  if (questList.length === 0) {
    return (
      <EmptyMainPage/>
    );
  }

  if (isQuestLoading) {
    return (
      <LoadingPage/>
    );
  }

  return (
    <div className="wrapper">
      <Header currentPage={PageNameValue.Main}/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <FilterFrom/>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsGrid questList={questList}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}


