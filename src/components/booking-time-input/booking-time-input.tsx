import { DateBookingQuest, Slot } from '../../types/booking';
import { getFormattedDateTime } from '../../utils';

type BookingTimeInputProps = {
  date: DateBookingQuest;
  timeItem: Slot;
  isDisabledForm: boolean;
  onChange: (time: string, date: DateBookingQuest) => void;
}

export function BookingTimeInput ({timeItem, date, isDisabledForm, onChange}: BookingTimeInputProps) {
  const {time, isAvailable} = timeItem;
  return (
    <label key={getFormattedDateTime(date, time)} className="custom-radio booking-form__date">
      <input
        type="radio"
        id={getFormattedDateTime(date, time)}
        name="date"
        value={getFormattedDateTime(date, time)}
        disabled={!isAvailable || isDisabledForm}
        onClick={() => onChange(time, date)}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}
