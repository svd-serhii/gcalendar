import React from 'react';
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarStyled, Wrapper } from './Calendar.styled';
import SideBar from '../SideBar/SideBar';

const Calendar = () => {
  const calendarId = process.env.REACT_APP_CALENDAR_ID;
  const key = process.env.REACT_APP_KEY;

  // async function listUpcomingEvents() {
  //   let response;
  //   try {
  //     const request = {
  //       calendarId: 'primary',
  //       timeMin: new Date().toISOString(),
  //       showDeleted: false,
  //       singleEvents: true,
  //       maxResults: 10,
  //       orderBy: 'startTime',
  //     };
  //     response = await gapi.client.calendar.events.list(request);
  //   } catch (err) {
  //     document.getElementById('content').innerText = err.message;
  //     return;
  //   }

  //   const events = response.result.items;
  //   if (!events || events.length == 0) {
  //     document.getElementById('content').innerText = 'No events found.';
  //     return;
  //   }
  //   // Flatten to string to display
  //   const output = events.reduce(
  //     (str, event) =>
  //       `${str}${event.summary} (${
  //         event.start.dateTime || event.start.date
  //       })\n`,
  //     'Events:\n'
  //   );
  //   document.getElementById('content').innerText = output;
  // }

  return (
    <>
      <Wrapper>
        <SideBar />
        <CalendarStyled>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            googleCalendarApiKey={key}
            events={{
              googleCalendarId: `${calendarId}`,
              className: 'gcal-event',
              extendedProps: 'extendedProperties',
            }}
            allDaySlot={false}
            initialView="dayGridMonth"
            slotDuration={'01:00:00'}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            timeZone="Ukraine/Kyiv"
            titleFormat={{
              month: 'long',
              day: '2-digit',
            }}
            slotMinTime="09:00:00"
            slotMaxTime="19:00:00"
            hour12="false"
          />
        </CalendarStyled>
      </Wrapper>
    </>
  );
};

export default Calendar;
