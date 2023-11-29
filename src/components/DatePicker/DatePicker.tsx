import React from "react";
import { Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDateRangeStore from "../../store/useDateRangeStore";

const CustomDatePicker: React.FC = () => {
    const { startDate, endDate, setStartDate, setEndDate } = useDateRangeStore();

    return (
        <Box bgColor="white" p="6px" borderRadius="5px" border="2px" borderColor="gray.100" w="20vw">
            <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(dates: [Date | null, Date | null]) => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                }}
                isClearable={true}
                placeholderText="Selecciona tus fechas"
            />
        </Box>
    );
};

export default CustomDatePicker;
