import { CardsGrid } from '../../components/cards-grid/cards-grid';
import { FilterFrom } from '../../components/filter-form/filter-form';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export function MainPage() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <FilterFrom/>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsGrid questCards={[]}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}


