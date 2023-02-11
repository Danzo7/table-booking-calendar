import './App.scss';
import TableBookingCalendar from './components/table_booking_calendar';
import { useDataStore } from './store/dataStore';

function App() {
  const { data, onChanges } = useDataStore();
  return (
    <div className="app-container">
      <TableBookingCalendar
        data={data}
        lockedTime={['11:15', '11:30', '12:00']}
        timeRange={{ endHour: 21, startHour: 10, step: 15 }}
        reservationTooltip={(reservation) => (
          <div>
            <ul>
              <li>
                ({reservation.name}),{reservation.capacity} pers.
              </li>
              <li>
                {reservation.start} - {reservation.end}
              </li>
            </ul>
          </div>
        )}
        cellTooltip={(timeBlock) => (
          <div style={{ fontSize: 'x-small' }}>
            {timeBlock.time}
            <br />
            guest: {timeBlock.reservationGuests}
            <br />
            booking: {timeBlock.reservationCount}
            <br />
            guest(total): {timeBlock.guestsCount}
          </div>
        )}
        onReservationChange={(change) => {
          console.log(change);
          onChanges(change);
        }}
        onEmptyCellClick={(timeBlock) => {
          console.log(timeBlock);
        }}
        onReservationClick={(reservation) => {
          console.log(reservation);
        }}
        reservationModal={(reservation, close) => {
          return (
            <div>
              <p>{reservation.name}</p>
              <button onClick={close}>Close</button>
            </div>
          );
        }}
        capacityModal={(timeBlock, close) => {
          return (
            <div>
              {timeBlock.time}
              <br />
              guest: {timeBlock.reservationGuests}
              <br />
              booking: {timeBlock.reservationCount}
              <br />
              guest(total): {timeBlock.guestsCount}
              <button onClick={close}>Close</button>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
/*
- Locked reservations 
- Double click reservation
- Room text style and info
- color
- grid style
*/
