import React from 'react'
import { Select, NumberInput, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";



const App = () => {
  return (
    <>
      <Select
        label="Type"
        placeholder="Pick a Type"
        data={["Income", "Expense"]}
      />
      <Select
        label="Category"
        placeholder="Pick a Category"
        data={[
          "Salary",
          "Investment",
          "Savings",
          "Rent",
          "Groceries",
          "Transportation",
        ]}
      />
      <NumberInput
        label="Amount"
        description="Enter Amount"
        placeholder="Amount"
      />
      <DateInput label="Date input" placeholder="Date input" />
      <Button variant="filled" color="cyan">
        Button
      </Button>
    </>
  );
}

export default App