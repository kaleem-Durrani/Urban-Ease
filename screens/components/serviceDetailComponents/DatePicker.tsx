import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  Button,
  DatePickerIOS,
  DatePickerAndroid,
} from "react-native";

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = async () => {
    if (Platform.OS === "ios") {
      // For iOS, show DatePickerIOS
      return showDatePickerIOS();
    } else {
      // For Android, show DatePickerAndroid
      return showDatePickerAndroid();
    }
  };

  const showDatePickerIOS = () => {
    return new Promise((resolve) => {
      // Set a minimum date if needed
      const options = { date: selectedDate, mode: "date" };

      DatePickerIOS.open(options, (date) => {
        if (date) {
          setSelectedDate(date);
          resolve();
        }
      });
    });
  };

  const showDatePickerAndroid = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: selectedDate,
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        const newDate = new Date(year, month, day);
        setSelectedDate(newDate);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  return (
    <View>
      {Platform.OS === "ios" ? (
        <DatePickerIOS
          date={selectedDate}
          mode="date"
          onDateChange={(date) => setSelectedDate(date)}
        />
      ) : null}
      <Button title="Select Date" onPress={handleDateChange} />
      <Text>Selected Date: {selectedDate.toDateString()}</Text>
    </View>
  );
};

export default MyDatePicker;
