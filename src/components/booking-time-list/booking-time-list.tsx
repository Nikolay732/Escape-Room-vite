import { DateBookingQuest, Slot } from '../../types/booking';
import { getDateTextByRus, getFormattedDateTime } from '../../utils';
import { BookingTimeInput } from '../booking-time-input/booking-time-input';

type BookingTimeListProps = {
  date: DateBookingQuest;
  timeList: Slot[];
  isDisabledForm: boolean;
  onChange: (time: string, date: DateBookingQuest) => void;
}

export function BookingTimeList ({date, timeList, isDisabledForm, onChange}: BookingTimeListProps) {
  const dateTextByRus = getDateTextByRus(date);

  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">{dateTextByRus}</legend>
      <div className="booking-form__date-inner-wrapper">
        {
          timeList.map((timeItem) =>
            (
              <BookingTimeInput
                key={getFormattedDateTime(date, timeItem.time)}
                timeItem={timeItem} date={date}
                isDisabledForm={isDisabledForm}
                onChange={onChange}
              />
            )
          )
        }
      </div>
    </fieldset>
  );
}
