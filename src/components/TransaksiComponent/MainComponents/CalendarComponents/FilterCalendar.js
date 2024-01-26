import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

export default function FilterCalendar() {
  const [selected, setSelected] = React.useState("");
  return (
    <Calendar
      style={
        {
          // borderWidth: 1,
          // borderColor: 'gray',
          // height: 350
        }
      }
      // Specify the current date
      current={"2012-03-01"}
      // Callback that gets called when the user selects a day
      onDayPress={(day) => {
        console.log("selected day", day.dateString);
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
    />
  );
}
