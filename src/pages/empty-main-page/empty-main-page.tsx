import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { PageNameValue } from '../../const';

export function EmptyMainPage() {

  return (
    <div className="wrapper">
      <Header currentPage={PageNameValue.Main}/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">Мы не смогли найти ни одного подходящего квеста</h1>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
