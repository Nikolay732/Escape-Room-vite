import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { BookingInfoData, BookingQuestData, DateBookingQuest } from '../../types/booking';
import { BookingTextInput } from '../booking-text-input/booking-text-input';
import { BookingTimeList } from '../booking-time-list/booking-time-list';
import {useState} from 'react';
import { sendBookingQuestAction } from '../../store/booking-process/booking-process-thunks';
import { AppRoute } from '../../const';
import { changeBookingPointAction } from '../../store/booking-process/booking-process-slice';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';

type BookingFormProps = {
  selectedBookingPoint: BookingInfoData;
  questId: string;
  peopleMinMax: [number, number] | undefined;
}
type FormData = {
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
}

type ValidationData = {
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  time: {
    time: string;
    date: DateBookingQuest;
  };
}

export function BookingForm ({selectedBookingPoint, questId, peopleMinMax}: BookingFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const today = selectedBookingPoint.slots.today;
  const tomorrow = selectedBookingPoint.slots.tomorrow;

  const [formData, setFormData] = useState<FormData>({
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 0
  });

  const [isDisabledForm, setDisabled] = useState<boolean>(false);

  const onSubmit = (currentbooking: {bookingQuest: BookingQuestData; questId: string}) => {
    setDisabled(true);
    dispatch(sendBookingQuestAction(currentbooking));
    navigate(AppRoute.Main);
    dispatch(changeBookingPointAction(null));
    setDisabled(false);
  };

  const {register, handleSubmit, control,
    formState: {errors} } = useForm<ValidationData>();

  const subminHandler: SubmitHandler<ValidationData> = (data: ValidationData) => {
    onSubmit({
      bookingQuest: {
        date: data.time.date,
        time: data.time.time,
        contactPerson: data.contactPerson,
        phone: data.phone,
        withChildren: formData.withChildren,
        peopleCount: Number(data.peopleCount),
        placeId: selectedBookingPoint.id,
      },
      questId: questId,
    });
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleSubmit(subminHandler)}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <BookingTimeList/>
        <BookingTimeList/>
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Контактная информация</legend>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="name">Ваше имя</label>
            <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"/>
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
            <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}"/>
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">Количество участников</label>
            <input type="number" id="person" name="person" placeholder="Количество участников" required/>
          </div>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
            <input type="checkbox" id="children" name="children" checked/>
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
          </label>
        </fieldset>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>
          nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}
